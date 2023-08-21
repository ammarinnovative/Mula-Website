import React from 'react';
import {
  Box,
  Button,
  Image,
  InputGroup,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import Logo from '../../assets/images/logo.png';
import { Input } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({zIndex}) => {
  const selector = useSelector(state=>state);

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
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'20px'}
      width={"100%"}
      zIndex={zIndex}
      position={"absolute"}
      backgroundColor={"#00000f"}
      
    >
      <Box>
        <Image src={Logo} alt="logo" />
      </Box>
      <Box display={'flex'} color='white' gap={'20px'}>
        {navItem.map(item => {
          return (
            <>
              <Link  to={item.link}><Text>{item.name}</Text></Link>
            </>
          );
        })}
      </Box>
      <Link to={'/cart'}>
      <Box width={'300px'} display={"flex"} cursor={"pointer"} alignItems={"center"} gap={"4px"}>
        <Text fontWeight={"semibold"} color={"white"}  fontSize={"20px"}>Cart</Text>
        <FaShoppingCart color='white' fontSize={"22px"} />
      <Text fontSize={"20px"} color={"white"}>{`(${selector?.cart?.length})`}</Text>
      </Box>
      </Link>
    </Box>
  );
};

export default Navbar;
