import React, { useEffect, useState } from 'react';
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
import Homehead from '../../assets/images/homeHead.png';
import Invest from '../../components/Invest/Invest';
import Apple from '../../assets/images/Apple.png';
import Play from '../../assets/images/play.png';
import mobile from '../../assets/images/mobile.png';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Courser/Courser';

import man from '../../assets/images/ban-r.webp';
import { GET } from '../../utilities/ApiProvider';
import Nnav from '../../components/Navbar/Nnav';

const Home = () => {
  const [data, setData] = useState([]);
  const getMembership = async () => {
    const res = await GET('web/membership');
    setData(res?.data);
  };

  useEffect(()=>{
    getMembership();
  },[]);

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
        height={{base:'50vh',"2xl":'100vh'}}
      >
        <Container maxW={'8xl'}>
          <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Stack>
                <Heading fontWeight={'700'} fontSize={{base:'40px',"2xl":'60px'}} color={'white'}>
                 
                  Make 50K as An Entrepreneur
                </Heading>
                <Text
                 fontSize={{base:'20px',"2xl":'40px'}}
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
              <Stack >
                <Img display={{base:"none","2xl":"block"}} w={'60%'} m={'auto'} src={man} />
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
      <Box paddingTop={'30px'} backgroundColor={'#00000f'}>
        <Invest />
        <Box
        padding={{base:'70px 15px','2xl':'40px 0'}}
          display={{base:'block','2xl':'flex'}}
          
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={mobile} alt="image" />
          <Box width={{base:'100%','2xl':'30%'}}>
            <Text fontSize={{base:"20px","2xl":"28px"}} color={'white'} fontWeight={'bold'}>
              Download App Now
            </Text>
            <Text color={'white'} m={'6px 0'} fontSize={'16px'}>
              What is Lorem Ipsum in English? Originally from Latin, Lorem ipsum
              has no intelligible meaning. It is simply a display of letters to
              be viewed as a sample with given graphical elements in a file.
              "Lipsum" a portmanteau of lorem
            </Text>
            <Box display={'flex'} gap={'15px'} mt={'30px'}>
              <Image w={'25%'} height={'25%'} src={Play} alt="image" />
              <Image w={'25%'} height={'25%'} src={Apple} alt="image" />
            </Box>
          </Box>
        </Box>
        <Slider data={data} />
        <Banner />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
