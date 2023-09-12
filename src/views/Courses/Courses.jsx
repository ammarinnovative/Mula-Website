import React, { useEffect, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Invest from '../../components/Invest/Invest';
import Course from '../../components/Course/Course';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Tophead from '../../components/Tophead/Tophead';
import { GET } from '../../utilities/ApiProvider';

const Courses = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await GET('web/courses');
    setData(res?.data);
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Box backgroundColor={'#00000f'} padding={'200px 0 70px '} width={'100%'}>
    <Text
      textAlign={'center'}
      mb={'25px'}
      mt={'-15px'}
      fontWeight={'700'}
      fontSize={'37px'}
      color={'white'}
    >
      Courses
    </Text>
  </Box>
    <Box
      width={'100%'}
      position={'relative'}
      height={'auto'}
      backgroundColor={'#00000f'}
      padding={'70px 0'} 
    >
     
      <Invest />

      {data?.length > 0 &&
        data?.map(item => {
          return (
            <Stack >
              <Box pt={8} width={'90%'} margin={'auto'}>
                <Text
                  color={'white'}
                  fontSize={'25px'}
                 pb={12}
                 fontWeight={600}
                 textTransform={'uppercase'}
                  textAlign={'center'}
                >
                  {item?.course_category_name}
                </Text>
                <Box
                  display={'flex'}
                  flexWrap={'wrap'}
                  justifyContent={'center'}
                  gap={'20px'}
                  width={'100%'}
                >
                  {item.courses.length > 0 ? (
                    item.courses.map(data => {
                      return (
                        <Link to={`/singlecomponent/${data._id}`}>
                          <Course data={data} />
                        </Link>
                      );
                    })
                  ) : (
                    <Text fontSize={'25px'} fontWeight={'700'} color={'white'}>
                      No Course Found
                    </Text>
                  )}
                </Box>
              </Box>
            </Stack>
          );
        })}

     
    </Box>
    <Banner />
      <Footer />
    </>
  );
};

export default Courses;
