import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Text,
  Image,
  Stack,
  Container,
  Img,
  Grid,
  GridItem,
  Link,
  Heading,
} from '@chakra-ui/react';
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
import man from '../../assets/images/ban-r.webp';

const Home = () => {
  return (
    <>
     
      <Stack
        position={'relative'}
        backgroundImage={Homehead}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        backgroundColor={'#00000f'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
      >
        <Container maxW={'8xl'}>
          <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Stack>
                <Heading fontWeight={'700'} fontSize={'60px'} color={'white'}>
                  {' '}
                  Make 50K as An Entrepreneur
                </Heading>
                <Text
                  fontSize={'40px'}
                  paddingBottom={'20px'}
                  color={'white'}
                  fontWeight={'thin'}
                >
                  Get Access for Award Winning
                  <br />
                  Online Courses
                </Text>
                <Link as={ReactLink} className="btn-a" to={'/membership'}>
                  Get Started
                </Link>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Stack>
                <Img w={'60%'} m={'auto'} src={man} />
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
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
        <Slider />
        <Banner />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
