import { Box, Select, Text } from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import Navbar from '../../../components/Navbar/Navbar';
import { imageUrl } from '../../../utilities/Config';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { GET } from '../../../utilities/ApiProvider';

const MyVideo = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [datas, setDatas] = useState({ topic: [] });
  const [playingVideo, setPlayingVideo] = useState(
    'https://www.example.com/video1.mp4'
  );

  const selector = useSelector(state => state);

  const handlePlay = videoId => {
    const findData = data?.find(val => {
      return val._id == videoId;
    });
    setPlayingVideo('https://mula.thewebtestlink.xyz/' + findData?.video);
  };

  console.log(playingVideo);
  const getVideos = async () => {
    const res = await GET('users/membership/videos', {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setData(res?.data);
  };

  useEffect(() => {
    getVideos();
  }, [user]);

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value?.data);
    }
  }, [selector]);

  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      <Tophead />
      <Navbar />
      <Box position={'absolute'} width={'100%'} mt={'70px'}>
        <Sidebar>
          <Box
            width={'90%'}
            mt={'40px'}
            margin={'auto'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text fontSize={'30px'} fontWeight={'semibold'} color={'white'}>
              My Videos
            </Text>
          </Box>
          <Box display={'flex'} mt={'40px'} padding={'30px'} gap={'40px'}>
            <Box width={'60%'}>
              <ReactPlayer
                url={playingVideo}
                controls
                playing
                width="100%"
                height="auto"
              />
            </Box>
            <Box width={'30%'} marginLeft={'40px'}>
              <Text
                fontSize={'25px'}
                fontWeight={'bold'}
                letterSpacing={'4px'}
                color={'white'}
              >
                Videos:
              </Text>
              {data?.length > 0 ? (
                data?.length > 0 &&
                data?.map((item, index) => {
                  return (
                    <Text
                      cursor={'pointer'}
                      key={index}
                      m={'50px 0'}
                      onClick={() => {
                        handlePlay(item._id);
                      }}
                      fontSize={'18px'}
                      borderColor={'white'}
                      borderBottom={'1px'}
                      color={'white'}
                    >
                      {item?.title}
                    </Text>
                  );
                })
              ) : (
                <Text color={'white'} mt={'10px'} fontSize={'20px'}>
                  No Video Found
                </Text>
              )}
              :
            </Box>
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default MyVideo;
