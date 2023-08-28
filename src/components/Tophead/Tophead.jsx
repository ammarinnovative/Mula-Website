import React, { useState } from 'react';
import { Box, Container, Text, useDisclosure } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../reducers/useReducers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/useReducers';
import { FaUserAlt } from 'react-icons/fa';
import { POST } from '../../utilities/ApiProvider';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Select,
  Button,
  ModalBody,
  Input,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tophead = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const [bool, setBool] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [field, setField] = useState({
    full_name: 'broad',
    email: '',
    role: '63571c0b55f340aa168e121d',
    password: '',
  });
  const toast = useToast();
  const selector = useSelector(state => state);

  const dispatch = useDispatch();

  const clear = () => {
    navigate('/');
  dispatch(logout());
  };

  const LoginUser = async () => {
    if (!data.email || !data.password) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: 'PLease fill all the fields',
      });
      return;
    }
    const res = await POST('users/login', data);
    try {
      if (res.status == 200) {
        dispatch(loadUser(res?.data?.data));
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'success',
          duration: 5000,
          description: 'User Registered successfully',
        });
        setData({
          email: '',
          password: '',
        });
        onLoginClose();
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'error',
          duration: 5000,
          description: res.data.message,
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

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);

  const RegisterUser = async () => {
    if (!field.full_name || !field.email || !field.password) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: 'Please fill all the fields',
      });
    }
    if (field.password.length < 8) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        status: 'error',
        duration: 5000,
        description: 'Password should be greater than 8',
      });
    }

    setBool(true);
    try {
      const res = await POST('users/create', field);
      if (res.status == 200) {
        setField({
          ...field,
          full_name: '',
          email: '',
          password: '',
        });
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'success',
          duration: 5000,
          description: res.data.message,
        });
        onClose();
        setBool(false);
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          status: 'error',
          duration: 5000,
          description: res.message,
        });
      }
      setBool(false);
    } catch (error) {
      setBool(false);
    }
    setBool(false);
  };
 


  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={'#00000f'}>
          <ModalHeader color={'white'}>Register</ModalHeader>
          <ModalCloseButton color={'white'} />
          <ModalBody>
            <Input
              type="text"
              m={'5px 0'}
              value={field.name}
              onChange={e => {
                setField({ ...field, full_name: e.target.value });
              }}
              color={'white'}
              placeholder="Name"
            />
            <Input
              type="email"
              m={'5px 0'}
              value={field.email}
              onChange={e => {
                setField({ ...field, email: e.target.value });
              }}
              color={'white'}
              placeholder="Email"
            />
            <Input
              type="password"
              m={'5px 0'}
              value={field.password}
              onChange={e => {
                setField({ ...field, password: e.target.value });
              }}
              color={'white'}
              placeholder="Password"
            />
            <Button
              m={'5px 0'}
              onClick={RegisterUser}
              _hover={'none'}
              backgroundColor={'blue'}
              width={'100%'}
              color={'white'}
            >
              Register
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={'#00000f'}>
          <ModalHeader color={'white'}>Login</ModalHeader>
          <ModalCloseButton color={'white'} />
          <ModalBody>
            <Input
              type="email"
              m={'5px 0'}
              value={data.email}
              onChange={e => {
                setData({ ...data, email: e.target.value });
              }}
              color={'white'}
              placeholder="Email"
            />
            <Input
              type="password"
              m={'5px 0'}
              value={data.password}
              onChange={e => {
                setData({ ...data, password: e.target.value });
              }}
              color={'white'}
              placeholder="Password"
            />
            <Button
              m={'5px 0'}
              onClick={LoginUser}
              _hover={'none'}
              backgroundColor={'blue'}
              width={'100%'}
              color={'white'}
            >
              Login
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Container
          maxW={'8xl'}
       
        >
      <Box
        display={'flex'}
        paddingBottom={'10px'}
        alignItems={'center'}
        padding={'15px 0'}
      
        margin={'auto'}
        justifyContent={'space-between'}
        borderBottom={'1px solid #656565'}
      >
        <Box display={'flex'} gap={'10px'}>
          <FaFacebook color="white" fontSize={'20px'} />
          <AiOutlineInstagram color="white" fontSize={'20px'} />
          <AiOutlineTwitter color="white" fontSize={'20px'} />
        </Box>
        <Box display={'flex'} gap={'10px'}>
          <Text
            color={'white'}
            display={user?.JWT_TOKEN ? 'none' : ''}
            cursor={'pointer'}
            onClick={onOpen}
            fontWeight={'500'}
          >
            Register
          </Text>
          <Text
            cursor={'pointer'}
            display={user?.JWT_TOKEN ? 'none' : ''}
            onClick={onLoginOpen}
            color={'white'}
            fontWeight={'500'}
          >
            Login
          </Text>
          <Box display={'flex'} gap={'23px'} alignItems={'center'}>
            <Box display={user?.JWT_TOKEN ? '' : 'none'}>
              <Link to="/myprofile">
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                  <FaUserAlt color="white" fontSize={'20px'} />
                  <Text fontSize={'20px'} fontWeight={'bold'} color={'white'}>
                    {user?.full_name}
                  </Text>
                </Box>
              </Link>
            </Box>
            <Box
              cursor={'pointer'}
              onClick={() => {
                clear();
              }}
              display={user?.JWT_TOKEN ? '' : 'none'}
            >
              <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize={'18px'} color={'white'}>
                  Logout
                </Text>
                <IoIosLogOut color="white" fontSize={'22px'} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
 </Container>
    </Box>
  );
};

export default Tophead;
