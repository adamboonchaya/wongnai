import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#386641',
      light: '#f5faf5',
      dark: '#000000',
    },
    error: {
      main: '#ff3333'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0px !important',
        },
      },
    },
  },
});

export default theme