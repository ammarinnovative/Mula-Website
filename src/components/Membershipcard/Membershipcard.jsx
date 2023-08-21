import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

const MembershipCard = () => {
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
    <Box
      border={'1px solid blue'}
      padding={'10px'}
      borderRadius={'6px'}
      width={{ base: '90%' }}
    >
      <Text
        fontSize={'35px'}
        textAlign={'center'}
        fontWeight={'bold'}
        color={'blue'}
      >
        Basic
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
      <Box maxH={'40vh'} overflowY={'auto'}>
        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
          <AiOutlineArrowRight color="white" fontSize={'60px'} />
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eum officia, reiciendis quia natus aperiam exercitationem modi
            voluptatem? Ex, enim!
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
          <AiOutlineArrowRight color="white" fontSize={'60px'} />
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eum officia, reiciendis quia natus aperiam exercitationem modi
            voluptatem? Ex, enim!
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
          <AiOutlineArrowRight color="white" fontSize={'60px'} />
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eum officia, reiciendis quia natus aperiam exercitationem modi
            voluptatem? Ex, enim!
          </Text>
        </Box>
      </Box>
      <Box width={"100%"} borderRadius={"2px"} m={"30px 0"} height={"1px"} backgroundColor={"gray"}></Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"25px"} color={"white"} fontWeight={"semibold"}>$50<br /><Text as={'span'}>Monthly</Text></Text>
        <Button backgroundColor={"blue"} _hover={"none"} color={"white"}>Order Now</Button>
      </Box>
    </Box>
  );
};

export default MembershipCard;
