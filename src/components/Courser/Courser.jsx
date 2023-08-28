// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import MembershipCard from '../Membershipcard/Membershipcard';

// Import Swiper styles
import 'swiper/css';

const Slider = ({data}) => {
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
          {
            data?.length>0? 
            data?.length>0 && data?.map((item)=>{
              return(
                <SwiperSlide>
                <Box>
                  <MembershipCard item={item} />
                </Box>
              </SwiperSlide>
              )
            })
           :<Text>No Data Found</Text>
          }
         
          
          ...
        </Box>
      </Swiper>
       </Container>
    </Stack>
   
  );
};

export default Slider;
