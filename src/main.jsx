import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { EditionDish } from './pages/EditionDish';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <EditionDish />
    </ThemeProvider>
  </React.StrictMode>,
)
