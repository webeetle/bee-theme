import {
  warning,
  success,
  danger,
  info,
  dark
} from '../main-theme'
import { darken } from '@material-ui/core/styles'

const cardHeaderStyle = theme => ({
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px 10px 0px 0px',
    padding: '.8rem',
    border: '0',
    marginBottom: '0',
    fontWeight: '800',
    flex: '1 1 auto',
    fontSize: '1rem',
    borderBottom: '1px solid rgba(0, 0, 0, .2)'
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8
  },
  cardHeaderPlain: {
    marginLeft: '0px',
    marginRight: '0px'
  },
  primaryCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderBottom: darken(theme.palette.primary.main, 0.3)
  },
  secondaryCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    borderBottom: darken(theme.palette.secondary.main, 0.3)
  },
  warningCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: warning.textContrast,
    background: warning.main,
    borderBottom: darken(warning.main, 0.3)
  },
  successCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: success.textContrast,
    background: success.main,
    borderBottom: darken(success.main, 0.3)
  },
  dangerCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: danger.textContrast,
    background: danger.main,
    borderBottom: darken(danger.main, 0.3)
  },
  infoCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: info.textContrast,
    background: info.main,
    borderBottom: darken(info.main, 0.3)
  },
  darkCardHeader: {
    fontFamily: theme.typography.fontFamily,
    color: dark.textContrast,
    background: dark.main,
    borderBottom: darken(dark.main, 0.3)
  }
})

export default cardHeaderStyle
