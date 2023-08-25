import React from 'react';
import {
  Box,
  Button,
  Container,
  Image,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from '@chakra-ui/react';
import Logo from '../../assets/images/logo.png';
import { Input } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ zIndex }) => {
  const selector = useSelector(state => state);

  const navItem = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Membership',
      link: '/membership',
    },
    {
      name: 'Courses',
      link: '/courses',
    },
    {
      name: 'Visual Consultation',
      link: '/consultation',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <Stack mt={'0 !important'}>
      <Container maxW={'8xl'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          padding={'20px 0px'}
         
          
        >
          <Box>
            <Image src={Logo} alt="logo" />
          </Box>
          <Box display={'flex'} color="white" gap={'20px'}>
            {navItem.map(item => {
              return (
                <>
                  <Link to={item.link}>
                    <Text>{item.name}</Text>
                  </Link>
                </>
              );
            })}
          </Box>
          <Link to={'/cart'}>
            <Box
              display={'flex'}
              cursor={'pointer'}
              alignItems={'center'}
              gap={'4px'}
            >
              <Text fontWeight={'500'} color={'white'} fontSize={'16px'}>
                Cart
              </Text>
              <FaShoppingCart color="white" fontSize={'22px'} />
              <Text
                fontSize={'18px'}
                color={'white'}
              >{`(${selector?.cart?.length})`}</Text>
            </Box>
          </Link>
        </Box>
      </Container>
    </Stack>
  );
};

export default Navbar;
