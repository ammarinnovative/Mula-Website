import React, { useState } from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';


export default function RefundPolicy() {
  return (
    <div>
    <Stack
      width={'100%'}
      minH={'100vh'}
      maxH={'auto'}
      position={'relative'}
      backgroundColor={'#00000f'}
    >
      <Container maxW={'8xl'}>
        <Stack
          backgroundColor={'#00000f'}
          padding={'200px 0 70px '}
          width={'100%'}
        >
          <Text
            textAlign={'center'}
            mb={{ base: '0px', md: '25px' }}
            mt={{ base: 'none', md: '-15px' }}
            fontWeight={'700'}
            fontSize={{ base: '27px', md: '35px', lg: '40px' }}
            color={'white'}
          >
           Refund Policy
          </Text>
        </Stack>

        <Stack mb={'24'} gap={4}>
          <Heading fontSize={'30px'} color={'#fff'}>
            About The Policy
          </Heading>
          <Text color={'#cfcece'}>
            At , the protection of our customers is our main concern and we
            regard it as our own. despite the fact that we gather data from
            our customers, it is simply used to make enhancements in our
            client administrations. our organization recognizes that the
            support and utilization of our customers' data is our obligation.
            we do not lease or sell the data that our customers give us on the
            web. this policy depicts how the individual data of our customer
            gathered by us is utilized, why we gather it, and how we use it.
            it is inside our arrangement that we depict the decisions you can
            make about how we can gather and utilize your data
          </Text>
          <Heading fontSize={'30px'} color={'#fff'}>
          Personal Information Collected
          </Heading>
          <Text color={'#cfcece'}>
            At , the protection of our customers is our main concern and we
            regard it as our own. despite the fact that we gather data from
            our customers, it is simply used to make enhancements in our
            client administrations. our organization recognizes that the
            support and utilization of our customers' data is our obligation.
            we do not lease or sell the data that our customers give us on the
            web. this policy depicts how the individual data of our customer
            gathered by us is utilized, why we gather it, and how we use it.
            it is inside our arrangement that we depict the decisions you can
            make about how we can gather and utilize your data
          </Text>
          <Heading fontSize={'30px'} color={'#fff'}>
          Use Of Collected Data
          </Heading>
          <Text color={'#cfcece'}>
            At , the protection of our customers is our main concern and we
            regard it as our own. despite the fact that we gather data from
            our customers, it is simply used to make enhancements in our
            client administrations. our organization recognizes that the
            support and utilization of our customers' data is our obligation.
            we do not lease or sell the data that our customers give us on the
            web. this policy depicts how the individual data of our customer
            gathered by us is utilized, why we gather it, and how we use it.
            it is inside our arrangement that we depict the decisions you can
            make about how we can gather and utilize your data
          </Text>
          <Heading fontSize={'30px'} color={'#fff'}>
          Newsletter Opt-out
          </Heading>
          <Text color={'#cfcece'}>
            At , the protection of our customers is our main concern and we
            regard it as our own. despite the fact that we gather data from
            our customers, it is simply used to make enhancements in our
            client administrations. our organization recognizes that the
            support and utilization of our customers' data is our obligation.
            we do not lease or sell the data that our customers give us on the
            web. this policy depicts how the individual data of our customer
            gathered by us is utilized, why we gather it, and how we use it.
            it is inside our arrangement that we depict the decisions you can
            make about how we can gather and utilize your data
          </Text>
          <Heading fontSize={'30px'} color={'#fff'}>
          Social Media (features) And Widgets
          </Heading>
          <Text color={'#cfcece'}>
            At , the protection of our customers is our main concern and we
            regard it as our own. despite the fact that we gather data from
            our customers, it is simply used to make enhancements in our
            client administrations. our organization recognizes that the
            support and utilization of our customers' data is our obligation.
            we do not lease or sell the data that our customers give us on the
            web. this policy depicts how the individual data of our customer
            gathered by us is utilized, why we gather it, and how we use it.
            it is inside our arrangement that we depict the decisions you can
            make about how we can gather and utilize your data
          </Text>
        </Stack>
      </Container>
      <Banner />
      <Footer />
    </Stack>
  </div>
  )
}
