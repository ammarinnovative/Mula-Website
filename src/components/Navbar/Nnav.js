import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
    Tag,
    TagLeftIcon,
    TagLabel,
    HStack,
    StackDivider,
    Container
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { FaShoppingCart } from 'react-icons/fa';
  import logo from '../../assets/images/logo.png';
  import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
  import { Link as ReactLink } from 'react-router-dom';
  import { useState } from 'react';
//   import PrimaryBtn from '../Buttons/PrimaryBtn';
  import { useNavigate } from 'react-router';
  import { useSelector } from 'react-redux';
  
  import { useEffect } from 'react';
import Tophead from '../Tophead/Tophead';

export default function Nnav() {

    const navigate = useNavigate();
    const { isOpen, onToggle } = useDisclosure();
    const selector = useSelector(state => state);
    const [TopHeadLinks, setTopHeadLinks] = useState(['Help', 'Update', 'News'])
    const [TopHeadLinkUrl, setTopHeadLinkUrl] = useState(['/Help/Contact', '/Updates', '/News'])
    const infocss = {
      color: '#999999',
      fontSize: '13px',
      fontWeight: '400'
    }
  
    const user = useSelector(state => state.value)
  
    useEffect(() => {
      // console.log(user);
    }, [user])
  
  return (
    <Stack w={'full'} id='Header' bg={'black'}>
         <Container maxW={'8xl'}>
        
    <Tophead />

    <Stack
      direction={'row'}
      bg={useColorModeValue('black', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      mt={'0 !important'}
      py={{ base: 4, md: 6 }}
      px={{ base: 4, md: 30 }}
      boxShadow={'base'}
      align={'center'}
      justifyContent={'space-between'}
    >

      <Flex
        ml={{ base: -2 }}
        display={{ base: 'flex', lg: 'none' }}>
        <IconButton
          id='hamb'
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>

      <Box as={ReactLink} to={'/'} rel="home" width={{ base: '36%', lg: '11%' }} >
        <Image alt={'Logo'} src={logo} draggable={false}
          margin={'0 auto'}
        />
      </Box>

      <Flex justify={{ base: 'center', md: 'center' }} display={{ base: 'none', lg: 'flex' }}>


        <Flex justify={'center'} display={{ base: 'none', lg: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack>
        
      <Link as={ReactLink} to={'/cart'}>
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
      </Stack>
    </Stack>

    <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse>
         </Container>
   
  </Stack>
  )
}
const DesktopNav = () => {
    const linkColor = useColorModeValue('#fff', '#fff');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={{ base: 1 }}
                  py={{ base: 5 }}
                  as={ReactLink}
                  to={navItem.href ?? '#'}
                  fontSize={{ base: '13px', xl: '17px' }}
                  fontWeight={500}
                  color={linkColor}
                  transition={'0.3s ease-in-out'}
                  position={'relative'}
                
                  _hover={{
                    color: 'primaryHeading.100',
                    _before: {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    }
                  }}
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    w: '100%',
                    h: '3px',
                    transform: 'scaleX(0)',
                    bottom: '-2px',
                    left: '0px',
                    borderRadius: '25px',
                    backgroundColor: "primaryHeading.100",
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-in-out'
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        as={ReactLink}
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.900', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'primaryHeading.100' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'primaryHeading.100'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          onClick={() => { children === undefined ? document.getElementById('hamb').click() : console.log('hein') }}
          py={2}
          as={ReactLink}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link onClick={() => { document.getElementById('hamb').click() }} key={child.label} py={2} as={ReactLink} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [

    
    {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Membership',
        href: '/membership',
      },
      {
        label: 'Courses',
        href: '/courses',
      },
      {
        label: 'Virtual Consultation',
        href: '/consultation',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    
  ];