import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from './App';
import { blue, red} from '@material-ui/core/colors'

console.log(blue)
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: blue[500] ,
      light: blue[200],
      dark: blue[500]
    },
    type: "dark"
  }
});

console.log(theme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);


