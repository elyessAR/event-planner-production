import { createTheme } from '@mui/material/styles';

export const DrawerWidth = 250;

export const Colors = {
  primary: '#5f2c3e',
  secondary: '#d1adcc',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  orange: '#e53935',
  purple: '#4a148c',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: Colors.primary,
        },
        arrow: {
          color: Colors.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.primary,
          color: Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
  },
});

export default theme;
