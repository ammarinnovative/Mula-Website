import React from 'react';
import { Box, Text, Image, Button, Link } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Layer6 from '../../assets/images/Layer 6.png';
import shadow from '../../assets/images/shadow.png';
import Layer7 from '../../assets/images/Layer 7.png';
import Circular from '../../assets/images/Circular.png';
import Layer16 from '../../assets/images/Layer16.png';
import back from '../../assets/images/back.png';
import kit from '../../assets/images/kit.png';
import Layer9 from '../../assets/images/Layer9.png';
import Layer20 from '../../assets/images/Layer 20.png';
import SimpleAccordion from '../../components/Accordion/Accordion';
import image from '../../assets/images/image.png';
import Banner from '../../components/Banner/Banner';
import Tophead from '../../components/Tophead/Tophead';
import { useSelector } from 'react-redux';

const About = () => {
  const selector = useSelector(state => state);
  console.log('selector', selector);
  const data = [
    {
      text: 'Weekly Video Lessons',
      Image: Layer7,
      details:
        'Gain exclusive access to our step-by-step video lessons. Learn the secrets of success in business, finance, crypto, and more to become a successful entrepreneur.',
    },
    {
      text: 'Personalized Guidance',
      Image: Layer6,
      details:
        'Benefit from exclusive one-on-one support from Myles Caldwell, tailored to your goals. We are dedicated to your success and provide personalized insights and strategies to elevate your journey.',
    },
  ];

  const ImageData = [
    {
      image: image,
      name: 'Folda',
      occupation: 'financial instructor',
    },
    {
      image: image,
      name: 'Folda',
      occupation: 'financial instructor',
    },
    {
      image: image,
      name: 'Folda',
      occupation: 'financial instructor',
    },
  ];
  return (
    <>
      <Box
        backgroundColor={'#00000f'}
        padding={{ base: '200px 0 20px ', '2xl': '200px 0  ' }}
        width={'100%'}
      >
        <Text
          textAlign={'center'}
          fontWeight={'700'}
          fontSize={'37px'}
          color={'white'}
        >
          About
        </Text>
      </Box>
      <Box
        width={'100%'}
        height={'auto'}
        position={'relative'}
        padding={'10px'}
        backgroundColor={'#00000f'}
      >
        <Box
          height={'auto'}
          display={'flex'}
          justifyContent={'center'}
          paddingBottom={'40px'}
          alignItems={'center'}
        >
          <Box display={'flex'} width={'100%'} flexDirection={'column'}>
            <Box
              display={'flex'}
              gap={'30px'}
              width={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
            >
              <Box mt={'50px'} width={{ base: '100%', md: '48%', lg: '30%' }}>
                <Box
                  fontWeight={'800'}
                  textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                  color={'white'}
                  fontSize={{ base: '24px', md: '26px', lg: '30px' }}
                >
                  Comprehensive Learning for 
                  <Text padding={'0 10px'} as={'span'} borderBottom={'3px solid #041689'}>
                  Entrepreneurial 
                  </Text>
                  Excellence
                </Box>
                <Text
                  color={'#a9a9a9'}
                  fontSize={{ base: '15px', md: '16px', lg: '17px' }}
                  textAlign={{ base: 'center', md: 'left' }}
                  mt={'30px'}
                >
                  Our courses unveil the nuances of business, finance, cryptocurrencies,
                   marketing, money-management skills and more. Equip yourself with essential 
                    for entrepreneurial triumph and lasting financial security.

                </Text>
              </Box>

              {data.map(item => {
                return (
                  <Box
                    width={{ base: '80%', md: '40%', lg: '22%' }}
                    backgroundColor={'black'}
                    boxShadow="8px 8px 29px -10px rgba(62, 10, 255, 0.63)"
                    _webkitBoxShadow="8px 8px 29px -10px rgba(62, 10, 255, 0.63)"
                    _mozBoxShadow="8px 8px 29px -10px rgba(62, 10, 255, 0.63)"
                    height={'auto'}
                    alignSelf={'normal'}
                    zIndex={'10'}
                  >
                    <Image width={'100%'} src={item.Image} alt="image" />
                    <Box
                      padding={'20px'}
                      backgroundColor={'black'}
                      height={'-4px'}
                      alignSelf={'normal'}
                    >
                      <Text
                        fontSize={'17px'}
                        m={'5px 0'}
                        margin={'10px 0'}
                        fontWeight={'bold'}
                        color={'white'}
                      >
                        {item.text}
                      </Text>
                      <Text color={'#ababab'} fontSize={'15px'} width={'100%'}>
                        {item.details}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          height={'auto'}
          padding={{ base: '10px', md: '20px', lg: '30px' }}
          backgroundImage={shadow}
          display={'flex'}
          justifyContent={'space-between'}
          gap={'30px'}
          alignItems={'center'}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          margin={'auto'}
          width={'100%'}
        >
          <Box
            display={'flex'}
            width={{ base: '100%', md: '70%' }}
            gap={'30px'}
            margin={'auto'}
            alignItems={'center'}
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={'space-between'}
          >
            <Box
              textAlign={{ base: 'center', md: 'center', lg: 'left' }}
              width={{ base: '100%', md: '100%', lg: '30rem' }}
            >
              <Text
                color={'white'}
                textAlign={{ base: 'center', lg: 'left' }}
                fontWeight={'700'}
                mb={'10px'}
                fontSize={{ base: '23px', md: '26px', lg: '30px' }}
              >
                Join  
                <Text padding={'0 8px'} as={'span'} borderBottom={'4px solid #12158a'}>
                 Our
                </Text>
                Thriving Community
              </Text>
              <Text
                mb={4}
                fontSize={{ base: '14px', md: '15px' }}
                textAlign={{ base: 'center', lg: 'left' }}
                mt={'30px'}
                color={'white'}
              >
                Become part of our community for daily stock market callouts and updates. Make informed decisions, optimize profits, and stay ahead through strategic buying and selling strategies.
              </Text>
              <Link className="btn-a">Download App</Link>
            </Box>
            <Box mt={'20px'}>
              <Image
                overflow={'hidden'}
                width={{ base: '80%', md: '100%' }}
                src={Layer16}
                margin={'auto'}
                alt="image"
              />
            </Box>
          </Box>
        </Box>

        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          gap={{ base: '0', md: '60px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          padding={{ base: '50px 0', lg: '0' }}
          minHeight={'17rem'}
          backgroundImage={back}
        >
          <Box width={{ base: '25rem', lg: '30rem' }}>
            <Image mt={'-50px'} src={kit} alt="image" />
          </Box>
          <Box width={'20rem'} textAlign={{ base: 'center', lg: 'left' }}>
            <Text
              fontSize={'24px'}
              textAlign={{ base: 'center', lg: 'left' }}
              fontWeight={'700'}
              color={'white'}
            >
              Ready to Succeed? Get the Knowledge You Need!

            </Text>
            <Button
              mt={{ base: '0', md: '30px' }}
              padding={'10px 14px'}
              _hover={'none'}
              color={'white'}
              backgroundColor={'#00000f'}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>

        <Box
          width={'100%'}
          padding={'7rem 0'}
          flexWrap={'wrap'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box>
            <Text
              fontSize={'24px'}
              width={{ base: '100%', lg: '20rem' }}
              fontWeight={'bold'}
              color={'white'}
              mb={'10px'}
              textAlign={{ base: 'center', md: 'left', lg: 'none' }}
            >
             One-On-One Virtual Consultation

            </Text>

            <Text color={'#bfbfbf'} width={'30rem'}>
            For comprehensive financial guidance across domains, take advantage of one-on-one virtual consultation. From immediate queries to in-depth discussions, we discuss everything about your entrepreneurial goals, challenges, and strategies. Take your ventures to new heights with expert mentorship and tailored advice.
            </Text>
          </Box>
          <Box width={'30rem'}>
            <Image src={Layer20} alt="image" />
          </Box>
        </Box>

        <SimpleAccordion />
        <Banner />
        <Footer />
      </Box>
    </>
  );
};

export default About;
