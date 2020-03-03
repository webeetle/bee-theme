import {
  warning,
  danger,
  success,
  info,
  dark
} from './../main-theme'
import { darken } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    padding: theme.spacing(0.5),
    color: 'inherit'
  },
  default: {
    backgroundColor: 'transparent',
    color: `${theme.palette.grey['800']}`,
    borderBottom: `1px solid ${theme.palette.grey['300']}`
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottom: `1px solid ${darken(theme.palette.primary.main, 0.1)}`
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderBottom: `1px solid ${darken(theme.palette.secondary.main, 0.1)}`
  },
  warning: {
    backgroundColor: warning.main,
    color: warning.textContrast,
    borderBottom: `1px solid ${darken(warning.main, 0.1)}`
  },
  danger: {
    backgroundColor: danger.main,
    color: danger.textContrast,
    borderBottom: `1px solid ${darken(danger.main, 0.1)}`
  },
  success: {
    backgroundColor: success.main,
    color: success.textContrast,
    borderBottom: `1px solid ${darken(success.main, 0.1)}`
  },
  info: {
    backgroundColor: info.main,
    color: info.textContrast,
    borderBottom: `1px solid ${darken(info.main, 0.1)}`
  },
  dark: {
    backgroundColor: dark.main,
    color: dark.textContrast,
    borderBottom: `1px solid ${darken(dark.main, 0.1)}`
  }
})

export default styles
