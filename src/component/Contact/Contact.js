import {
  Text,
  Button,
  Box,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react';
import Github from '../../asset/img/github.png';
import Medium from '../../asset/img/medium.png';
import Instagram from '../../asset/img/instagram.png';
import Linkedin from '../../asset/img/linkedin.png';
import React from 'react';

function SocialMedia() {
  return (
    <Flex justifyContent="center" py={4} alignItems="center">
      <Link href="https://www.github.com/ridlwan17" target="blank" px={4}>
        <Image src={Github} />
      </Link>
      <Link href="https://dharidwan.medium.com/" target="blank" px={4}>
        <Image src={Medium} />
      </Link>
      <Link href="https://instagram.com/dharidwan" target="blank" px={4}>
        <Image src={Instagram} />
      </Link>
      <Link
        src="https://www.linkedin.com/in/dharidwanid/"
        target="blank"
        px={4}
      >
        <Image src={Linkedin} />
      </Link>
    </Flex>
  );
}

export default function Contact() {
  return (
    <Box pt={20} pb={12} w={{ base: '100%', md: '80%' }} mx={{ md: 'auto' }}>
      <Heading as="h2" fontSize={32} color="brand.900" pb={4}>
        Contact Me
      </Heading>
      <FormControl textAlign="center">
        <Input placeholder="Name" my={4} />
        <Input placeholder="Email" my={2} />
        <Textarea placeholder="Type your message here!" my={4} rows="6" />
        <Button
          display="block"
          ml="auto"
          my={2}
          color="white"
          bg="brand.900"
          _hover={{ backgroundColor: 'brand.100' }}
        >
          Submit
        </Button>
      </FormControl>
      <Text textAlign="center" pt={8}>
        Or connect me with
      </Text>
      <SocialMedia />
    </Box>
  );
}
