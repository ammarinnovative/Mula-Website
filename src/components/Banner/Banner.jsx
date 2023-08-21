import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
 
const Banner = () => {
  return (
    <Box padding={"20px"} display={"flex"} justifyContent={"space-evenly"} backgroundColor={"hsl(235.38deg 100% 10.2%)"}  width={"100%"}>
        <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Get hands on Great Courses you like</Text>
        <Box display={"flex"} gap={"20px"}>
            <Text fontWeight={"semibold"} color={"white"}>Follow us on</Text>
            <Box display={"flex"} gap={"10px"}>
                <Box >
                <AiFillTwitterCircle color='white' fontSize={"25px"}   />
                </Box>
                <Box>
                <FaFacebookF color='white' fontSize={"25px"}   />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Banner