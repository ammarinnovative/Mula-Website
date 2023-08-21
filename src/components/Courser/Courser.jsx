// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import MembershipCard from '../Membershipcard/Membershipcard';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <Box padding={"70px"}>
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
    </Box>
  );
};

export default Slider;
