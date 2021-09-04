import { Center, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import React from 'react';
import '../../index.css';

const Name = styled.span`
  color: #ffd700;
`;
export default function Footer() {
  return (
    <Center minW="container.sm" height="100px" bg="brand.900">
      <Text color="white">
        Copyright 2021 by <Name>Muhammad Ridwan</Name>
      </Text>
    </Center>
  );
}
