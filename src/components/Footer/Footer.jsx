import { Box, Text, Image, Button } from '@chakra-ui/react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <Box
      backgroundColor={'#00000f'}
      minHeight={'30vh'}
      display={"flex"} 
      flexDirection={"column"}
      padding={"10px"}
      width={'100%'}
    >
      <Box
        display={'flex'}
        height={'100%'}
        width={'80%'}
        margin={'auto'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          height={'100%'}
          width={'80%'}
          marginX={'auto'}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text mb={'20px'} color={'white'}>
              Link
            </Text>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text>Membership</Text>
              <Text>About</Text>
              <Text>Packages</Text>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text mb={'20px'} color={'white'}>
              Company
            </Text>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text>About us</Text>
              <Text>Talk to us</Text>
              <Text>Courses</Text>
            </Box>
          </Box>
          <Box>
            <Text mb={'20px'} color={'white'}>
              Contact us
            </Text>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                <HiLocationMarker color="blue" />
                Address:Indian mumbai
              </Box>
              <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                <FaPhone color="blue" />
                Phone:+3323232445
              </Box>
              <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                <MdEmail color="blue" />
                Email:mula@gmail.com
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box border={'1px solid gray'}  height={"2px"} margin={"auto"} width={"70%"}></Box>
      <Box>
        <Text textAlign={"center"}>@Copyright2023 NewYorkWebCoders. All right Reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
