import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C853',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000'
    },
  },
});

theme.overrides = {
  MuiButton: {
    textSecondary:{
      color: theme.palette.secondary.contrastText
    },
    outlinedSecondary: {
      color: theme.palette.secondary.contrastText,
      background: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.contrastText}`,
      boxSizing: 'border-box',
      borderRadius: '8px'
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      background: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      boxSizing: 'border-box',
      borderRadius: '8px'
    }
  },
  MuiDrawer: {
    root: {
      background: theme.palette.primary.main,
      color: '#FFFFFF'
    },
    paper: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  }
};

export default theme;
