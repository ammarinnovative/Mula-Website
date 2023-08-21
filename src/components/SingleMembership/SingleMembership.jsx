import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { Link } from 'react-router-dom';

const SingleMembership = data => {
  const customScrollbarStyles = css`
    /* Width and color of the scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f5;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: blue;
      border-radius: 4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ;
    }
  `;
  return (
    <Link width="100%" to={`/MembershipById/${data?.data?._id}`}>
    <Box
      border={'1px solid blue'}
      padding={'10px'}
      borderRadius={'6px'}
      width={{ base: '100%' }}
    >
      <Text
        fontSize={'35px'}
        textAlign={'center'}
        fontWeight={'bold'}
        color={'blue'}
        height={"15vh"}
      >
        {data?.data?.name}
      </Text>
      <Text color={'white'} textAlign={'center'} textTransform={'uppercase'}>
        Switch plan or cancel any time
      </Text>
      <Box
        width={'100%'}
        m={'20px 0'}
        backgroundColor={'white'}
        height={'2px'}
      ></Box>
      <Global styles={customScrollbarStyles} />
      <Box minH={"30vh"} maxH={'30vh'} overflowY={'auto'}>
        {data?.data?.membershipDetails.map(item => {
          return (
            <Box display={'flex'} alignSelf={"normal"} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="white" fontSize={'20px'} />
              <Text>
                {item?.text}
              </Text>
            </Box>
          );
        })}
      </Box>
      <Box
        width={'100%'}
        borderRadius={'2px'}
        m={'30px 0'}
        height={'1px'}
        backgroundColor={'gray'}
      ></Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text fontSize={'25px'} color={'white'} fontWeight={'semibold'}>
          {data?.data?.price}$
          <br />
          <Text as={'span'}>Monthly</Text>
        </Text>
        <Button backgroundColor={'blue'} _hover={'none'} color={'white'}>
          Order Now
        </Button>
      </Box>
    </Box>
    </Link>
  );
};

export default SingleMembership;
