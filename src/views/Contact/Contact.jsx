import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Tophead from '../../components/Tophead/Tophead';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Toast } from '@chakra-ui/react';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { POST } from '../../utilities/ApiProvider';

const Contact = () => {
  const [field, setField] = useState({
    name: '',
    email: '',
    message: '',
    type: 'information',
  });
  const toast = useToast();
  const sendMessage = async () => {
    if (!field.name || !field.email || !field.message) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: 'Please fill all the fields',
      });
      return;
    }
    try {
      const res = await POST('web/inquiry', field);
      if (res.status == 200) {
        toast({
          position: 'bottom-left',
          isClosable: true,
          duration: 5000,
          status: 'success',
          description: 'Message sent successfully',
        });
        setField({
          ...field,
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: error,
      });
    }
  };
  return (
    <Stack
      width={'100%'}
      minH={'100vh'}
      maxH={'auto'}
      position={'relative'}
      backgroundColor={'#00000f'}
    >
      <Container maxW={'8xl'}>
        <Box
          backgroundColor={'#00000f'}
          padding={'200px 0 70px '}
          width={'100%'}
        >
          <Text
            textAlign={'center'}
            mb={{base:"0px",md:'25px'}}
            mt={{base:"none",md:'-15px'}}
            fontWeight={'700'}
            fontSize={{base:"27px",md:"35px",lg:"40px"}}
            color={'white'}
          >
            Contact Us
          </Text>
        </Box>

        <Box
          display={'flex'}
          flexWrap={'wrap'}
          gap={12}
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent={{ base: 'left', lg: 'center' }}
          alignItems={'center'}
        >
          <Box flex={'5'}>
            <Text
              m={'10px 0'}
              textAlign={{ base: 'center', md: 'left' }}
              fontSize={{ base: '25px', md: '35px' }}
              fontWeight={'700'}
              color={'white'}
              mb={'30px'}
            >
             Have Queries Or<br/>Need Assistance?
            </Text>
            <Text
              mt={'20px 0'}
              textAlign={{ base: 'center', md: 'left' }}
              fontSize={{base:"14px",md:"17px"}}
              color={'#a6a6a6'}
            >
              For any questions or concerns, please fill out the provided form.<br/>We're here to assist you on your journey.
            </Text>
            <Box
              mt={'20px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'15px'}
            >
              <Input
                onChange={e => {
                  setField({ ...field, name: e.target.value });
                }}
                color={'white'}
                placeholder="Name"
                outline={'none'}
                padding={'25px 10px'}
                placeholderTextColor="white"
                borderColor={'#1f2bcc'}
                type="text"
              />
              <Input
                border={'1px solid #ddd'}
                color={'white'}
                placeholder="Email"
                padding={'25px 10px'}
                placeholderTextColor="white"
                borderColor={'#1f2bcc'}
                type="Email"
                onChange={e => {
                  setField({ ...field, email: e.target.value });
                }}
              />
              <Textarea
                color={'white'}
                padding={'15px 10px'}
                placeholderTextColor="white"
                borderColor={'#1f2bcc'}
                height={'20vh'}
                onChange={e => {
                  setField({ ...field, message: e.target.value });
                }}
                placeholder="Message"
              ></Textarea>
              <Button
                onClick={sendMessage}
                backgroundColor={'#041689'}
                color={'white'}
                _hover={'none'}
              >
                Send
              </Button>
            </Box>
            <Box backgroundColor={'#00000f'} width={'100%'} mt={'40px'}></Box>
          </Box>
          <Box mb={{base:'12'}} flex={'2'} width={'100%'}>
            <Text fontSize={{base:'20px','2xl':'25px'}} color={'white'} fontWeight={'800'}>
              Information
            </Text>
            <Text color={'white'} fontWeight={'500'}  fontSize={{base:'16px','2xl':'20px'}} >
              Contact Us
            </Text>
            <Box
              display={'flex'}
              mt={'20px'}
              flexDirection={'column'}
              gap={'15px'}
            >
              <Box gap={'20px'} alignItems={'center'} display={'flex'}>
                <FaLocationArrow color="#12158a" />
                <Text color={'#474747'} fontSize={'16px'}>
                  Address: 77 Indian St. perth, NY
                </Text>
              </Box>
              <Box gap={'20px'} alignItems={'center'} display={'flex'}>
                <AiTwotonePhone color="#12158a" />
                <Text color={'#474747'} fontSize={'16px'}>
                  Phone: +3233-332-334
                </Text>
              </Box>
              <Box gap={'20px'} alignItems={'center'} display={'flex'}>
                <AiOutlineMail color="#12158a" />
                <Text color={'#474747'} fontSize={'16px'}>
                  Email: mula@gmail.com
                </Text>
              </Box>
              <Box>
                <Text color={'white'} fontWeight={'700'} fontSize={{base:'20px','2xl':'25px'}}>
                  Social Media
                </Text>
                <Box display={'flex'} mt={'10px'} gap={'20px'}>
                  <Box>
                    <FaFacebook color="white" fontSize={'20px'} />
                  </Box>
                  <Box>
                    <AiOutlineInstagram color="white" fontSize={'20px'} />
                  </Box>
                  <Box>
                    <AiOutlineTwitter color="white" fontSize={'20px'} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Banner />
      <Footer />
    </Stack>
  );
};

export default Contact;
