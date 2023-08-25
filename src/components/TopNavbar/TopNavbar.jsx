import React, { useState } from 'react';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../reducers/useReducers';
import { useSelector } from 'react-redux';
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
const TopNavbar = () => {
  return;
  <Box>
    <Box>
        <FaFacebook color='white' />
        <AiOutlineInstagram color='white' />
        <AiOutlineTwitter color='white' />
    </Box>
    <Box>
        <FaUserAlt /><Text>Register</Text>
    </Box>
    <Box>
        <FaUserAlt /><Text>Register</Text>
    </Box>
  </Box>;
};

export default TopNavbar;
