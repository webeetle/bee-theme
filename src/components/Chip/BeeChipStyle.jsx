import {
  danger,
  info,
  success,
  warning,
  dark
} from '../main-theme';
import { darken } from '@material-ui/core/styles';

const chipStyle = {
  danger: {
    color: danger.textContrast,
    backgroundColor: danger.main,
    '& > .MuiAvatar-root': {
      backgroundColor: darken(danger.main, .3),
      color: danger.textContrast
    },
    '&.MuiChip-clickable,&.MuiChip-deletable': {
      '&:hover,&:focus': {
        backgroundColor: darken(danger.main, .1),
        color: danger.textContrast
      }
    }
  },
  info: {
    color: info.textContrast,
    backgroundColor: info.main,
    '& > .MuiAvatar-root': {
      backgroundColor: darken(info.main, .3),
      color: info.textContrast
    },
    '&.MuiChip-clickable,&.MuiChip-deletable': {
      '&:hover,&:focus': {
        backgroundColor: darken(info.main, .1),
        color: info.textContrast
      }
    }
  },
  success: {
    color: success.textContrast,
    backgroundColor: success.main,
    '& > .MuiAvatar-root': {
      backgroundColor: darken(success.main, .3),
      color: success.textContrast
    },
    '&.MuiChip-clickable,&.MuiChip-deletable': {
      '&:hover,&:focus': {
        backgroundColor: darken(success.main, .1),
        color: success.textContrast
      }
    }
  },
  warning: {
    color: warning.textContrast,
    backgroundColor: warning.main,
    '& > .MuiAvatar-root': {
      backgroundColor: darken(warning.main, .3),
      color: warning.textContrast
    },
    '&.MuiChip-clickable,&.MuiChip-deletable': {
      '&:hover,&:focus': {
        backgroundColor: darken(warning.main, .1),
        color: warning.textContrast
      }
    }
  },
  dark: {
    color: dark.textContrast,
    backgroundColor: dark.main,
    '& > .MuiAvatar-root': {
      backgroundColor: darken(dark.main, .3),
      color: dark.textContrast
    },
    '&.MuiChip-clickable,&.MuiChip-deletable': {
      '&:hover,&:focus': {
        backgroundColor: darken(dark.main, .1),
        color: dark.textContrast
      }
    }
  }
};

export default chipStyle;