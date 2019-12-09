import { createMuiTheme } from '@material-ui/core/styles';

const config = {
  themeName: 'Theme',
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    useNextVariants: true,
    color: '#444',
    h1: {
      fontWeight: 600
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600,
      lineHeight: '1rem'
    }
  },
  palette: {
    type: 'light',
    background: {
      default: '#fff'
    },
    primary: {
      main: '#fec62a',
      light: '#fff962',
      dark: '#c69600',
      contrastText: '#000000'
    },
    secondary: {
      main: '#444',
      light: '#6f6f6f',
      dark: '#1d1d1d',
      contrastText: '#fff'
    }
  },
  shape: {
    borderRadius: 5
  }
};

const theme = createMuiTheme(config);

export default theme;
export { config };