
import React from 'react';
import { Box, Button, Text, Link } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { Link as ReactLink } from 'react-router-dom';

const SingleMembership = data => {
  const customScrollbarStyles = css`
    /* Width and color of the scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 4px;
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
    <Link  as={ReactLink} to={`/MembershipById/${data?.data?._id}`}>
      <Box
        border={'2px solid hsl(237.78deg 79.41% 13.33%)'}
        padding={'17px'}
        borderRadius={'12px'}
        width={{base:"full",md:"350px",lg:"450px"}}
        // width={{ base: '100%' }}
      >
        <Text
          fontSize={'25px'}
          textAlign={'center'}
          textTransform={'uppercase'}
          mb={'6px'}
          fontWeight={'bold'}
          color={'hsl(234.97deg 94.7% 29.61%)'}
        >
          {data?.data?.name}
        </Text>
        <Text
          color={'hsl(231.43deg 44.93% 88.83%)'}
          textAlign={'center'}
          textTransform={'uppercase'}
        >
          Switch plan or cancel any time
        </Text>
        <Box
          width={'100%'}
          m={'10px 0'}
          marginTop={'20px'}
          backgroundColor={'hsl(244.29deg 22.58% 12.16%)'}
          height={'2px'}
        ></Box>
        <Global styles={customScrollbarStyles} />
        <Box minH={'30vh'} maxH={'30vh'} overflowY={'auto'}>
          {data?.data?.membershipDetails.map(item => {
            return (
              <Box
                display={'flex'}
                alignSelf={'normal'}
                alignItems={'center'}
                gap={'10px'}
              >
                <Box width="20px" height="20px"> {/* Fixed-size container */}
                  <AiOutlineArrowRight color="white" size={20} /> {/* Set a fixed size for the icon */}
                </Box>
                <Text color={'gray'} lineHeight={'35px'}>
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
          <Text fontSize={'25px'} color={'white'} fontWeight={'800'}>
            ${data?.data?.price}
            <br />
            <Text as={'span'} fontSize={'22px'} fontWeight={'300'}>
              MONTHLY
            </Text>
          </Text>
          <Link as={ReactLink} className="btn-a" to={'/membership'}>
            Order Now
          </Link>
        </Box>
      </Box>
    </Link>
  );
};

export default SingleMembership;
