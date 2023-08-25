import React from 'react';
import {
  Box,
  Button,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ChakraProvider } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
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
      border={'1px solid #12158a'}
      padding={'10px'}
      borderRadius={'8px'}
      width={{ base: '90%' }}
    >
      <Text
        fontSize={'32px'}
        textAlign={'center'}
        fontWeight={'bold'}
        color={'#12158a'}
        textTransform={'uppercase'}
      >
        Basic
      </Text>
      <Text color={'white'} textAlign={'center'} textTransform={'uppercase'}>
        Switch plan or cancel any time
      </Text>
      <Box
        width={'100%'}
        m={'20px 0'}
        backgroundColor={'#131320'}
        height={'1px'}
      ></Box>
      <Global styles={customScrollbarStyles} />
      <Box maxH={'40vh'} overflowY={'auto'}>
        <UnorderedList spacing={4} listStyleType={'none'}>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet,</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet, cons</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet, consectetur</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet, consectetur adi</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet, consectetur adipi</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
              <AiOutlineArrowRight color="#f18f0c" fontSize={'15px'} />
              <Text color={'#b2b2b2'}>Dolor sit amet, consectetur adipisc</Text>
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        width={'100%'}
        borderRadius={'2px'}
        m={'25px 0'}
        height={'1px'}
        backgroundColor={'gray'}
      ></Box>
      <Box
        padding={'0 6px 10px 4px'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack>
          <Heading fontSize={'35px'} color={'white'} fontWeight={'700'}>
            {' '}
            $50
          </Heading>

          <Text
            m={'0 !important'}
            textTransform={'uppercase'}
            fontSize={'20px'}
            color={'white'}
            fontWeight={'400'}
            as={'span'}
          >
            Monthly
          </Text>
        </Stack>

        <Link as={ReactLink} className="btn-a" to={'/membership'}>
          Order Now
        </Link>
      </Box>
    </Box>
  );
};

export default MembershipCard;
