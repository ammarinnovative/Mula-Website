import { Box, Select, Stack, Text } from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import Navbar from '../../../components/Navbar/Navbar';
import { imageUrl } from '../../../utilities/Config';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../../../utilities/ApiProvider';
import SimpleSidebar from '../../../components/Sidebar/Sidebar';

const MyProduct = () => {
  const [data, setData] = useState({ topic: [] });
  const [unique, setUnique] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [user, setUser] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(
    'https://www.example.com/video1.mp4'
  );

  const navigate = useNavigate();

  const handlePlay = videoId => {
    const findData = data?.topic?.find(val => {
      return val._id == videoId;
    });
    setPlayingVideo(
      'https://mula.thewebtestlink.xyz/' + findData?.detail?.video
    );
  };

  const selector = useSelector(state => state);

  useEffect(() => {
    if (user) {
      setFullData(user?.courselist);
    } else {
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    const uniqueData = [...new Set(fullData?.map(obj => obj.name))];
    setUnique(uniqueData);
  }, [fullData]);

  const getDataValue = e => {
    let dataName = e.target.value;

    let find = fullData.find(item => item.name == dataName);
    setData(find);
  };

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);

  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      <Box display={{ base: 'block', xl: 'flex' }}>
        <SimpleSidebar />
        <Stack px={8} pt={20} w={'full'}>
          <Box>
            <Text
              fontSize={{ base: '25px', xl: '30px' }}
              fontWeight={'semibold'}
              color={'white'}
            >
              {data?.name}
            </Text>
            <Select
              onChange={getDataValue}
              color={'white'}
              bg="black"
              placeholder="Select"
            >
              {unique.length > 0 &&
                unique.map(item => {
                  return (
                    <option
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundColor: 'black',
                      }}
                    >
                      {item}
                    </option>
                  );
                })}
            </Select>
          </Box>
          <Box
            display={{ base: 'block', xl: 'flex' }}
            mt={'40px'}
            padding={'30px'}
            gap={'40px'}
          >
            <Box mb={{ base: '20' }} width={{ base: '100%', xl: '60%' }}>
              <ReactPlayer
                // url={videos.find((video) => video.id === playingVideo).url}
                url={playingVideo}
                controls
                playing
                width="100%"
                height="auto"
              />
            </Box>
            <Box
              mb={{ base: '20' }}
              width={{ base: '100%', xl: '30%' }}
              marginLeft={{ base: '0', xl: '40px' }}
            >
              <Text
                fontSize={'25px'}
                fontWeight={'bold'}
                letterSpacing={'4px'}
                color={'white'}
              >
                Videos:
              </Text>
              {data?.topic.length > 0 ? (
                data?.topic.length > 0 &&
                data?.topic?.map(item => {
                  return (
                    <Text
                      cursor={'pointer'}
                      key={item._id}
                      m={'50px 0'}
                      onClick={() => {
                        handlePlay(item._id);
                      }}
                      fontSize={{ base: '14px', xl: '18px' }}
                      borderColor={'white'}
                      borderBottom={'1px'}
                      color={'white'}
                    >
                      {item?.detail?.title}
                    </Text>
                  );
                })
              ) : (
                <Text color={'white'} mt={'20px'} fontSize={'25px'}>
                  No Video Found
                </Text>
              )}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyProduct;
