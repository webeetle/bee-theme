import {
  warning,
  danger,
  success,
  info
} from './../main-theme';

const styles = theme => ({
  success: {
    backgroundColor: success.main,
    color: success.textContrast
  },
  error: {
    backgroundColor: danger.main,
    color: danger.textContrast
  },
  info: {
    backgroundColor: info.main,
    color: info.textContrast
  },
  warning: {
    backgroundColor: warning.main,
    color: warning.textContrast
  },
  icon: {
    fontSize: 20,
    color: 'inherit'
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

export default styles