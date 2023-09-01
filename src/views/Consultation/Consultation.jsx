import React, { useState } from 'react';
import CallToActionWithVideo from '../../components/Head/Head';
import { Box, Text, Input, Button, Textarea, useToast } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import back from '../../assets/images/back.png';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Tophead from '../../components/Tophead/Tophead';
import { POST } from '../../utilities/ApiProvider';
import { Toast } from '@chakra-ui/react';
const Consultation = () => {
  const [bool, setBool] = useState(false);
  const [field, setField] = useState({
    name: '',
    email: '',
    time: '',
    date: '',
    type: 'consultation_inquiry',
    message: '',
  });
  const toast = useToast();
  const SendData = async () => {
    setBool(true);
    if (
      !field.name ||
      !field.email ||
      !field.time ||
      !field.date ||
      !field.message
    ) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: 'Please fill all the fields',
      });
      setBool(false);
    }
    try {
      const res = await POST('web/inquiry', field);
      if (res.status == 200) {
        setField({
          ...field,
          name: '',
          email: '',
          time: '',
          date: '',
          message: '',
        });
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'success',
          duration: 5000,
          description: 'Message Send Successfulyy',
        });
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'error',
          duration: 5000,
          description: res.status.message,
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: error,
      });
    }
  };

  return (
    <>
     <Box backgroundColor={'#00000f'} padding={{base:"150px 0 0px",md:"200px 0 10px",lg:'200px 0 5 px '}} width={'100%'}>
     <Text
       textAlign={'center'}
       mb={{base:"0px",md:"15px",lg:"20px"}}
       fontWeight={'700'}
       fontSize={{base:"23px",md:"27px",lg:"33px"}}
       color={'white'}
     >
       Virtual Consultation
     </Text>
   </Box>
    <Box position={'relative'} width={'100%'}>
     
      <Box>
        <CallToActionWithVideo />
        <Box
          backgroundImage={back}
          backgroundPosition={'center'}
          width={'100%'}
          padding={'30px 10px'}
          backgroundSize={'cover'}
          flexDirection={{ base: 'column', lg: 'row' }}
          display={'flex'}
          justifyContent={'space-evenly'}
          gap={'30px'}
        >
          <Box textAlign={{base:"center",lg:"none"}} width={{ base: '100%', lg: '35%' }}>
            <Text mb={{base:"30px",lg:"none"}} textAlign={{base:"center",lg:"left"}} fontSize={'27px'} color={'white'}>
              Confusing get a Facetime <br />
              <Text as={'span'} borderBottom={"4px solid blue"}>Meeting</Text> With Mark Mula
            </Text>
            <Text textAlign={{base:"center",lg:"left"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              magni aliquid quasi libero hic atque, voluptas quibusdam
              voluptatibus sit officiis enim laudantium rem nemo neque corrupti
              in at est ducimus!
            </Text>
          </Box>
          <Box
            width={{ base: '100%', lg: '40%' }}
            padding={'10px'}
            boxShadow="0px 0px 10px 2px rgba(0, 0, 255, 0.3)" // Set the blue box shadow
            borderRadius="md"
            mt={{ base: 'none', lg: '-70px' }}
            zIndex={'2'}
            backgroundColor={'#000000'}
          >
            <Input
              border={'1px solid blue'}
              type="text"
              color={'white'}
              onChange={e => {
                setField({ ...field, name: e.target.value });
              }}
              m={'5px 0'}
              value={field.name}
              placeholder="Name"
            />
            <Input
              type="email"
              m={'5px 0'}
              value={field.email}
              color={'white'}
              onChange={e => {
                setField({ ...field, email: e.target.value });
              }}
              placeholder="Email"
            />
            <Input
              type="time"
              m={'5px 0'}
              value={field.time}
              color={'white'}
              onChange={e => {
                setField({ ...field, time: e.target.value });
              }}
              placeholder="Time"
            />
            <Input
              type="date"
              m={'5px 0'}
              value={field.date}
              color={'white'}
              onChange={e => {
                setField({ ...field, date: e.target.value });
              }}
              placeholder="Date"
            />
            <Textarea
              width="100%"
              m={'5px 0'}
              color={'white'}
              value={field.message}
              onChange={e => {
                setField({ ...field, message: e.target.value });
              }}
              placeholder="Message"
            ></Textarea>
            <Button
              width={'100%'}
              m={'5px 0'}
              color={'white'}
              backgroundColor={'blue'}
              onClick={SendData}
            >
              Message
            </Button>
          </Box>
        </Box>
        <Box backgroundColor={'#00000f'} paddingTop={'50px'}>
          <Banner />
          <Footer />
        </Box>
      </Box>
    </Box>
    </>
    
  );
};

export default Consultation;
