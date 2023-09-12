import {
  Box,
  Button,
  Select,
  Text,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import { Toast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DELETE, GET, POST, PUT } from '../../../utilities/ApiProvider';
import qs from 'qs';

const MyCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [bool, setBool] = useState(false);
  const toast = useToast();
  const [selectedYear, setSelectedYear] = useState('');
  const months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2023 + i);

  const handleMonthChange = event => {
    setSelectedMonth(event.target.value);
    if (event.target.value.length == 1) {
      setFields({ ...fields, exp_month: 0 + event.target.value });
      return;
    }
    setFields({ ...fields, exp_month: event.target.value });
  };
  const navigate = useNavigate();
  const handleYearChange = event => {
    const date = event.target.value;
    const lastTwoDigits = date.toString().slice(-2);
    setSelectedYear(lastTwoDigits);
    setFields({ ...fields, exp_year: lastTwoDigits });
  };

  const [fields, setFields] = useState({
    cardnumber: '',
    cvc: '',
    cardholdername: '',
    exp_month: '',
    exp_year: '',
    expiry: '',
  });

  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const selector = useSelector(state => state);

  const stripeApiKey =
    'sk_test_51K1vF0EbJpfXXnkzehoR5KTVCjwSAXy42umTT12mKNNGnfbEOCymor9toS3aOxBTigNPKe7iATnmjqiLFDkbc9Lc00QvTjZKOL';
  const apiUrl = 'https://api.stripe.com/v1/payment_methods';

  const headers = {
    Authorization: `Bearer ${stripeApiKey}`,
    'Content-Type':
      'multipart/form-data; boundary=----WebKitFormBoundary0ef7ZgAHWPzz5GUb',
  };

  useEffect(() => {
    if (fields.exp_month && fields.exp_year) {
      setFields({
        ...fields,
        expiry: fields.exp_month + '/' + fields.exp_year,
      });
    }
  }, [bool]);

  const verifyData = async data => {
    const objdata = {
      cardnumber: fields.cardnumber,
      cvc: fields.cvc,
      cardholdername: fields.cardholdername,
      expiry: fields.exp_month + '/' + fields.exp_year,
      cardtype: data?.card?.brand,
      stripe_customer_id: data?.id,
    };
    try {
      const res = await POST(`users/${user?._id}/card`, objdata, {
        authorization: `bearer ${user?.JWT_TOKEN}`,
      });
      if (res.status == 200) {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'success',
          duration: 5000,
          description: res.data.message,
        });
        onClose();
        getData();
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'error',
          duration: 5000,
          description: res.data.message,
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: error,
      });
    }
  };
  const sendData = async () => {
    if (
      !fields.cardnumber ||
      !fields.cardholdername ||
      !fields.exp_month ||
      !fields.exp_year ||
      !fields.cvc
    ) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        description: 'Please fill all the fields',
        duration: 5000,
      });
      return;
    }
    setBool(true);

    const getdata = {
      type: `card`,
      'card[number]': `${fields.cardnumber}`,
      'card[exp_month]': `${fields.exp_month}`,
      'card[exp_year]': `${fields.exp_year}`,
    };

    let newData = qs.stringify(getdata);

    let configData = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.stripe.com/v1/payment_methods',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer sk_test_51K1vF0EbJpfXXnkzehoR5KTVCjwSAXy42umTT12mKNNGnfbEOCymor9toS3aOxBTigNPKe7iATnmjqiLFDkbc9Lc00QvTjZKOL',
      },
      data: newData,
    };
    try {
      const response = await axios.request(configData);
      if (response?.data?.id) {
        const res = await verifyData(response?.data);
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'error',
          description: 'Something is wrong in your data',
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        description: error,
        duration: 5000,
      });
    }
  };

  const getData = async () => {
    const res = await GET(`users/${user?._id}/card`, {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setData(res?.data[0]?.cards);
  };

  const deleteCard = async id => {
    try {
      const res = await PUT(
        `users/${user?._id}/card/${id}`,
        {},
        {
          authorization: `bearer ${user?.JWT_TOKEN}`,
        }
      );

      if (res.status == 200) {
        toast({
          position: 'bottom-left',
          duration: 5000,
          isClosable: true,
          status: 'success',
          description: 'Deleted successfully',
        });
        getData();
      } else {
        toast({
          position: 'bottom-left',
          duration: 5000,
          isClosable: true,
          status: 'error',
          description: res?.data?.message,
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        duration: 5000,
        isClosable: true,
        status: 'error',
        description: error,
      });
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    } 
  }, [user]);

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);

  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border={'1px solid gray'}
          color={'white'}
          backgroundColor={'#00000f'}
        >
          <ModalHeader>New Card</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="form">
              <Input
                color={'white'}
                boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                onChange={e => {
                  setFields({ ...fields, cardholdername: e.target.value });
                }}
                m={'5px'}
                name="type"
                borderColor={'white'}
                placeholder="Account Title"
                type="text"
              />
              <Input
                m={'5px'}
                color={'white'}
                boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                onChange={e => {
                  setFields({ ...fields, cardnumber: e.target.value });
                }}
                borderColor={'white'}
                name="card[number]"
                placeholder="Account Number"
                type="text"
              />
              <Box>
                <Text color={'white'} fontSize={'20px'}>
                  Date of Expiry :
                </Text>
                <Box
                  display={'flex'}
                  flexWrap={'wrap'}
                  m={'10px 0'}
                  gap={'10px'}
                >
                  <Select
                    boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                    onChange={handleMonthChange}
                    name="card[exp_month]"
                    width={'48%'}
                  >
                    {months.map(item => {
                      return (
                        <option value={item.value} style={{ color: 'black' }}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                  <Select
                    boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                    width={'48%'}
                    name="card[exp_year]"
                    onChange={handleYearChange}
                  >
                    {years.map(item => {
                      return <option style={{ color: 'black' }}>{item}</option>;
                    })}
                  </Select>
                  <Input
                    boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                    onChange={e => {
                      setFields({ ...fields, cvc: e.target.value });
                    }}
                    placeholder="cvc"
                    name="cvc"
                    width={'48%'}
                    type="text"
                  />
                </Box>
              </Box>
            </form>
            <Button
              onClick={sendData}
              _hover={'none'}
              width={'100%'}
              color={'white'}
              backgroundColor={'blue'}
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
   
      <Box >
        <Sidebar>
          <Box
            width={'90%'}
            mt={'40px'}
            margin={'auto'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'200px'}
            
          >
            <Text fontSize={'30px'} fontWeight={'bold'} color={'white'}>
              My Cards
            </Text>
            {data?.length > 0 ? (
              ''
            ) : (
              <Button
                onClick={onOpen}
                color={'white'}
                _hover={'none'}
                backgroundColor={'blue'}
              >
                Add New
              </Button>
            )}
          </Box>
          <Box
            display={'flex'}
            m={'50px 0'}
            pl={12}
            gap={'40px'}
            flexWrap={'wrap'}
            alignItems={'center'}
          >
            {data?.length > 0 ? (
              data?.length > 0 &&
              data?.map(item => {
                return (
                  <Box
                    width={'45%'}
                    padding={'20px'}
                    key={item?._id}
                    boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                  >
                    <Box>
                      <Text fontSize={'23px'} color={'blue'}>
                        Card Title
                      </Text>
                      <Text fontSize={'23px'} color={'white'}>
                        {item?.cardholdername}
                      </Text>
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box>
                        <Text fontSize={'23px'} color={'blue'}>
                          Ending At
                        </Text>
                        <Text fontSize={'23px'} color={'white'}>
                          {item?.cardnumber}
                        </Text>
                      </Box>
                      <Button
                        backgroundColor={'blue'}
                        p={'10px 30px'}
                        _hover={'none'}
                        color={'white'}
                        onClick={() => {
                          deleteCard(item?._id);
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Text
                textAlign={'center'}
                color={'white'}
                fontWeight={'700'}
                fontSize={'25px'}
              >
                No Data Found
              </Text>
            )}
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default MyCard;
