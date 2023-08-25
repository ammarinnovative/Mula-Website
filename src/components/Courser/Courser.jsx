// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import MembershipCard from '../Membershipcard/Membershipcard';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <Stack pb={'24'}>
       <Container maxW={'8xl'}>
        <Stack pb={16} textAlign={'center'}>
          <Heading color={'#fff'}>Select Your Plan</Heading>
          <Text color={'#b2b2b2'}>Switch Plans Or Cancel Anytime</Text>
        </Stack>
       <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <Box width={'100%'}>
          <SwiperSlide>
            <Box>
              <MembershipCard />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box width={'100%'}>
              <MembershipCard />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box width={'100%'}>
              <MembershipCard />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box width={'100%'}>
              <MembershipCard />
            </Box>
          </SwiperSlide>
          ...
        </Box>
      </Swiper>
       </Container>
    </Stack>
   
  );
};

export default Slider;
