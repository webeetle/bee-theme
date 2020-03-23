import {
  info,
  success,
  warning,
  danger,
  dark
} from '../main-theme'

import primaryHeaderBg from './images/primary-header.png'

const headerStyle = theme => ({
  appBar: {
    display: 'flex',
    border: '0',
    padding: '0.4rem 0',
    color: '#444',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset'
  },
  appBarDefaultPadding: {
    display: 'flex',
    border: '0',
    color: '#444',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset',
    paddingTop: '10px'
  },
  absolute: {
    position: 'absolute',
    zIndex: '1100'
  },
  fixed: {
    position: 'fixed',
    zIndex: '1100'
  },
  container: {
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  flex: {
    flex: 1
  },
  title: {
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent'
    }
  },
  appResponsive: {
    margin: '20px 10px'
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  primaryBg: {
    backgroundImage: `url(${primaryHeaderBg})`,
    color: '#fff'
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  info: {
    backgroundColor: info.main,
    color: info.textContrast
  },
  success: {
    backgroundColor: success.main,
    color: success.textContrast
  },
  warning: {
    backgroundColor: warning.main,
    color: warning.textContrast
  },
  danger: {
    backgroundColor: danger.main,
    color: danger.textContrast
  },
  dark: {
    backgroundColor: dark.main,
    color: dark.textContrast
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '0px',
    color: 'inherit'
  },
  white: {
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#444',
    backgroundColor: '#fff !important'
  }
})

export default headerStyle
