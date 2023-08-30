import { Box, Button, Container, Input, Stack, Text, WrapItem } from '@chakra-ui/react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Tophead from '../../../components/Tophead/Tophead';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import Navbar from '../../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DELETE, PUT } from '../../../utilities/ApiProvider';
import SimpleSidebar from '../../../components/Sidebar/Sidebar';
import Simplesidebar from '../../../components/Sidebar/SimpleSidebar';

export const MyProfile = () => {
  const selector = useSelector(state => state);
  const [fields, setFields] = useState({
    full_name: '',
    email:"",
    phone_number:null,
    profilePicture: '',
    password: '',
  });
  const toast = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);


  useEffect(() => {
    if(user){
      setFields({...fields,email:user?.email, full_name:user?.full_name,phone_number:user?.phone_number});
    }else{
      navigate('/')
    }
  }, [user]);

    




  
const updateProfile = async ()=>{

if(!fields.full_name && !fields.phone_number && !fields.password){
  toast({
    position:"bottom-left",
    isClosable:true,
    description:"You cannot update emplty profile"
  });
  return;
}
let data = new Object(fields);
if(fields.full_name.length == 0){
  delete data.full_name;
}
if(fields.phone_number.length == 0){
  delete data.phone_number;
}
if(fields.password.length ==0){
  delete data.password
}
if(fields.profilePicture){
  delete data.profilePicture
}
  const formdata = new FormData();
  for(const key in fields){
    if(key !== 'email'){
      formdata.append(key,fields[key]);
    }
  }


  try {
    const res = await PUT(`users/update/${user._id}`,formdata,{
      authorization:`bearer ${user?.JWT_TOKEN}`
    });
    if(res.status ==200){
      toast({
        position:"bottom-left",
        duration:5000,
        status:"success",
        description:"Updated successfully", 
      });
      setFields({...fields,password:""});
    }
    else{
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:"Something is wrong", 
      }); 
    }
  } catch (error) {
    toast({
      position:"bottom-left",
      duration:5000,
      isClosable:true,
      status:"errpr",
      description:error, 
    });
  }
}



  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
     
      <Box >
      <SimpleSidebar/>
      
          <Stack w={'full'}>
          <Container maxW={'8xl'}>
          <Box padding={'120px 0'}>
           <Text
              fontWeight={'bold'}
              mb={'30px'}
              color={'white'}
              fontSize={'28px'}
              textTransform={'uppercase'}
            >
              My Profile
            </Text>
            <Box
         
            
              display={'flex'}
              justifyContent={'space-between'}
            >
              
              <label htmlFor="profile">
                <Box
                  display={'flex'}
                 
                  gap={'14px'}
                  alignItems={'center'}
                  cursor={'pointer'}
                >
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name={fields.full_name}
                      src="https://bit.ly/sage-adebayo"
                    />
                  </WrapItem>

                  <Text
                    fontSize={'25px'}
                    textTransform={'capitalize'}
                    fontWeight={'semibold'}
                    color={'white'}
                  >
                   {fields.full_name}
                  </Text>
                </Box>
              </label>
            
            </Box>
            <Box
              display={'flex'}
              gap={'30px'}
              flexDirection={'column'}
              mt={'30px'}
            >
              <form id='data'>
                <Box width={'100%'} flexWrap={"wrap"} gap={'30px'} display={'flex'}>
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    value={fields.full_name}
                    onChange={(e)=>{setFields({...fields,full_name:e.target.value})}}
                    outline={'none'}
                    color={'white'}
                    width={'48%'}
                    outlineColor={'#fff'}
                    type="text"
                    placeholder="Name"
                  />
                  <Input type="file" onChange={(e)=>{setFields({...fields,profilePicture:e.target.files[0]})}}  display={'none'} id="profile" />
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    color={'white'}
                    onChange={(e)=>{setFields({...fields,email:e.target.value})}}
                    value={fields?.email}
                    width={'48%'}
                    outlineColor={'#fff'}
                    type="email"
                    placeholder="Email"
                  />
                      <Input
                    _hover={'none'}
                    borderColor={'black'}
                    outline={'none'}
                    color={'white'}
                    value={fields.password}
                    onChange={(e)=>{setFields({...fields,password:e.target.value})}}
                    width={'48%'}
                    outlineColor={'#fff'}
                    type="text"
                    placeholder="Password"
                  />
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    color={'white'}
                    width={'48%'}
                    value={fields?.phone_number}
                    onChange={(e)=>{setFields({...fields,phone_number:e.target.value})}}
                    outlineColor={'#fff'}
                    type="number"
                    placeholder="Mobile number"
                  />
                </Box>
               
              </form>
              <Button
              w={'20%'}
                color={'white'}
                fontSize={'20px'}
                _hover={'none'}
                onClick={updateProfile}
                backgroundColor={'#12158a'}
              >
                Save
              </Button>
            </Box>
           </Box>
          </Container>
          
          </Stack>
        
      </Box>
    </Box>
  );
};
