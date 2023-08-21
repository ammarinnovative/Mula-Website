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

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function SimpleAccordion() {
  return (
    <Box
      minH={'40vh'}
      backgroundImage={layer9}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      height={'auto'}
      width={'100%'}
      display={'flex'}
      backgroundRepeat={'no-repeat'}
    >
      <Container>
        <Accordion
          allowMultiple
          width="100%"
          _hover={'none'}
          color={'white'}
          maxW="lg"
          bg="black"
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
              <Text fontSize="md">What is Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Chakra UI is a simple and modular component library that gives
                developers the building blocks they need to create web
                applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion
          allowMultiple
          width="100%"
          _hover={'none'}
          color={'white'}
          maxW="lg"
          bg="black"
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
              <Text fontSize="md">What is Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Chakra UI is a simple and modular component library that gives
                developers the building blocks they need to create web
                applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion
          allowMultiple
          width="100%"
          _hover={'none'}
          color={'white'}
          maxW="lg"
          bg="black"
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
              <Text fontSize="md">What is Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Chakra UI is a simple and modular component library that gives
                developers the building blocks they need to create web
                applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}
