import { Box, Select, Text } from '@chakra-ui/react';
import Tophead from '../../../components/Tophead/Tophead';
import Navbar from '../../../components/Navbar/Navbar';
import { imageUrl } from '../../../utilities/Config';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { GET } from '../../../utilities/ApiProvider';

const MyProduct = () => {
    const [data,setData] = useState({topic:[]});
    const [unique,setUnique] = useState([]);
    const [fullData,setFullData] = useState([]);
    const [user,setUser] = useState([]);
  const [playingVideo, setPlayingVideo] = useState("https://www.example.com/video1.mp4");



  const handlePlay = (videoId) => {
    const findData = data?.topic?.find((val)=> {return val._id == videoId});
    setPlayingVideo("https://mula.thewebtestlink.xyz/"+findData?.detail?.video);
    };


  const selector = useSelector(state=>state);


  useEffect(()=>{
  if(user){
      setFullData(user?.courselist);
    }
  },[user]);

  useEffect(() => {
    const uniqueData = [...new Set(fullData?.map(obj => obj.name))];
    setUnique(uniqueData);
  }, [fullData]);




  const getDataValue = (e)=>{
    let dataName = e.target.value;

    let find = fullData.find((item)=>item.name == dataName);
    setData(find);
  }




  useEffect(()=>{
    if(selector){
      setUser(selector?.user?.value?.data);
    }
  },[selector]);





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
              {data?.name}
            </Text>
            <Select
            onChange={getDataValue}
              color={'white'}
              bg="black"
              width={'20%'}
              placeholder='Select'
            >
              {
                unique.length>0 && unique.map((item)=>{
                  return(
                    <option   style={{ color: 'white',fontWeight:"bold",backgroundColor:"black" }}>{item}</option>
                  )
                })
              }
              
            </Select>
          </Box>
          <Box display={'flex'} mt={"40px"} padding={"30px"} gap={'40px'}>
            <Box width={'60%'} >
              <ReactPlayer
                  // url={videos.find((video) => video.id === playingVideo).url}
                url={playingVideo}
                controls
                playing
                width="100%"
                height="auto"
              />
            </Box>
            <Box width={'30%'} marginLeft={"40px"}>
              <Text fontSize={"25px"} fontWeight={"bold"} letterSpacing={"4px"} color={"white"}>Videos:</Text>
                {
                  data?.topic.length>0? data?.topic.length>0 && data?.topic?.map((item)=>{
                        return(
                            
                            <Text cursor={"pointer"} key={item._id} m={"50px 0"} onClick={()=>{handlePlay(item._id)}} fontSize={"18px"} borderColor={"white"} borderBottom={"1px"} color={'white'}>{item?.detail?.title}</Text>
                            
                        )
                    }):<Text color={"white"} mt={"20px"} fontSize={"25px"}>No Video Found</Text>
                }
              
            </Box>
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default MyProduct;
