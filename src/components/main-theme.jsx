import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'
import blueGrey from '@material-ui/core/colors/blueGrey'
import white from '@material-ui/core/colors/grey'
import { hexToRgba } from './styles/utils'

const drawerWidth = 240
const drawerWidthCollapsed = 55

const headerHeight = 50

const danger = {
  main: red[500],
  textContrast: white[50]
}
const info = {
  main: blue[500],
  textContrast: white[50]
}
const success = {
  main: green[500],
  textContrast: white[50]
}
const warning = {
  main: orange[500],
  textContrast: white[50]
}
const dark = {
  main: blueGrey[500],
  textContrast: white[50]
}

const disabledButtonContained = {
  backgroundColor: 'rgba(0, 0, 0, .12)',
  boxShadow: 'none',
  color: 'rgba(0, 0, 0, .26)'
}

const infoBoxShadow = {
  boxShadow:
    `0 12px 20px -10px ${hexToRgba(info.main, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(info.main, 0.2)}`
}

const successBoxShadow = {
  boxShadow:
    `0 12px 20px -10px ${hexToRgba(success.main, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(success.main, 0.2)}`
}

const warningBoxShadow = {
  boxShadow:
    `0 12px 20px -10px ${hexToRgba(warning.main, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(warning.main, 0.2)}`
}

const dangerBoxShadow = {
  boxShadow:
    `0 12px 20px -10px ${hexToRgba(danger.main, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(danger.main, 0.2)}`
}

const darkBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, .28), 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(244, 67, 54, .2)'
}

export {
  danger,
  info,
  success,
  warning,
  dark,
  drawerWidth,
  drawerWidthCollapsed,
  headerHeight,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  darkBoxShadow,
  disabledButtonContained
}
