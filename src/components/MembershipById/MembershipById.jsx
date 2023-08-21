import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Homehead from '../../assets/images/homeHead.png';
import coursebook from '../../assets/images/coursebook.png';
import course1 from '../../assets/images/course.png';
import course2 from '../../assets/images/course2.png';
import CoursesAccordion from '../../components/CoursesAccordion/CoursesAccordion';
import Tophead from '../Tophead/Tophead';
import { useParams } from 'react-router-dom';
import MembershipAccordion from "../MembershipAcc/MembershipAcc";
import { useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { add } from '../../reducers/CartReducer';
import { imageUrl } from '../../utilities/Config';
import { useSelector } from 'react-redux';
import { GET } from '../../utilities/ApiProvider';

const MembershipById = () => {
  const params = useParams();
  const [bool, setBool] = useState(false);
  const [data, setData] = useState([]);
  const [paymentType, setPaymentType] = useState('');
  const [courrseDetails, setCourseDetails] = useState({
    data: [],
    items: { paymentType: 'membership' },
  });
  const getData = async () => {
    const res = await GET(`web/membership/${params.id}`);
    setCourseDetails({ ...courrseDetails, data: res?.data[0]});
    setData(res?.data[0].playlist);
  };
  console.log("data",data);
  const selector = useSelector(state => state);
  const id = params.id;
  const dispatch = useDispatch();

  const addData = () => {
    dispatch(add(courrseDetails));
  };


  useEffect(() => {
    const find = selector?.cart.find(datas => {
      let check = datas.data._id == params.id;
      setPaymentType(datas?.items?.paymentType);
      if (check) {
        setBool(true);
      } else {
        setBool(false);
      }
      return;
    });
  }, [selector]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Tophead />
      <Box
        position={'relative'}
        backgroundColor={'#00000f'}
        width={'100%'}
        height={'100vh'}
      >
        <Navbar />
        <Box position={'absolute'} width={'100%'} mt={'100px'}>
          <Box
            display={'flex'}
            gap={'30px'}
            width={'70%'}
            mt={'60px'}
            mx={'auto'}
          >
            <Box
              width={'40%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              backgroundColor={'#01204b'}
              padding={'10px'}
            >
              <Image
                src={imageUrl + courrseDetails?.data?.thumbnail}
                alt="img"
              />
            </Box>
            <Box width={'40%'}>
              <Text fontSize={'25px'} fontWeight={'bold'} color={'white'}>
                {courrseDetails?.data?.name}
              </Text>
              <Box
                width={'100%'}
                m={'10px 0'}
                height={'4px'}
                borderRadius={'5px'}
                backgroundColor={'white'}
              ></Box>
              <Text>{courrseDetails?.data?.description}</Text>
              <Text
                fontSize={'20px'}
                fontWeight={'bold'}
                m={'10px 0'}
                color={'white'}
              >
                Key features
              </Text>
              <Box display={'flex'} gap={'10px'}>
                <Text
                  color={'white'}
                  borderRadius={'6px'}
                  backgroundColor={'#01204b'}
                  fontWeight={'semibold'}
                  padding={'5px 13px'}
                >
                  2 Courses
                </Text>
              </Box>
              <Text color={'white'} mt={'30px'} fontWeight={'bold'}>
                Price
              </Text>
              <Box
                display={'flex'}
                mt={'10px'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Text fontSize={'25px'} fontWeight={'bold'} color={'white'}>
                  ${courrseDetails?.data?.price}
                </Text>

                <Button
                  _hover={'none'}
                  backgroundColor={'#01204b'}
                  color={'white'}
                  display={
                    bool ||
                    paymentType == 'membership1' ||
                    paymentType == 'videos' ||
                    courrseDetails?.data == undefined ||
                    courrseDetails.data == null
                      ? 'none'
                      : 'block'
                  }
                  onClick={addData}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding={"50px 10px"} backgroundColor={'#00000f'}>
        {data.length > 0 ? (
          <MembershipAccordion data={data} />
        ) : (
          <Text
            color={'white'}
            fontWeight={'bold'}
            paddingBottom={'50px'}
            fontSize={'30px'}
            minH={'30vh'}
            textAlign={'center'}
            backgroundColor={'#00000f'}
          >
            No Data Found
          </Text>
        )}
      </Box>

      <Box></Box>
      <Banner />
      <Footer />
    </>
  );
};

export default MembershipById;
