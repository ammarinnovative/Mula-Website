
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
      
      <Box
      
        backgroundColor={'#00000f'}
     padding={'200px 0 70px '}
        width={'100%'}
        
      >
        <Text textAlign={"center"} mb={"25px"} mt={"-15px"} fontWeight={"700"} fontSize={"37px"} color={"white"}>Courses</Text>
        </Box>
        <Invest />
        {data.length > 0 &&
          data.map(item => {
            return (
              <Box width={'90%'} margin={'auto'}>
                <Text
                  color={'white'}
                  fontSize={'25px'}
                  margin={'40px 0 20px 40px'}
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
                    <Text fontSize={"25px"} fontWeight={"700"} color={"white"}>No Course Found</Text>
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
  );
};

export default Courses;
