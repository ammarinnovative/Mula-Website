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
import { DELETE, GET, POST } from '../../../utilities/ApiProvider';

const MyCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMonth, setSelectedMonth] = useState('');
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
    cardtype: '',
    stripe_customer_id: '',
  });

  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const selector = useSelector(state => state);

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value?.data);
    }
  }, [selector]);


  const stripeApiKey = 'sk_test_51K1vF0EbJpfXXnkzehoR5KTVCjwSAXy42umTT12mKNNGnfbEOCymor9toS3aOxBTigNPKe7iATnmjqiLFDkbc9Lc00QvTjZKOL';
  const apiUrl = 'https://api.stripe.com/v1/payment_methods';

  const headers = {
    'Authorization': `Bearer ${stripeApiKey}`,
    'Content-Type': 'multipart/form-data', 
  };

  const sendData = async () => {
    if (
      !fields.cardnumber ||
      !fields.cardholdername ||
      !fields.exp_month ||
      !fields.exp_year 
    ) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        description: 'Please fill all the fields',
        duration: 5000,
      });
    }

    const data = document.getElementById('form');

      const formdata = new FormData(data);
      try {
        const res = await axios.post(apiUrl, formdata, { headers })
        console.log(res);
      } catch (error) {
        console.error('Error:', error.response.data.error.message);

      }

    // const response = await paymentVerify();
    // setFields({...fields,expiry:(selectedMonth+"/"+selectedYear).toString()});
  };

  const getData = async () => {
    const res = await GET(`users/${user?._id}/card`, {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setData(res?.data[0]?.cards);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const deleteCard = async ()=>{
    try {
      const res = await DELETE(`users/63ab302317f915bd2aa727df/card/63ab6f2e202acf23d01afbf5`);
    if(res.status == 200){
      toast({
        position:"bottom-left",
        isClosable:true,
        status:"success",
        description:"Deleted successfully",
        duration:5000
      });
      getData();
    }else{
      toast({
        position:"bottom-left",
        isClosable:true,
        status:"error",
        description:"Something went wrong",
        duration:5000
      });
    }
    } catch (error) {
      toast({
        position:"bottom-left",
        isClosable:true,
        status:"error",
        description:error,
        duration:5000
      });
    }
    
  }

  const deletCard = async (id)=>{
    try {
      const res = await DELETE(`users/${user?.JWT_TOKEN}/card/${id}`);
      if(res.status ==200){
        toast({
          position:"bottom-left",
          duration:5000,
          isClosable:true,
          status:"success",
          description:"Deleted successfully", 
        });
        getData();
      }else{
        toast({
          position:"bottom-left",
          duration:5000,
          isClosable:true,
          status:"error",
          description:"Something went wrong", 
        });
      }
    } catch (error) {
      toast({
        position:"bottom-left",
        duration:5000,
        isClosable:true,
        status:"error",
        description:error, 
      });
    }
  }
 


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
            <form id='form'>
              <Input
                color={'white'}
                boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                onChange={e => {
                  setFields({ ...fields, cardholdername: e.target.value });
                }}
                m={'5px'}
                name='type'
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
                name='card[number]'
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
                    name='card[exp_month]'
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
                    name='card[exp_year]'
                    onChange={handleYearChange}
                  >
                    {years.map(item => {
                      return <option style={{ color: 'black' }}>{item}</option>;
                    })}
                  </Select>
                  {/* <Input
                    boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                    onChange={e => {
                      setFields({ ...fields, cvc: e.target.value });
                    }}
                    placeholder="cvc"
                    name='cvc'
                    width={'48%'}
                    type="text"
                  /> */}
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
      <Tophead />
      <Navbar />
      <Box position={'absolute'} width={'100%'} mt={'70px'}>
        <Sidebar>
          <Box
            width={'90%'}
            mt={'40px'}
            margin={'auto'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text fontSize={'30px'} fontWeight={'bold'} color={'white'}>
              My Cards
            </Text>
            <Button
              onClick={onOpen}
              color={'white'}
              _hover={'none'}
              backgroundColor={'blue'}
            >
              Add New
            </Button>
          </Box>
          <Box
            display={'flex'}
            m={'50px 0'}
            justifyContent={'center'}
            gap={'40px'}
            flexWrap={'wrap'}
            alignItems={'center'}
          >
            {data.length > 0 ? (
              data.length > 0 &&
              data?.map(item => {
                return (
                  <Box
                    width={'45%'}
                    padding={'20px'}
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
                        onClick={deleteCard}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Text>No Data Found</Text>
            )}
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default MyCard;
