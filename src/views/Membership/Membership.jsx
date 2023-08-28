import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SingleMembership from '../../components/SingleMembership/SingleMembership';
import Banner from '../../components/Banner/Banner';
import Invest from '../../components/Invest/Invest';
import Tophead from '../../components/Tophead/Tophead';
import { useState } from 'react';
import { GET } from '../../utilities/ApiProvider';
import { useEffect } from 'react';

const Membership = () => {
  const [data, setData] = useState([]);
  const getMembership = async () => {
    const res = await GET('web/membership');
    setData(res?.data);
  };


  useEffect(() => {
    getMembership();
  }, []);
  return (
    <Box
      position={'relative'}
      height={'100vh'}
      backgroundColor={'#00000f'}
      width={'100%'}
    >
     
      <Box
        width={'100%'}
        backgroundColor={'#00000f'}
        mt={'100px'}
        position={'absolute'}
      >
        <Text
          textAlign={'center'}
          fontSize={'45px'}
          fontWeight={'800'}
          marginTop={'42px'}
          mb={'50px'}
          color={'white'}
        >
          Courses
        </Text>
        <Text
          textAlign={'center'}
          fontSize={'40px'}
          mt={'30px 0'}
          color={'white'}
          fontWeight={'650'}
        >
          Select Your Plan
        </Text>
        <Text textAlign={'center'} fontSize={'17px'} color={'gray.200'}>
          SWITCH PLAN OR CANCEL ANY TIME
        </Text>
        <Box
          display={'flex'}
          padding={'20px'}
          m={'50px 0'}
          gap={'40px'}
          width={"100%"}
          justifyContent={{ base: 'center' }}
          alignItems={'center'}
        flexWrap={'wrap'}
        >
          {data?.map(item => {
            return <SingleMembership data={item} />;
          })}
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
          <Banner />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Membership;
