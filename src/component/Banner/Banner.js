import React from 'react';
import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react';
import BannerImgSrc from '../../asset/img/banner.png';

function BannerImg(props) {
  return (
    <Image
      src={BannerImgSrc}
      alt=""
      display={props.display}
      htmlWidth={props.htmlWidth}
      m={props.m}
    />
  );
}

export default function Banner() {
  return (
    <Box
      display={{
        base: 'block',
        md: 'flex',
      }}
      justifyContent="space-between"
      py={{ base: 12, md: 16, lg: 24 }}
    >
      <Box py={16}>
        <BannerImg
          htmlWidth={420}
          display={{
            base: 'block',
            md: 'none',
          }}
          m={{
            base: '8rem auto 2rem',
          }}
        />
        <Heading
          as="h2"
          fontSize={{ base: 32, md: 28, lg: 32 }}
          color="brand.900"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Hi, My name is Ridwan
        </Heading>
        <Text
          pt={2}
          fontSize={{ base: 24, md: 16, lg: 20 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          I am react developer who lived and base in East Java, Indonesia
        </Text>
      </Box>
      <Box>
        <BannerImg
          htmlWidth={420}
          display={{
            base: 'none',
            md: 'inline',
          }}
        />
      </Box>
    </Box>
  );
}
