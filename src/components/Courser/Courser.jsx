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
          <Heading color={'#fff'} fontSize={{base:"20px","2xl":"28px"}}>Select Your Plan</Heading>
          <Text color={'#b2b2b2'}>Switch Plans Or Cancel Anytime</Text>
        </Stack>
        <Box width={'100%'} gap={8} justifyContent={'center'}  display={{base:'block','2xl':'flex'}}>
          {
            data?.length>0? 
            data?.length>0 && data?.map((item)=>{
              return(
                <MembershipCard item={item} />
              )
            })
           :<Text>No Data Found</Text>
          }
         
          
        
        </Box>
       </Container>
    </Stack>
   
  );
};

export default Slider;
