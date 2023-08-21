import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react'
import courseimg from "../../assets/images/courseimg.png";
import { imageUrl } from '../../utilities/Config';

const Course = ({data}) => {
  return (
    <Box key={data._id} width={{base:"100%",md:"100%",lg:"100%"}}>
        <Image src={imageUrl+data?.coursePic} width={"100%"} alt='image' />
        <Text width={"100%"} fontSize={"18px"} fontWeight={"semibold"} color={"white"}>{data?.name}</Text>
        <Text width={"100%"} color={"white"}>{data.description}</Text>
    </Box>
  )
}

export default Course