import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
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
    <Box
      width={'100%'}
      position={'relative'}
      height={'auto'}
      backgroundColor={'#000'}
    >
      <Tophead />
      <Navbar />
      <Box
        position={'absolute'}
        backgroundColor={'#00000f'}
        paddingTop={'50px'}
        width={'100%'}
        mt={'80px'}
      >
        <Invest />
        {data.length > 0 &&
          data.map(item => {
            return (
              <Box width={'90%'} margin={'auto'}>
                <Text
                  color={'white'}
                  fontSize={'25px'}
                  margin={'20px 0 20px 40px'}
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
                    item.courses.map((data)=>{
                      return(
                        <Link to={`/singlecomponent/${data._id}`}>
                      <Course data={data} />
                    </Link>
                      )
                    })
                    
                  ) : (
                    <Text>No Course Found</Text>
                  )}

                  
                </Box>
              </Box>
            );
          })}

        <Box pt={'40px'} mt={'30px'}>
          <Banner />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
