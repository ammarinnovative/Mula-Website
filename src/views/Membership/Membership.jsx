// import { Box, Text } from '@chakra-ui/react';
// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
// import SingleMembership from '../../components/SingleMembership/SingleMembership';
// import Banner from '../../components/Banner/Banner';
// import Invest from '../../components/Invest/Invest';
// import Tophead from '../../components/Tophead/Tophead';
// import { useState } from 'react';
// import { GET } from '../../utilities/ApiProvider';
// import { useEffect } from 'react';

// const Membership = () => {
//   const [data, setData] = useState([]);
//   const getMembership = async () => {
//     const res = await GET('web/membership');
//     setData(res?.data);
//   };


//   useEffect(() => {
//     getMembership();
//   }, []);
//   return (
//   <>
//    <Box backgroundColor={'#00000f'} padding={'200px 0 70px '} width={'100%'}>
//         <Text
//           textAlign={'center'}
//           mb={'25px'}
//           mt={'-15px'}
//           fontWeight={'700'}
//           fontSize={'37px'}
//           color={'white'}
//         >
//          Membership
//         </Text>
//       </Box>
//     <Box
//       position={'relative'}
//       height={'100vh'}
//       backgroundColor={'#00000f'}
//       width={'100%'}
//     >
     
//       <Box
//         width={'100%'}
//         backgroundColor={'#00000f'}
//       >
    
//         <Text
//           textAlign={'center'}
//           fontSize={{base:"25px",md:"34px",lg:"40px"}}
//           mt={'30px 0'}
//           color={'white'}
//           fontWeight={'650'}
//         >
//           Select Your Plan
//         </Text>
//         <Text textAlign={'center'} fontSize={'17px'} color={'gray.200'}>
//           SWITCH PLAN OR CANCEL ANY TIME
//         </Text>
//         <Box
//           display={'flex'}
//           padding={'20px'}
//           m={'50px 0'}
//           gap={'40px'}
//           width={"100%"}
//           justifyContent={{ base: 'center' }}
//           alignItems={'center'}
//         flexWrap={'wrap'}
//         >
//           {data?.map(item => {
//             return <SingleMembership data={item} />;
//           })}
//         </Box>
//         <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
//           <Banner />
//           <Footer />
//         </Box>
//       </Box>
//     </Box>
//   </>
//   );
// };

// export default Membership;

import { Box, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SingleMembership from '../../components/SingleMembership/SingleMembership';
import Banner from '../../components/Banner/Banner';
import Invest from '../../components/Invest/Invest';
import Tophead from '../../components/Tophead/Tophead';
import { GET } from '../../utilities/ApiProvider';

const Membership = () => {
  const [data, setData] = useState([]);

  const getMembership = async () => {
    const res = await GET('web/membership');
    setData(res?.data);
  };

  useEffect(() => {
    getMembership();
  }, []);

  return (
    <>
      <Box backgroundColor={'#00000f'} padding={'200px 0 70px '} width={'100%'}>
        <Text
          textAlign={'center'}
          mb={'25px'}
          mt={'-15px'}
          fontWeight={'700'}
          fontSize={{ base: '25px', md: '34px', lg: '40px' }}
          color={'white'}
        >
          Membership
        </Text>
      </Box>
      <Box
        position={'relative'}
        minHeight={'100vh'}
        backgroundColor={'#00000f'}
        width={'100%'}
      >
        <Box width={'100%'} backgroundColor={'#00000f'}>
          <Text
            textAlign={'center'}
            fontSize={{ base: '25px', md: '34px', lg: '40px' }}
            mt={'30px 0'}
            color={'white'}
            fontWeight={'650'}
          >
            Select Your Plan
          </Text>
          <Text textAlign={'center'} fontSize={'17px'} color={'gray.200'}>
            SWITCH PLAN OR CANCEL ANY TIME
          </Text>
          <Box
            display={'flex'}
            padding={'20px'}
            m={'50px 0'}
            gap={{ base: '20px', md: '40px', lg: '60px' }}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            {data?.map((item, index) => {
              return (
                <SingleMembership
                  key={index}
                  data={item}
                  width={{ base: '100%', md: '48%', lg: '30%', xl: '24%' }}
                />
              );
            })}
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
            <Banner />
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Membership;
