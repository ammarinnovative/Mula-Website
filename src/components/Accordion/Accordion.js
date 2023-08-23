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
} from '@chakra-ui/react';
import layer9 from '../../assets/images/Layer9.png';
import {AiOutlinePlus} from "react-icons/ai";
import {GrFormSubtract} from "react-icons/gr";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function SimpleAccordion() {
  const data = [
    {
      text: 'What is Chakra UI?',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 1,
    },
    {
      text: 'What is Chakra UI?',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 2,
    },
    {
      text: 'What is Chakra UI?',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 3,
    },
    {
      text: 'What is Chakra UI?',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 4,
    },
  ];
  

  return (
    <Box
      minH={'50vh'}
      backgroundImage={layer9}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      height={'auto'}
      alignItems={'center'}
      width={'100%'}
      justifyContent={'space-between'}
      display={'flex'}
      backgroundRepeat={'no-repeat'}
    >
      <Box width={'50%'}></Box>
      <Box width={'50%'}>
        <Container>
          {data.length > 0 &&
            data?.map((item, val) => {
              return (
                <Accordion
                  allowMultiple
                  width="100%"
                  key={val}
                  _hover={'none'}
                  color={'white'}
                  maxW="lg"
                  bg="black"
                  borderTopLeftRadius={'10px'}
                  rounded="lg"
                >
                  <AccordionItem>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={4}
                      _hover={{ bg: '#0004fd' }}
                    >
                      <Text fontSize="md">{item.text}</Text>
                      <AiOutlinePlus fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text>
                        {item.desc}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
        </Container>
      </Box>
    </Box>
  );
}
