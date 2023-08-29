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
      text: 'Interactive Learning',
      Image: Layer7,
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed et ipsum explicabo vero quae exercitationem mollitia provident quaerat debitis ad quod quis, vitae fuga rerum. Dolores, vero voluptates! Illo.',
    },
    {
      text: 'Exclusive support Learning',
      Image: Layer6,
      details:
        'Lorem ipsum dolor sit amet consectetur.sit amet consectetur. sit amet consectetur.   ',
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
    <Box
      width={'100%'}
      height={'auto'}
      position={'relative'}
      padding={'10px'}
      backgroundColor={'#00000f'}
    >
      <Box right={'0'} top={'100px'} position={'absolute'}>
        <Image src={Circular} width={'400px'} alt="img" />
      </Box>
      <Box
        height={'auto'}
        display={'flex'}
        justifyContent={'center'}
        paddingBottom={'40px'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          mt={'60px'}
          width={'100%'}
          flexDirection={'column'}
        >
          <Text
            color={'white'}
            fontWeight={'800'}
            textAlign={'center'}
            fontSize={'35px'}
            m={'80px 0'}
          >
            About
          </Text>
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
                The Best Financial Courses <br />{' '}
                <Text as={'span'} borderBottom={'3px solid #041689'}>
                  Crafted
                </Text>{' '}
                By Professional
              </Box>
              <Text
                color={'#a9a9a9'}
                fontSize={{ base: '15px', md: '16px', lg: '17px' }}
                textAlign={{ base: 'center', md: 'left' }}
                mt={'30px'}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                incidunt ex sint, velit voluptatum impedit commodi praesentium
                quaerat ipsum facere! Repellat culpa dicta assumenda est nobis
                iusto. Repudiandae ipsa expedita
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
              We Offer <br />{' '}
              <Text as={'span'} borderBottom={'4px solid #12158a'}>
                Finance
              </Text>{' '}
              Forums
            </Text>
            <Text
              mb={4}
              fontSize={{ base: '14px', md: '15px' }}
              textAlign={{ base: 'center', lg: 'left' }}
              mt={'30px'}
              color={'white'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              dolorum magnam, qui dignissimos soluta explicabo distinctio.
              Soluta ipsa earum iusto! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum, ut!.
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
            Get Amazing <br />{' '}
            <Text borderBottom={'2px solid #0000f'}>20% off</Text> on Membership
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
            width={{base:"100%",lg:"20rem"}}
            fontWeight={'bold'}
            color={'white'}
            mb={"10px"}
            textAlign={{base:"center",md:"left",lg:"none"}}
          >
            One-on-One virtual <Text as={'span'} width={"10%"} borderBottom={"3px solid blue"}>Consultation</Text>
          </Text>
          
          <Text color={'#bfbfbf'} width={'30rem'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis nostrum voluptates consequatur earum dicta, beatae, nam
            quas ipsa libero aut distinctio, veritatis necessitatibus
            voluptatibus laudantium quasi! Doloribus, obcaecati hic.
          </Text>
        </Box>
        <Box width={'30rem'}>
          <Image  src={Layer20} alt="image" />
        </Box>
      </Box>

      <SimpleAccordion />
      <Banner />
      <Footer />
    </Box>
  );
};

export default About;
