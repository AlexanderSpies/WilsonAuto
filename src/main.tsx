import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'
import theme from './theme.js';
import LandingPage from './landingPage/landingPage.jsx';
import Header from './layout/header.jsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Header />
        <LandingPage />
      </ChakraProvider>
    </StrictMode>
  );