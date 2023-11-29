import { createTheme } from '@mui/material/styles';

import merge from 'lodash/merge';

import palette from './palette';
import typography from './typography';

const muiTheme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette,
});

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography),
);

// Overrides
muiTheme.overrides = {
  MuiDialog: {
    root: {
      zIndex: 3000,
    },
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
  MuiFormLabel: {
    root: {
      color: `${muiTheme.palette.text.primary} !important`,
    },
    focused: {
      color: `${muiTheme.palette.primary.main} !important`,
    },
  },
  MuiInput: {
    underline: {
      '&:after': {
        borderBottom: `2px solid ${muiTheme.palette.primary.main}`,
      },
    },
  },
  MuiInputBase: {
    input: {
      color: 'darkblue',
    },
  },
  MuiButtonBase: {
    root: {
      color: '#424242',
      border: 0,
      cursor: 'pointer',
      margin: 0,
      display: 'inline-flex',
      outline: 0,
      padding: '7px',
      position: 'relative',
      alignItems: 'center',
      userSelect: 'none',
      borderRadius: 0,
      verticalAlign: 'middle',
      justifyContent: 'center',
      textDecoration: 'none',
      backgroundColor: 'transparent',
    }
  },
  MuiButton: {
    root: {
      boxShadow: 'none !important',
      zIndex: 3,
      borderRadius: 99,
      fontWeight: 400,
      backgroundColor: 'transparent',
      fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
      border: `1px solid ${muiTheme.palette.common.white}`,
      color: muiTheme.palette.common.white,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    containedPrimary: {
      border: 'none !important',
    },
    disabled: {
      border: `1px solid rgba(0, 0, 0, 0.26)`,
    },
    sizeSmall: {
      padding: `10px 20px`,
    },
    sizeLarge: {
      padding: `20px 70px`,
    },
  },
  MuiTypography: {
    colorTextPrimary: {
      color: muiTheme.palette.grey[600],
    },
    colorTextSecondary: {
      color: muiTheme.palette.common.white,
    },
    colorInherit: {
      color: 'inherit',
    },
    colorSecondary: {
      color: muiTheme.palette.secondary.main,
    },
    colorPrimary: {
      color: muiTheme.palette.grey[600],
    },
    h1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 46,
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: 32,
      },
    },
    h2: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
    h3: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
    h4: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    h5: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    h6: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    subtitle1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    body1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    body2: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    },
  },
};

export default muiTheme;
