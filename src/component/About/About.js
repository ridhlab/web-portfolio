import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import AboutImg from '../../asset/img/about.png';

export default function About() {
  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      py={{ base: 12, md: 16, lg: 24 }}
      justifyContent="space-between"
      alignItems={{ md: 'center' }}
    >
      <Box>
        <Img src={AboutImg} htmlWidth={240} m={{ base: '2rem auto' }} />
      </Box>
      <Box
        w={{ base: '100%', md: '60%' }}
        m={{ base: '2rem auto', md: 0 }}
        ml={{ md: 'auto' }}
      >
        <Heading as="h2" fontSize={32} color="brand.900">
          About Me
        </Heading>
        <Text pt={4}>
          My name is Muhammad Ridwan. I’m React developer from Indonesia. Before
          i started my career as react developer, i was a graphic designer since
          2016
        </Text>
        <Text pt={4}>
          In 2019, I started my career as freelance graphic designer. I started
          building personal branding in Instagram. And I got many job from
          instagram and marketplace Fiverr. Now, I decide to learn about React
          and web development.
        </Text>
      </Box>
    </Box>
  );
}
