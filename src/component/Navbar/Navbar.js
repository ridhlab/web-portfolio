import React, { Component } from 'react';
import { Flex, Box, Heading, Link, Center } from '@chakra-ui/react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeActive: true,
      isAboutActive: false,
      isContactActive: false,
    };
  }
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const positionY = window.scrollY;
    console.log(positionY);
    if (positionY >= 0 && positionY <= 100) {
      this.setState({
        isHomeActive: true,
        isAboutActive: false,
        isContactActive: false,
      });
    }
    if (positionY >= 100 && positionY <= 500) {
      this.setState({
        isHomeActive: false,
        isAboutActive: true,
        isContactActive: false,
      });
    }
    if (positionY >= 500) {
      this.setState({
        isHomeActive: false,
        isAboutActive: false,
        isContactActive: true,
      });
    }
    console.log(this.state.isHomeActive);
  };

  NavActive(props) {
    const name = props.name;
    return (
      <Center
        px={{ base: 2, md: 4, lg: 8 }}
        py={{ base: 2 }}
        color="brand.900"
        borderBottom="1px"
        borderBottomColor="Background.900"
      >
        <Link _hover={{ textDecoration: 'none' }}>
          {name === 'home' ? (
            <p>Home</p>
          ) : name === 'about' ? (
            <p>About</p>
          ) : (
            <p>Contact</p>
          )}
        </Link>
      </Center>
    );
  }

  render() {
    return (
      <Box
        display={{ md: 'flex' }}
        py={6}
        px="10%"
        bg="#fff"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="99"
        left={0}
        right={0}
      >
        <Box>
          <Heading
            as="h4"
            fontSize={{ base: 40, md: 32 }}
            color="brand.900"
            textAlign="center"
          >
            Dharidwan
          </Heading>
        </Box>
        <Box>
          <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
            {this.state.isHomeActive ? (
              <this.NavActive name="home" />
            ) : (
              <Center px={{ base: 2, md: 4, lg: 8 }} py={{ base: 2.5 }}>
                <Link _hover={{ textDecoration: 'none' }}>Home</Link>
              </Center>
            )}
            {this.state.isAboutActive ? (
              <this.NavActive name="about" />
            ) : (
              <Center px={{ base: 2, md: 4, lg: 8 }} py={{ base: 2.5 }}>
                <Link _hover={{ textDecoration: 'none' }}>About</Link>
              </Center>
            )}
            {this.state.isContactActive ? (
              <this.NavActive name="contact" />
            ) : (
              <Center px={{ base: 2, md: 4, lg: 8 }} py={{ base: 2.5 }}>
                <Link _hover={{ textDecoration: 'none' }}>Contact</Link>
              </Center>
            )}
          </Flex>
        </Box>
      </Box>
    );
  }
}
