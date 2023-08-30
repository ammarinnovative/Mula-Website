import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react'
import courseimg from "../../assets/images/courseimg.png";
import { imageUrl } from '../../utilities/Config';

const Course = ({data}) => {
  return (
    <Box key={data._id} >
        <Image src={imageUrl+data?.coursePic}  mb={4} alt='image' />
        <Text width={"100%"} fontSize={"16px"} fontWeight={"semibold"} color={"white"}>{data?.name}</Text>
        <Text width={"100%"} fontSize={'14px'} color={"white"}>{data.description}</Text>
    </Box>
  )
}

export default Course