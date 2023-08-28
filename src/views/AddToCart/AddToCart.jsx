import React from 'react';
import {
  Box,
  Text,
  Image,
  Select,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import Tophead from '../../components/Tophead/Tophead';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import qs from 'qs';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { imageUrl } from '../../utilities/Config';
import { loadUser } from '../../reducers/useReducers';
import { useDispatch } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import course from '../../assets/images/course.png';
import { filter } from '../../reducers/CartReducer';
import { clear } from '../../reducers/CartReducer';
import { useParams } from 'react-router-dom';
import { add } from '../../reducers/CartReducer';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { GET, POST } from '../../utilities/ApiProvider';

const AddToCart = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  const [mycard, setMycard] = useState([]);
  const [cardDataId, setCardDataId] = useState([]);
  const [change,setChange] = useState(false);
  const [bool, setBool] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const {
    isOpen: isCardOpen,
    onOpen: onCardOpen,
    onClose: onCardClose,
  } = useDisclosure();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [paymentType, setPaymentType] = useState({ items: {} });
  const [cardId, setCardId] = useState('');
  const selector = useSelector(state => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalPrice = data.reduce((acc, item) => acc + item.data.price, 0);
  // const totalPrice  = 43;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [paymentdata, setPaymentData] = useState({
    type: 'card',
    number: ['4242 4242 4242 4242'],
    exp_month: ['12'],
    exp_year: ['2034'],
  });

  // const stripePayment = async () => {
  //   const res = await POST(
  //     'https://api.stripe.com/v1/payment_methods',
  //     paymentdata
  //   );
  // };

  const params = useParams();
  const toast = useToast();
  
  const checkOut = () => {
    if (user) {
      onOpen();
    } else {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: 'Please login and then try again',
      });
      return;
    }
  };

  // setPaymentData({...paymentData,items:[{...paymentData.items,price:totalPrice}]});
  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
      setData(selector?.cart);
    }
  }, [selector]);
  
  const getCardData = async () => {
    const res = await GET(`users/${user?._id}/card`,{
      authorization: `bearer ${user?.JWT_TOKEN}`
    });
    setMycard(res?.data[0]?.cards);
  };


  useEffect(() => {
    if(user){
      getCardData();
    }
  }, [user]);

  useEffect(() => {
    setPaymentType(data[0]?.items?.paymentType);
    if(data[0]?.items?.paymentType == 'videos' || data[0]?.items?.paymentType == 'membership'){
      setChange(true);
    }
  }, [data]);


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

  const checkFun = () => {
    onCardOpen();
    onClose();
  };

  const [cardDetails, setCardDetails] = useState({
    card: '',
    items: '',
  });

  const myData = item => {
    setCardId(item._id);
    setBool(true);
    if (paymentType == 'videos') {
      const arrayItem =
        data?.length > 0 &&
        data?.map(value => {
          return {
            item: value?.data?.video,
            price: 5,
            paymentType: 'videos',
            membership: value?.items?.membership,
          };
        });
      setCardDetails({ ...cardDetails, card: item._id, items: arrayItem });
    } else {
      const arrayItem =
        data.length > 0 &&
        data.map(value => {
          return {
            item: value.data._id,
            paymentType: value.items.paymentType,
            price: value.data.price,
          };
        });
      setCardDetails({ ...cardDetails, card: item._id, items: arrayItem });
    }
  };


  const Payment = async () => {
    if (
      cardDetails.card == null ||
      (undefined && cardDetails.items == null) ||
      undefined
    ) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        description: 'Please Select the payment card',
        duration: 5000,
      });
      return;
    }

    try {
      const res = await POST('order', cardDetails, {
        authorization: `bearer ${user?.JWT_TOKEN}`,
      });
      if (res.status == 200) {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'success',
          description: 'Course Purchased successfully',
          duration: 5000,
        });
        console.log("first",res.data.data.user);
        dispatch(loadUser(res?.data?.data?.user));
        dispatch(clear());
        onClose();
        navigate('/myprofile');
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'errorx',
          description: res.data.message,
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
        getCardData();
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

  ///// / SenmData

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

  const filterItem = (id)=>{
    const filterData = data?.filter((item)=>{return item.data._id != id});
    dispatch(filter(filterData));
  }

  return (
    <>
      <Tophead />
      <Navbar />
      <Box
        position={'relative'}
        padding={'40px'}
        paddingTop={'40px'}
        backgroundColor={'#00000f'}
        minH={'86vh'}
        marginTop={'70px'}
      >
        <Text
          textAlign={'center'}
          fontSize={'30px'}
          fontWeight={'bold'}
          color={'white'}
          m={'30px 0'}
        >
          Add to Cart
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor={'#00000f'}
            border={'1px solid #ddd'}
            color={'white'}
          >
            <ModalHeader fontSize={'25px'}>Select Payment Details</ModalHeader>
            <Box
              w={'30%'}
              ml={'26px'}
              backgroundColor={'blue'}
              mt={'-10px'}
              height={'3px'}
            ></Box>
            <ModalCloseButton fontSize={'18px'} />
            <ModalBody padding={'40px'}>
              {mycard.length > 0 ? (
                mycard.length > 0 &&
                mycard.map(item => {
                  return (
                    <Box
                      padding={'20px'}
                      onClick={() => {
                        myData(item);
                      }}
                      cursor={'pointer'}
                      backgroundColor={item._id == cardId ? 'blue' : ''}
                      boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)"
                      width={'100%'}
                    >
                      <Box>
                        <Text
                          fontWeight={'bold'}
                          fontSize={'22px'}
                          color={item._id == cardId ? 'black' : 'blue'}
                        >
                          Card Title
                        </Text>
                        <Text fontSize={'22px'}>{item?.cardholdername}</Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize={'22px'}
                          fontWeight={'bold'}
                          color={item._id == cardId ? 'black' : 'blue'}
                        >
                          Ending Date
                        </Text>
                        <Text fontSize={'22px'}>{item?.cardnumber}</Text>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Text color={'white'} textAlign={'center'} fontSize={'20px'}>
                  No Card Found
                </Text>
              )}

              <Box m={'10px 0'}>
                <Text
                  color={'white'}
                  cursor={'pointer'}
                  margin={'auto'}
                  onClick={checkFun}
                  width={'fit-content'}
                  display={mycard.length > 0 ? 'none' : 'block'}
                  letterSpacing={'1px'}
                >
                  Add new Card?
                </Text>
              </Box>
              <Button
                width={'100%'}
                _hover={'none'}
                display={mycard.length > 0 ? 'block' : 'none'}
                backgroundColor={'blue'}
                onClick={Payment}
                color={'white'}
              >
                Payment
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal isOpen={isCardOpen} onClose={onCardClose}>
          <ModalOverlay />
          <ModalContent
            border={'1px solid gray'}
            color={'white'}
            backgroundColor={'#00000f'}
          >
            <ModalHeader>New Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody zIndex={'4'}>
              <Input
                color={'white'}
                onChange={e => {
                  setFields({ ...fields, cardholdername: e.target.value });
                }}
                m={'5px'}
                borderColor={'white'}
                placeholder="Account Title"
                type="text"
              />
              <Input
                m={'5px'}
                color={'white'}
                onChange={e => {
                  setFields({ ...fields, cardnumber: e.target.value });
                }}
                borderColor={'white'}
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
                  <Select onChange={handleMonthChange} width={'48%'}>
                    {months.map(item => {
                      return (
                        <option value={item.value} style={{ color: 'black' }}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                  <Select width={'48%'} onChange={handleYearChange}>
                    {years.map(item => {
                      return <option style={{ color: 'black' }}>{item}</option>;
                    })}
                  </Select>
                  <Input
                    onChange={e => {
                      setFields({ ...fields, cvc: e.target.value });
                    }}
                    placeholder="cvc"
                    width={'48%'}
                    type="text"
                  />
                </Box>
              </Box>
              <Button
                _hover={'none'}
                width={'100%'}
                onClick={sendData}
                color={'white'}
                backgroundColor={'blue'}
              >
                Save
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
        {data && data.length > 0 ? (
          data.map(item => {
            return (
              <Box display={'flex'} flexDirection={'column'}>
                <Box m={'10px 0'}>
                  <Box
                    display={'flex'}
                    width={'70%'}
                    mx={'auto'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        padding={'5px'}
                        width={'30%'}
                        backgroundColor={'#01204b'}
                      >
                        {
                          change?<Image
                          width={'100%'}
                          src={imageUrl + item?.data?.thumbnail}
                          alt="image"
                        />: <Image
                        width={'100%'}
                        src={imageUrl + item?.data?.coursePic}
                        alt="image"
                      />
                        }
                       
                      </Box>
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'10px'}
                      >
                        <Text
                          color={'white'}
                          fontWeight={'bold'}
                          fontSize={'28px'}
                        >
                          {item?.data?.name}
                        </Text>
                        <Box
                          display={'flex'}
                          gap={'20px'}
                          alignItems={'center'}
                        >
                          <Text
                            color={'white'}
                            fontWeight={'semibold'}
                            fontSize={'20px'}
                          >
                            Price:
                          </Text>
                          <Text ml={'10px'} fontSize={'30px'} color={'white'}>
                            ${item?.data?.price}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        color={'white'}
                        _hover={'none'}
                        px={'50px'}
                        onClick={() => {
                          filterItem(item?.data?._id);
                        }}
                        backgroundColor={'blue'}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    margin={'auto'}
                    mt={'30px'}
                    width={'70%'}
                    height={'1px'}
                    backgroundColor={'white'}
                  ></Box>
                </Box>
              </Box>
            );
          })
        ) : (
          <Text textAlign={'center'} color={'white'} fontSize={'25px'}>
            No data Found
          </Text>
        )}

        <Box width={'80%'} padding={'30px'} margin={'auto'}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            gap={'30px'}
            alignItems={'center'}
            width={'80%'}
            margin={'auto'}
          >
            {data && data.length > 0 ? (
              <>
                <Text fontSize={'23px'} color={'white'} fontWeight={'bold'}>
                  Total Amount:{' '}
                  <Text ml={'20px'} color={'blue'} as={'span'}>
                    ${totalPrice}
                  </Text>
                </Text>
                <Button
                  px={'40px'}
                  onClick={checkOut}
                  _hover={'none'}
                  backgroundColor={'blue'}
                  color={'white'}
                >
                  CHECKOUT
                </Button>
              </>
            ) : (
              ''
            )}
          </Box>

          <Box paddingTop={'80px'}>
            <Banner />
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddToCart;
