import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebookF,FaYoutube ,FaInstagram} from 'react-icons/fa';

const Banner = () => {
  return (
    <Stack
      padding={{base:'30px 0','xl':'50px 0'}}
      display={'flex'}
      justifyContent={'space-evenly'}
      backgroundColor={'hsl(235.38deg 100% 10.2%)'}
      width={'100%'}
    >
      <Container maxW={'8xl'}>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Text fontSize={{base:'25px','xl':'30px'}} fontWeight={'bold'} color={'white'}>
            Get Updates on 
              <Text padding={{base:'0 5px'}} as={'span'} borderBottom={'1px solid #fff'}>
              Upcoming Courses
              </Text>
              & More
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Box alignItems={'center'} gap={'4'} display={'flex'}>
              <Text fontWeight={'semibold'} color={'white'}>
                Follow us on
              </Text>
              <UnorderedList  gap={'4'} display={'flex'} listStyleType={'none'}>
                <ListItem>
                  <Link
                    to={''}
                    backgroundColor={'#1f2cd1'}
                    w={'40px'}
                    height={'40px'}
                    fontSize={'18px'}
                    borderRadius={'50%'}
                    display={'flex'}
                    color={'#fff'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    margin={'auto'}
                  >
                    <AiFillTwitterCircle />
                  </Link>
                </ListItem>
                <ListItem>
                <Link
                    to={''}
                    backgroundColor={'#1f2cd1'}
                    w={'40px'}
                    height={'40px'}
                    fontSize={'18px'}
                    borderRadius={'50%'}
                    display={'flex'}
                    color={'#fff'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    margin={'auto'}
                  >
                  <FaFacebookF  />
                  </Link>
                  
                </ListItem>
                <ListItem>
                <Link
                    to={''}
                    backgroundColor={'#1f2cd1'}
                    w={'40px'}
                    height={'40px'}
                    fontSize={'18px'}
                    borderRadius={'50%'}
                    display={'flex'}
                    color={'#fff'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    margin={'auto'}
                  >
                  <FaYoutube  />
                  </Link>
                  
                </ListItem>
                <ListItem>
                <Link
                    to={''}
                    backgroundColor={'#1f2cd1'}
                    w={'40px'}
                    height={'40px'}
                    fontSize={'18px'}
                    borderRadius={'50%'}
                    display={'flex'}
                    color={'#fff'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    margin={'auto'}
                  >
                  <FaInstagram  />
                  </Link>
                  
                </ListItem>
                
              </UnorderedList>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Banner;
