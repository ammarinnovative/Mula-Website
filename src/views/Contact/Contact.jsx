import React, { useState } from 'react';
import { Box, Button, Container, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Tophead from '../../components/Tophead/Tophead';
import { Toast } from '@chakra-ui/react';
import { POST } from '../../utilities/ApiProvider';

const Contact = () => {
  const [field,setField] = useState({
    name:"",
    email:"",
    message:"",
    type:"information"
  });
const toast = useToast();
  const sendMessage =async ()=>{
    if(!field.name || !field.email || !field.message){
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:"Please fill all the fields"
      });
      return;
    }
    try {
      const res = await POST("web/inquiry",field);
      if(res.status == 200){
        toast({
          position:"bottom-left",
          isClosable:true,
          duration:5000,
          status:"success",
          description:"Message sent successfully"
        });
        setField({
          ...field,
          name:"",
          email:"",
          message:""
        });
      }
    } catch (error) {
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:error
      });
    }

  }
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
      <Text textAlign={"center"} mb={"25px"} mt={"-15px"} fontWeight={"700"} fontSize={"37px"} color={"white"}>Contact Us</Text>
      </Box>
      <Box >
       
       <Box  mt={'30px'}>
         <Text
           m={'10px 0'}
           fontSize={'25px'}
           color={'white'}
           textAlign={'center'}
         >
           Get In Touch with us
         </Text>
         <Box padding={"30px"} display={'flex'} flexDirection={'column'} gap={'15px'}>
           <Input onChange={(e)=>{setField({...field,name:e.target.value})}} color={'white'} placeholder="Name" type="text" />
           <Input
             border={'1px solid #ddd'}
             color={'white'}
             placeholder="Email"
             type="Email"
             onChange={(e)=>{setField({...field,email:e.target.value})}}
           />
           <Textarea color={'white'} onChange={(e)=>{setField({...field,message:e.target.value})}} placeholder="Message"></Textarea>
           <Button onClick={sendMessage} backgroundColor={'#041689'} color={'white'} _hover={'none'}>
             Send
           </Button>
         </Box>
         <Box backgroundColor={"#00000f"} width={"100%"} mt={'40px'}>
       
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
