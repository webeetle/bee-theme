import {
  danger,
  info,
  success,
  warning,
  dark
} from '../main-theme'

const CheckboxStyle = theme => ({
  default: {
    color: theme.palette.secondary.main,
    '&.Mui-checked': {
      color: theme.palette.secondary.main
    },
    checked: {}
  },
  primary: {
    color: theme.palette.primary.main,
    '&.Mui-checked': {
      color: theme.palette.primary.main
    },
    checked: {}
  },
  secondary: {
    color: theme.palette.secondary.main,
    '&.Mui-checked': {
      color: theme.palette.secondary.main
    },
    checked: {}
  },
  warning: {
    color: warning.main,
    '&.Mui-checked': {
      color: warning.main
    },
    checked: {}
  },
  danger: {
    color: danger.main,
    '&.Mui-checked': {
      color: danger.main
    }
  },
  info: {
    color: info.main,
    '&.Mui-checked': {
      color: info.main
    }
  },
  success: {
    color: success.main,
    '&.Mui-checked': {
      color: success.main
    }
  },
  dark: {
    color: dark.main,
    '&.Mui-checked': {
      color: dark.main
    }
  }
})

export default CheckboxStyle
