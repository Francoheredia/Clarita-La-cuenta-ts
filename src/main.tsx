import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClaritaLaCuenta from './ClaritaLaCuenta';
import { ChakraProvider } from '@chakra-ui/react';
import { myNewTheme } from './style/theme';

ReactDOM.render(
  <ChakraProvider theme={myNewTheme}>
    <React.StrictMode>
      <ClaritaLaCuenta />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
