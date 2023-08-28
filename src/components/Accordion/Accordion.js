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
  Stack,
  GridItem,
  Grid,
  Img,
  Heading,
} from '@chakra-ui/react';
import layer9 from '../../assets/images/win-banner.jpg';
import Man from '../../assets/images/win-pic.webp';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function SimpleAccordion() {
  const data = [
    {
      text: '01. Great Online Instructor',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 1,
    },
    {
      text: '02. Get our Certified Awards',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 2,
    },
    {
      text: '03. Exclusive Course Materials',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 3,
    },
    {
      text: '04. In - depth Course Analysis',
      desc: 'Chakra UI is a simple and modular component library that gives evelopers the building blocks they need to create webapplications.',
      id: 4,
    },
  ];

  return (
    <Stack
      padding={'100px 0'}
      backgroundImage={layer9}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      height={'auto'}
      alignItems={'center'}
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      backgroundRepeat={'no-repeat'}
    >
      <Container maxW={'8xl'}>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Img w={'75%'} src={Man} />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Box>
              <Heading color={'#fff'} mb={'12'} fontWeight={'500'}>Learn with the<br/>our winning courses</Heading>
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
                      bg="transparent"
                      rounded="lg"
                    >
                      <AccordionItem mb={'5'} border={'0'}>
                        <AccordionButton
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          p={4}
                          borderTopLeftRadius={'18px'}
                          bg={'#000023'}
                         
                          outline={'0'}
                          _hover={{ bg: '#12158A' }}
                        >
                          <Text  fontSize={'20px'}>{item.text}</Text>
                          <AiOutlinePlus fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Text padding={'20px 0'} fontSize={'15px'}>{item.desc}</Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Stack>
  );
}
