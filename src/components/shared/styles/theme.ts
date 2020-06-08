import { createMuiTheme } from '@material-ui/core/styles';
import { Color } from '.';
import fonts from '../fonts';

const createTheme = (colors: Color) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Open Sans',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontSize: fonts.sizes['xx-large']
       },
      h2: {
        fontSize: fonts.sizes['x-large']
      },
      h3: {
        fontSize: fonts.sizes['large']
      },
      h4: {
        fontSize: fonts.sizes['medium']
      },
      h5: {
        fontSize: fonts.sizes['normal']
      },
      h6: {
        fontSize: fonts.sizes['small']
      }
    },
    palette: {
      primary: {
        main: colors[900],
      },
      secondary: {
        main: colors[50],
        contrastText: colors[900],
      },
    },
  });

  theme.overrides = {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: fonts.fontFamily
        },
      },
    },
    MuiTextField: {
      root: {
        color: theme.palette.primary.main,
      },
    },
    MuiButton: {
      textSecondary: {
        color: theme.palette.secondary.contrastText,
      },
      outlinedSecondary: {
        color: theme.palette.secondary.contrastText,
        background: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.contrastText}`,
        boxSizing: 'border-box',
        borderRadius: '8px',
      },
      containedSecondary: {
        color: theme.palette.secondary.contrastText,
        background: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.contrastText}`,
        boxSizing: 'border-box',
        borderRadius: '8px',
      },
    },
    MuiDrawer: {
      root: {
        background: theme.palette.primary.main,
        color: '#FFFFFF',
      },
      paper: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  };

  return theme;
};

export default createTheme;
