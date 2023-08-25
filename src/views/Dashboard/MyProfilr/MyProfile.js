import { Box, Button, Input, Text, WrapItem } from '@chakra-ui/react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Tophead from '../../../components/Tophead/Tophead';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import Navbar from '../../../components/Navbar/Navbar';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DELETE, PUT } from '../../../utilities/ApiProvider';

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
  const [user, setUser] = useState({});
  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value?.data);
    }
  }, [selector]);

  useEffect(() => {
    if(user){
      setFields({...fields,email:user?.email, full_name:user?.full_name,phone_number:user?.phone_number});
    }
  }, [user]);
console.log(fields);


  
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
console.log(data);
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
      <Tophead />
      <Navbar />
      <Box position={'absolute'} width={'100%'} mt={'70px'}>
        <Sidebar>
          <Box>
            <Text
              fontWeight={'bold'}
              mb={'30px'}
              color={'white'}
              fontSize={'28px'}
            >
              My Profile
            </Text>
            <Box
              padding={'10px 30px'}
              boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
              display={'flex'}
              justifyContent={'space-between'}
            >
              <label htmlFor="profile">
                <Box
                  display={'flex'}
                  mt={'40px'}
                  gap={'14px'}
                  alignItems={'center'}
                  cursor={'pointer'}
                >
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                  </WrapItem>

                  <Text
                    fontSize={'25px'}
                    fontWeight={'semibold'}
                    color={'white'}
                  >
                    Jonethen
                  </Text>
                </Box>
              </label>
              <Box
                color={'blue'}
                display={'flex'}
                width={'30%'}
                alignItems={'center'}
                justifyContent={'space-around'}
              >
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    32
                  </Text>
                  <Text>Courses</Text>
                </Box>
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    132
                  </Text>
                  <Text>Videos</Text>
                </Box>
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    Basic
                  </Text>
                  <Text>Subscription</Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={'flex'}
              gap={'30px'}
              flexDirection={'column'}
              mt={'30px'}
            >
              <form id='data'>
                <Box width={'100%'} gap={'10px'} display={'flex'}>
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    value={fields.full_name}
                    onChange={(e)=>{setFields({...fields,full_name:e.target.value})}}
                    outline={'none'}
                    color={'white'}
                    width={'50%'}
                    boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
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
                    width={'50%'}
                    boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                    type="email"
                    placeholder="Email"
                  />
                </Box>
                <Box width={'100%'} gap={'10px'} display={'flex'}>
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    outline={'none'}
                    color={'white'}
                    value={fields.password}
                    onChange={(e)=>{setFields({...fields,password:e.target.value})}}
                    width={'50%'}
                    boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                    type="text"
                    placeholder="Password"
                  />
                  <Input
                    _hover={'none'}
                    borderColor={'black'}
                    color={'white'}
                    width={'50%'}
                    value={fields?.phone_number}
                    onChange={(e)=>{setFields({...fields,phone_number:e.target.value})}}
                    boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                    type="number"
                    placeholder="Mobile number"
                  />
                </Box>
              </form>
              <Button
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
        </Sidebar>
      </Box>
    </Box>
  );
};
