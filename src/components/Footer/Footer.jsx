import {
  Box,
  Text,
  Image,
  Button,
  Stack,
  Container,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaRegDotCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack
      backgroundColor={'#00000f'}
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Container maxW={'8xl'}>
        <Box
          display={{base:'block','xl':'flex'}}
          padding={'70px 0'}
          justifyContent={'space-between'}
       
        >
          <Box display={'flex'} mb={{base:'6'}} flexDirection={'column'} gap={'10px'}>
            <Text mb={{base:'5px','xl':'20px'}} color={'#fff'} textTransform={'uppercase'}>
              Links
            </Text>
            <UnorderedList ml={0} spacing={'4'} listStyleType={'none'}>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaRegDotCircle  color={'#f18f0c'} />
                <Link color={'#b2b2b2'} to={'/membership'}>Membership</Link>
                </Box>
              </ListItem>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaRegDotCircle  color={'#f18f0c'} />
                <Link color={'#b2b2b2'} to={'/about'}>About</Link>
                </Box>
              </ListItem>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaRegDotCircle  color={'#f18f0c'} />
                <Link color={'#b2b2b2'} to={'/courses'}>Courses</Link>
                </Box>
              </ListItem>
            </UnorderedList>
            
          </Box>
          <Box display={'flex'} mb={{base:'6'}} flexDirection={'column'} gap={'10px'}>
            <Text mb={'20px'} color={'white'} textTransform={'uppercase'}>
              Company
            </Text>
            <UnorderedList ml={0} spacing={'4'} listStyleType={'none'}>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaRegDotCircle  color={'#f18f0c'} />
                <Link color={'#b2b2b2'} to={'/consultation'}>Visual Consultation</Link>
                </Box>
              </ListItem>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaRegDotCircle  color={'#f18f0c'} />
                <Link color={'#b2b2b2'} to={'/contact'}>Talk to us</Link>
                </Box>
              </ListItem>
              
            </UnorderedList>
            
          </Box>
          <Box >
            <Text mb={'20px'}  color={'white'} textTransform={'uppercase'}>
              Contact us
            </Text>
            <UnorderedList ml={0} spacing={'4'} listStyleType={'none'}>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <HiLocationMarker  color={'#f18f0c'} />
                <Text color={'#b2b2b2'} >Address: 77 Indian St. perth, NY</Text>
                </Box>
              </ListItem>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <FaPhone  color={'#f18f0c'} />
                <Text color={'#b2b2b2'} >Phone: +3233-332-334</Text>
                </Box>
              </ListItem>
              <ListItem>
                <Box display={'flex'} gap={2} alignItems={'center'}> 
                <MdEmail  color={'#f18f0c'} />
                <Text color={'#b2b2b2'} >Email: mula@gmail.com</Text>
                </Box>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box padding={'20px 0'} borderTop={'1px solid #474747'}>
          <Text textAlign={'center'} color={'#b2b2b2'} fontSize={{base:'12px','xl':'16px'}}>
            Copyright 2021 NewYorkWebCoders | All Rights Reserved
          </Text>
        </Box>
      </Container>
    </Stack>
  );
};

export default Footer;
