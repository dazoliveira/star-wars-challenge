import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme, CssBaseline } from '@material-ui/core';

import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import { history } from 'utils';

const theme = createTheme({
  spacing: 6,
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle2: 'p',
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#FFFFFF'
        }
      },
    },
   MuiButton: {
    root: {
      height: '56px',
      borderRadius: '10px',
      fontFamily: [
        'Montserrat',
      ].join(',')
    },
  },
  },
  typography: {
    h1:{
      fontFamily: [
        'Lato',
      ].join(','),
      fontSize: '72px',
      fontWeight: 'normal',
      lineHeight: '88px',
      letterSpacing: 'inherit',
    },
    h2: {
      fontFamily: [
        'Montserrat',
      ].join(','),
      fontSize: '72px',
      fontWeight: 'normal',
      lineHeight: '88px',
      letterSpacing: 'inherit',
    },
    subtitle2:{
      fontFamily: [
        'Montserrat',
      ].join(','),
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '17px',
      textTransform: 'uppercase',
      letterSpacing: '0.35em',
    },
  },
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: '#2C97D1',
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#2C97D1',
      main: '#2C97D1',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#2C97D1',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },

});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
