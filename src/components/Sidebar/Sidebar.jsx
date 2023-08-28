'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import {BiUserCheck} from "react-icons/bi"
import {FaDiscourse} from "react-icons/fa"
import { useState } from 'react'
import {AiFillPlayCircle} from "react-icons/ai"
import {MdVideoLibrary} from "react-icons/md"
import MyVideo from '../../views/Dashboard/MyVideos/MyVideos'
import {AiFillCreditCard} from "react-icons/ai"
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import {Link, Link as ReactLink, useLocation, useNavigate } from "react-router-dom";
import { ReactText } from 'react'



const LinkItems = [
  { name: 'MyProfile', icon: BiUserCheck,link:"/myProfile" },
  { name: 'MyCourses', icon: FaDiscourse,link:"/mycourses" },
  { name: 'Membership', icon: AiFillPlayCircle,link:"/membershipvideos" },
  { name: 'MyVideos', icon: MdVideoLibrary,link:"/myVideo" },
  { name: 'MyCards', icon: AiFillCreditCard,link:"/mycards" },
]

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" backgroundColor={"#00000f"}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={"#00000f"}
      borderRight="1px"
      color={"white"}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((links) => (
        <Link to={links.link}>
            <NavItem
              url={links?.url}
              width={"100%"}
              marginLeft={"0"}
              borderRadius={"0"}
              key={links.name}
              color={"gray.12"}
              icon={links.icon}
            >
              {links.name}
            </NavItem>
            </Link>
        ))}
    </Box>
  )
}


const NavItem = ({ icon, children, ...rest })=> {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        m={"10px 0"}
        role="group"
        fontSize={"20px"}
        cursor="pointer"
        _hover={{
          bg: '#00003b',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="28"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}