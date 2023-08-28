import { Box, Select, Text } from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import Navbar from '../../../components/Navbar/Navbar';
import { imageUrl } from '../../../utilities/Config';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GET } from '../../../utilities/ApiProvider';

const MembershipVideos = () => {
  const [datas, setDatas] = useState({ topic: [] });
  const [user, setUser] = useState('');
  const [playingVideo, setPlayingVideo] = useState(
    'https://www.example.com/video1.mp4'
  );

  const location = useLocation();

  const handlePlay = videoId => {
    const findData = datas?.find(val => {
      return val._id == videoId;
    });
    setPlayingVideo(
      'https://mula.thewebtestlink.xyz/' + findData?.video?.video
    );
  };



  const selector = useSelector(state => state);
  const navigate = useNavigate();


 

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.value);
    }
  }, [selector]);


  useEffect(() => {
    if(user){
      setDatas(user?.membershipinfo);
    }
  }, [user]); 
  
  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      <Tophead />
      <Navbar />
      <Box position={'absolute'} width={'100%'}>
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
              Membership Videos
            </Text>
          </Box>
          <Box display={'flex'} mt={'40px'} padding={'30px'} gap={'40px'}>
            <Box width={'60%'}>
              <ReactPlayer
                // url={videos.find((video) => video.id === playingVideo).url}
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
              {datas?.length > 0 &&
                datas?.map(item => {
                  return (
                    <Text
                      cursor={'pointer'}
                      key={item._id}
                      m={'50px 0'}
                      onClick={() => {
                        handlePlay(item._id);
                      }}
                      fontSize={'18px'}
                      borderColor={'white'}
                      borderBottom={'1px'}
                      color={'white'}
                    >
                      {item?.video?.title}
                    </Text>
                  );
                })}
            </Box>
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default MembershipVideos;
