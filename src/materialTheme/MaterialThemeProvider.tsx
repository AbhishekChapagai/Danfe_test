import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontSize: '48px',
    },
    body1: {
      fontSize: '18px',
    },
    body2: {
      fontSize: '15px',
    },
  },
});

function MaterialThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MaterialThemeProvider;
