import {
  danger,
  info,
  success,
  warning,
  dark
} from '../main-theme';
import { fade, darken } from '@material-ui/core/styles';

const buttonStyle = theme => ({
  danger: {
    color: danger.main,
    '&:hover': {
      backgroundColor: fade(danger.main, .3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: danger.main,
      color: danger.textContrast
    }
  },
  info: {
    color: info.main,
    '&:hover': {
      backgroundColor: fade(info.main, .3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: info.main,
      color: info.textContrast,
      '&:hover': {
        backgroundColor: darken(info.main, .3)
      }
    }
  },
  success: {
    color: success.main,
    '&:hover': {
      backgroundColor: fade(success.main, .3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: success.main,
      color: success.textContrast
    }
  },
  warning: {
    color: warning.main,
    '&:hover': {
      backgroundColor: fade(warning.main, .3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: warning.main,
      color: warning.textContrast
    }
  },
  dark: {
    color: dark.main,
    '&:hover': {
      backgroundColor: fade(dark.main, .3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: dark.main,
      color: dark.textContrast
    }
  }
});

export default buttonStyle;