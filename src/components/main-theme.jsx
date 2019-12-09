import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import white from '@material-ui/core/colors/grey';

const drawerWidth = 256;

const danger = {
  main: red[500],
  textContrast: white[50]
};
const info = {
  main: blue[500],
  textContrast: white[50]
};
const success = {
  main: green[500],
  textContrast: white[50]
};
const warning = {
  main: orange[500],
  textContrast: white[50]
};
const dark = {
  main: blueGrey[500],
  textContrast: white[50]
};

const disabledButtonContained = {
  backgroundColor: 'rgba(0, 0, 0, 0.12)',
  boxShadow: 'none',
  color: 'rgba(0, 0, 0, 0.26)'
};

export {
  danger,
  info,
  success,
  warning,
  dark,
  drawerWidth,
  disabledButtonContained
}