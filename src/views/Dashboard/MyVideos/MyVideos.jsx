import { Box, Select, Text } from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import Navbar from '../../../components/Navbar/Navbar';
import { imageUrl } from '../../../utilities/Config';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleSidebar from '../../../components/Sidebar/Sidebar';
import { GET } from '../../../utilities/ApiProvider';

const MyVideo = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [datas, setDatas] = useState({ topic: [] });
  const [playingVideo, setPlayingVideo] = useState(
    'https://www.example.com/video1.mp4'
  );
  const navigate = useNavigate();
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

  useEffect(()=>{
    if(user){
      getVideos();
      }else{
        navigate('/');
      }
    },[user]);

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);

  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      
      <Box >
      <SimpleSidebar/>
      <Box
          pt={'200px'}
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
          <Box display={{base:'block','xl':'flex'}} mt={'40px'} padding={'30px'} gap={'40px'}>
            <Box  mb={{base:'20'}} width={{base:'100%','xl':'60%'}}>
              <ReactPlayer
                url={playingVideo}
                controls
                playing
                width="100%"
                height="auto"
              />
            </Box>
            <Box width={{base:'100%','xl':'30%'}} marginLeft={'40px'}>
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
      </Box>
    </Box>
  );
};

export default MyVideo;
