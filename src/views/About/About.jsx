import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Layer6 from '../../assets/images/Layer 6.png';
import shadow from '../../assets/images/shadow.png';
import Layer7 from '../../assets/images/Layer 7.png';
import Circular from '../../assets/images/Circular.png';
import Layer16 from '../../assets/images/Layer16.png';
import back from '../../assets/images/back.png';
import kit from '../../assets/images/kit.png';
import Layer9 from "../../assets/images/Layer9.png";
import Layer20 from '../../assets/images/Layer 20.png';
import SimpleAccordion from "../../components/Accordion/Accordion";
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed et ipsum explicabo vero quae exercitationem mollitia provident quaerat debitis ad quod quis, vitae fuga rerum. Dolores, vero voluptates! Illo.sed et ipsum explicabo vero quae exercitationem mollitia provident quaerat debitis ad quod quis, vitae fuga rerum. Dolores, vero voluptates! Illo',
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
      backgroundColor={'#00000f'}
    >
      <Tophead />
      <Navbar />
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
            fontWeight={'bold'}
            letterSpacing={'5px'}
            textAlign={'center'}
            fontSize={'30px'}
            m={'80px 0'}
          >
            About
          </Text>
          <Box
            display={'flex'}
            gap={'30px'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box mt={'50px'} width={'23%'}>
              <Box color={'white'} fontSize={'25px'}>
                The Best Financial Courses Crafted By Professional
              </Box>
              <Box
                width={'100px'}
                borderRadius={'10px'}
                mt={'10px'}
                backgroundColor={'#041689'}
                height={'5px'}
              ></Box>
              <Text color={'white'} mt={'30px'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                incidunt ex sint, velit voluptatum impedit commodi praesentium
                quaerat ipsum facere! Repellat culpa dicta assumenda est nobis
                iusto. Repudiandae ipsa expedita blanditiis aspernatur delectus,
                dolorum eligendi earum ipsum vero porro sint alias eius libero
                asperiores culpa, corporis qui! Inventore cumque dignissimos
                laboriosam corporis minus.
              </Text>
            </Box>

            {data.map(item => {
              return (
                <Box
                  width={'20%'}
                  backgroundColor={'black'}
                  height={'auto'}
                  alignSelf={'normal'}
                  zIndex={'10'}
                >
                  <Image src={item.Image} alt="image" />
                  <Box
                    padding={'20px'}
                    backgroundColor={'black'}
                    height={'-4px'}
                    alignSelf={'normal'}
                  >
                    <Text
                      fontSize={'20px'}
                      m={'5px 0'}
                      margin={'10px 0'}
                      fontWeight={'bold'}
                      color={'white'}
                    >
                      {item.text}
                    </Text>
                    <Text width={'100%'}>{item.details}</Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        height={'40vh'}
        padding={'30px'}
        backgroundImage={shadow}
        display={'flex'}
        justifyContent={'center'}
        gap={'30px'}
        alignItems={'center'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        width={'100%'}
      >
        <Box width={'26rem'}>
          <Text color={'white'} width={'10rem'} mb={'10px'} fontSize={'22px'}>
            We Offer Finance Forums
          </Text>
          <Box
            width={'100px'}
            borderRadius={'8px'}
            margin={'10px 0'}
            backgroundColor={'#12158a'}
            height={'5px'}
          ></Box>
          <Text mt={'30px'} color={'white'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
            magnam, qui dignissimos soluta explicabo distinctio. Soluta ipsa
            earum iusto! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cum, ut!.
          </Text>
          <Button color={'white'} mt={'20px'} backgroundColor={'blue'}>
            Download App
          </Button>
        </Box>
        <Box mt={'20px'}>
          <Image overflow={'hidden'} width={'70%'} src={Layer16} alt="image" />
        </Box>
      </Box>
      <Box padding={'20px'} width={'70%'} margin={'auto'} textAlign={'center'}>
        <Text fontSize={'25px'} color={'white'}>
          Our Team
        </Text>
        <Box
          width={'8%'}
          margin={'auto'}
          mt={'10px'}
          height={'4px'}
          backgroundColor={'blue'}
        ></Box>
        <Text color={'white'} mt={'20px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          quibusdam ratione mollitia animi exercitationem modi tenetur tempora
          recusandae nam sequi! Lorem ipsum dolor sit amet.
        </Text>
        <Box
          display={'flex'}
          gap={'20px'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={'5rem'}
        >
          {ImageData.map(data => {
            return (
              <Box
                width={'280px'}
                borderRadius={'10px'}
                position={'relative'}
                bgRepeat={'no-repeat'}
                backgroundSize={'cover'}
                backgroundPosition={'center'}
                height={'300px'}
                backgroundImage={data.image}
              >
                <Text
                  left={'30px'}
                  color={'white'}
                  position={'absolute'}
                  bottom={'30px'}
                >
                  {data.name}
                </Text>
                <Text
                  left={'30px'}
                  color={'blue.600'}
                  position={'absolute'}
                  bottom={'10px'}
                >
                  {data.occupation}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        minHeight={'17rem'}
        backgroundImage={back}
      >
        <Box width={'30rem'}>
          <Image src={kit} alt="image" />
        </Box>
        <Box width={'16rem'}>
          <Text fontSize={'30px'} fontWeight={'semibold'} color={'white'}>
            Get Amazing 20% off on Membership
          </Text>
          <Box
            width={'30%'}
            height={'3px'}
            margin={'10px 0'}
            backgroundColor={'#00000f'}
          ></Box>
          <Button
            mt={'30px'}
            padding={'10px 14px'}
            _hover={'none'}
            color={'white'}
            backgroundColor={'#00000f'}
          >
            GET STARTED
          </Button>
        </Box>
      </Box>
      <Box>
        <Box width={'100%'} padding={"7rem"} flexWrap={"wrap"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Text
              fontSize={'24px'}
              width={'20rem'}
              fontWeight={'bold'}
              color={'white'}
            >
              One-on-One virtual Consultation
            </Text>
            <Box
              width={'10%'}
              borderRadius={'10px'}
              m={'10px 0'}
              backgroundColor={'blue'}
              height={'3px'}
            ></Box>
            <Text color={'white'} width={"30rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              officiis nostrum voluptates consequatur earum dicta, beatae, nam
              quas ipsa libero aut distinctio, veritatis necessitatibus
              voluptatibus laudantium quasi! Doloribus, obcaecati hic.
            </Text>
          </Box>
          <Box>
            <Image width={"30rem"} src={Layer20} alt="image" />
          </Box>
        </Box>
      </Box>
      <SimpleAccordion />
      <Banner />
      <Footer />
    </Box>
  );
};

export default About;
