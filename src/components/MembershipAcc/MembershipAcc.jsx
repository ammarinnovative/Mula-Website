import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Box,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import layer9 from '../../assets/images/Layer9.png';
import { useDispatch } from 'react-redux';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { add } from '../../reducers/CartReducer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function MembershipAccordion({ data }) {
  const [courrseDetails, setCourseDetails] = useState({
    data: [],
    items: { paymentType: 'videos',price:5 },
  });

  const AddData = (datas)=>{
    setCourseDetails({
      ...courrseDetails,data:datas
    });

  }

  const params = useParams();
  const dispatch = useDispatch();

  return (
    <Box
      minH={'40vh'}
      backgroundColor={'#00000f'}
      width={'100%'}
      display={'flex'}
    >
      <Container>
        {data.length > 0 ? (
          data.length > 0 &&
          data.map(item => {
            return (
              <Accordion
                allowMultiple
                width="100%"
                _hover={'none'}
                color={'white'}
                maxW="lg"
                bg="black"
                rounded="lg"
              >
                <AccordionItem width={'100%'}>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    _hover={{ bg: '#0004fd' }}
                  >
                    {item?.videoDetail.length > 0 ? (
                      item.videoDetail &&
                      item?.videoDetail?.map(datas => {
                        return <Text fontSize="md">{datas?.title ?? ''}</Text>;
                      })
                    ) : (
                      <Text>No Data Found</Text>
                    )}

                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text>
                      {/* {item?.courseDetail?.description??""} */}
                      Description
                    </Text>
                    <Box display={"flex"} alignItems={"center"}>
                    <Text fontSize={"25px"} fontWeight={"semibold"}>Price:</Text>
                    <Text fontSize={"20px"}><Text fontSize={"20px"} fontWeight={"bold"} as={'span'}>5$</Text></Text>
                    </Box>
                    <Button color={"white"} _hover={"none"} padding={"10px"} onClick={()=>{dispatch(add({items: { paymentType: 'videos',price:5,membership:params.id },data:item}))}}  backgroundColor={"blue"}>Add to Cart</Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })
        ) : (
          <Text>No Data Found</Text>
        )}
      </Container>
    </Box>
  );
}
