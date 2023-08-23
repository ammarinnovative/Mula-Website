import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import invest from '../../assets/images/invest.png';
import { useState } from 'react';
import { GET } from '../../utilities/ApiProvider';
import { useEffect } from 'react';
import { imageUrl } from '../../utilities/Config';

const Invest = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await GET('web/latest');
    setData(res?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <Box padding={'20px'}>
      <Text
        textAlign={'center'}
        width={'100%'}
        color={'white'}
        fontSize={'35px'}
        fontWeight={'700'}
      >
        Investments We Offer
      </Text>
      <Text color={'gray'} fontSize={'14px'} textAlign={'center'}>
        LEARNING VIA APP NEVER GETS EASIER
      </Text>
      <Box
        display={'flex'}
        justifyContent={'center'}
        mt={'40px'}
        gap={'10px'}
        alignItems={'center'}
        flexWrap={'wrap'}
        alignSelf={'normal'}
      >
        {data.length > 0 ? (
          data.map(item => {
            return (
              <Box
                backgroundPosition={'center'}
                position={'relative'}
                maxH={'auto'}
                minH={'350px'}
                backgroundSize={'cover'}
                width={'17%'}
                backgroundImage={imageUrl + item?.coursePic}
              >
                <Text
                  bottom={'71px'}
                  left={'17px'}
                  position={'absolute'}
                  fontWeight={'800'}
                  fontSize={'17px'}
                  color={'black'}
                >
                  {item?.name}
                </Text>
                <Text
                  bottom={'40px'}
                  width={'300px'}
                  fontWeight={'bold'}
                  left={'17px'}
                  position={'absolute'}
                  color={'black'}
                >
                  {item?.description}
                </Text>
              </Box>
            );
          })
        ) : (
          <Text>No data Found</Text>
        )}
      </Box>
    </Box>
  );
};

export default Invest;
