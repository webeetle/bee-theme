import {
  danger,
  info,
  success,
  warning,
  dark,
  disabledButtonContained
} from '../main-theme'
import { fade, darken } from '@material-ui/core/styles'

const buttonStyle = theme => ({
  danger: {
    color: danger.main,
    '&:hover': {
      backgroundColor: fade(danger.main, 0.3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&.MuiButton-outlined': {
      borderColor: danger.main
    },
    '&.MuiButton-contained': {
      backgroundColor: danger.main,
      color: danger.textContrast,
      '&:hover': {
        backgroundColor: darken(danger.main, 0.3)
      },
      '&.Mui-disabled': {
        ...disabledButtonContained
      }
    }
  },
  info: {
    color: info.main,
    '&:hover': {
      backgroundColor: fade(info.main, 0.3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: info.main,
      color: info.textContrast,
      '&:hover': {
        backgroundColor: darken(info.main, 0.3)
      },
      '&.Mui-disabled': {
        ...disabledButtonContained
      }
    },
    '&.MuiButton-outlined': {
      borderColor: info.main
    },
    '&.MuiButtonGroup-groupedContained:not(:last-child)': {
      borderRight: `1px solid ${darken(info.main, 0.3)}`
    }
  },
  success: {
    color: success.main,
    '&:hover': {
      backgroundColor: fade(success.main, 0.3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: success.main,
      color: success.textContrast,
      '&:hover': {
        backgroundColor: darken(success.main, 0.3)
      },
      '&.Mui-disabled': {
        ...disabledButtonContained
      }
    },
    '&.MuiButton-outlined': {
      borderColor: success.main
    },
    '&.MuiButtonGroup-groupedContained:not(:last-child)': {
      borderRight: `1px solid ${darken(success.main, 0.3)}`
    }
  },
  warning: {
    color: warning.main,
    '&:hover': {
      backgroundColor: fade(warning.main, 0.3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: warning.main,
      color: warning.textContrast,
      '&:hover': {
        backgroundColor: darken(warning.main, 0.3)
      },
      '&.Mui-disabled': {
        ...disabledButtonContained
      }
    },
    '&.MuiButton-outlined': {
      borderColor: warning.main
    },
    '&.MuiButtonGroup-groupedContained:not(:last-child)': {
      borderRight: `1px solid ${darken(warning.main, 0.3)}`
    }
  },
  dark: {
    color: dark.main,
    '&:hover': {
      backgroundColor: fade(dark.main, 0.3),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&.MuiButton-contained': {
      backgroundColor: dark.main,
      color: dark.textContrast,
      '&:hover': {
        backgroundColor: darken(dark.main, 0.3)
      },
      '&.Mui-disabled': {
        ...disabledButtonContained
      }
    },
    '&.MuiButton-outlined': {
      borderColor: dark.main
    },
    '&.MuiButtonGroup-groupedContained:not(:last-child)': {
      borderRight: `1px solid ${darken(dark.main, 0.3)}`
    }
  },
  rounded: {
    borderRadius: 50
  }
})

export default buttonStyle
