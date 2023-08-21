import { Box, Button, Input, Text, WrapItem } from '@chakra-ui/react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Tophead from '../../../components/Tophead/Tophead';
import ReactPlayer from 'react-player';
import Navbar from '../../../components/Navbar/Navbar';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';

export const MyProfile = () => {
  return (
    <Box backgroundColor={'#00000f'} position={'relative'}>
      <Tophead />
      <Navbar />
      <Box position={'absolute'} width={'100%'} mt={'70px'}>
        <Sidebar>
          <Box>
            <Text
              fontWeight={'bold'}
              mb={'30px'}
              color={'white'}
              fontSize={'28px'}
            >
              My Profile
            </Text>
            <Box
              padding={'10px 30px'}
              boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Box
                display={'flex'}
                mt={'40px'}
                gap={'14px'}
                alignItems={'center'}
              >
                <WrapItem>
                  <Avatar
                    size="xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                </WrapItem>
                <Text fontSize={'25px'} fontWeight={'semibold'} color={'white'}>
                  Jonethen
                </Text>
              </Box>
              <Box
                color={'blue'}
                display={'flex'}
                width={'30%'}
                alignItems={'center'}
                justifyContent={'space-around'}
              >
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    32
                  </Text>
                  <Text>Courses</Text>
                </Box>
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    132
                  </Text>
                  <Text>Videos</Text>
                </Box>
                <Box>
                  <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                    Basic
                  </Text>
                  <Text>Subscription</Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={'flex'}
              gap={'30px'}
              flexDirection={'column'}
              mt={'30px'}
            >
              <Box width={'100%'} gap={'10px'} display={'flex'}>
                <Input
                  value={'Jonethen'}
                  _hover={'none'}
                  borderColor={'black'}
                  outline={'none'}
                  color={'white'}
                  width={'50%'}
                  boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                  type="text"
                  placeholder="Name"
                />
                <Input
                  value={'jonethen@gmail.com'}
                  _hover={'none'}
                  borderColor={'black'}
                  color={'white'}
                  width={'50%'}
                  boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                  type="email"
                  placeholder="Email"
                />
              </Box>
              <Box width={'100%'} gap={'10px'} display={'flex'}>
                <Input
                  value={'Jonethen123'}
                  _hover={'none'}
                  borderColor={'black'}
                  outline={'none'}
                  color={'white'}
                  width={'50%'}
                  boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                  type="text"
                  placeholder="Password"
                />
                <Input
                  value={'Male'}
                  _hover={'none'}
                  borderColor={'black'}
                  color={'white'}
                  width={'50%'}
                  boxShadow="0 4px 10px rgba(0, 0, 255, 0.3)"
                  type="email"
                  placeholder="Male"
                />
              </Box>
              <Button color={"white"} fontSize={"20px"} _hover={"none"} backgroundColor={"#12158a"}>Save</Button>
            </Box>
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
};
