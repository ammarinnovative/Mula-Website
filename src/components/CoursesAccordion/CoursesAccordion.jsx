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

import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function CoursesAccordion({ data }) {
  const [courrseDetails, setCourseDetails] = useState({
    data: [],
    items: { paymentType: 'course' },
  });

  return (
    <Box
      minH={'40vh'}
      backgroundColor={'#00000f'}
      width={'100%'}
      display={'flex'}
    >
      <Container>
        {data.map(item => {
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
                  <Text fontSize="md">{item?.video?.title}</Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text>
                    {item.courseDetail.description}
                   
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </Container>
    </Box>
  );
}
