import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './component/Navbar/Navbar.js';
import Banner from './component/Banner/Banner.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
import Footer from './component/Footer/Footer.js';
import { extendTheme } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1440px',
});

const theme = extendTheme({
  colors: {
    brand: {
      100: '#c8aaff',
      // ...
      900: '#6f42c1',
    },
  },
  breakpoints,
});

function App() {
  return (
    <ChakraProvider className="App" theme={theme}>
      <Navbar />
      <Container
        className="banner"
        maxW="container.lg"
        minW="container.sm"
        px={12}
        py={24}
      >
        <Banner />
        <About />
        <Contact />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
