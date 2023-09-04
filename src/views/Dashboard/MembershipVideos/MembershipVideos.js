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
import SimpleSidebar from '../../../components/Sidebar/Sidebar';

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
       <SimpleSidebar/>
      <Box >
      <Box
            width={'90%'}
            mt={'40px'}
            margin={'auto'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'200px'}
          >
            <Text fontSize={{base:'20px','xl':'30px'}} fontWeight={'semibold'} color={'white'}>
              Membership Videos
            </Text>
          </Box>
          <Box display={{base:'block','xl':'flex'}} mt={'40px'} padding={'30px'} gap={'40px'}>
            <Box mb={{base:'20'}} width={{base:'100%','xl':'60%'}}>
              <ReactPlayer
                // url={videos.find((video) => video.id === playingVideo).url}
                url={playingVideo}
                controls
                playing
                width="100%"
                height="auto"
              />
            </Box>
            <Box width={{base:'100%','xl':'30%'}} marginLeft={{base:'0','xl':"40px"}}>
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
                      fontSize={{base:'14px','xl':"18px"}}
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
      </Box>
    </Box>
  );
};

export default MembershipVideos;
