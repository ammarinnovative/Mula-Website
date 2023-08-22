import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Homehead from '../../assets/images/homeHead.png';
import Invest from '../../components/Invest/Invest';
import Apple from '../../assets/images/Apple.png';
import Play from '../../assets/images/play.png';
import mobile from '../../assets/images/mobile.png';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Courser/Courser';
import Tophead from '../../components/Tophead/Tophead';

const Home = () => {
  
  return (
    <>
      <Box
        position={'relative'}
        backgroundImage={Homehead}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        backgroundColor={'#00000f'}
        width={'100%'}
        height={'100vh'}
      >
        <Tophead />
        <Navbar />
        <Box width={'100%'} position={'absolute'} mt={'100px'}>
          <Box position={'absolute'} left={'200px'} top={'200px'}>
            <Text fontWeight={'bold'} fontSize={'40px'} color={'white'}>
              Make 50K as
              <br /> <Text as={'span'}>An Entrepreneur</Text>
            </Text>
            <Text fontSize={'35px'} color={'white'} fontWeight={'thin'}>
              Get Access for Award Winning
              <br />
              Online Courses
            </Text>
          </Box>
        </Box>
      </Box>
      <Box paddingTop={'30px'} backgroundColor={'#00000f'}>
        <Invest />
        <Box
          display={'flex'}
          mt={'60px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={mobile} alt="image" />
          <Box width={'30%'}>
            <Text fontSize={'28px'} color={'white'} fontWeight={'bold'}>
              Download App Now
            </Text>
            <Text color={'white'} m={'6px 0'} fontSize={'16px'}>
              What is Lorem Ipsum in English? Originally from Latin, Lorem ipsum
              has no intelligible meaning. It is simply a display of letters to
              be viewed as a sample with given graphical elements in a file.
              "Lipsum" a portmanteau of lorem
            </Text>
            <Box display={'flex'} gap={'15px'} mt={'30px'}>
              <Image src={Play} alt="image" />
              <Image src={Apple} alt="image" />
            </Box>
          </Box>
        </Box>
        <Box padding={'50px 0'}>
          <Invest />
        </Box>
        <Slider />
        <Banner />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
