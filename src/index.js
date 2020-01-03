import { createMuiTheme } from '@material-ui/core/styles'
import * as BeeThemeConfig from './components/main-theme'

export { default as BeeButton } from './components/Button/BeeButton'
export { default as BeeCard } from './components/Card/BeeCard'
export { default as BeeCardBody } from './components/Card/BeeCardBody'
export { default as BeeCardFooter } from './components/Card/BeeCardFooter'
export { default as BeeCardHeader } from './components/Card/BeeCardHeader'
export { default as BeeCheckbox } from './components/Checkbox/BeeCheckbox'
export { default as BeeChip } from './components/Chip/BeeChip'
export { default as BeeDropdown } from './components/Dropdown/BeeDropdown'
export { default as BeeMenuMore } from './components/Dropdown/BeeMenuMore'
export { default as BeeAutocompleteWrapper } from './components/Forms/AutocompleteWrapper'
export { default as BeeDatePickerWrapper } from './components/Forms/DatePickerWrapper'
export { default as BeeFileUploadWrapper } from './components/Forms/FileUploadWrapper'
export { default as BeeRadioGroupWrapper } from './components/Forms/RadioGroupWrapper'
export { default as BeeCheckboxWrapper } from './components/Forms/CheckboxWrapper'
export { default as BeeSelectMultipleWrapper } from './components/Forms/SelectMultipleWrapper'
export { default as BeeSelectWrapper } from './components/Forms/SelectWrapper'
export { default as BeeSwitchWrapper } from './components/Forms/SwitchWrapper'
export { default as BeeTextFieldWrapper } from './components/Forms/TextFieldWrapper'
export { default as BeeHeader } from './components/Header/BeeHeader'
export { default as BeeSimpleHeader } from './components/Header/BeeSimpleHeader'
export { default as BeeAutocomplete } from './components/Input/BeeAutocomplete'
export { default as BeeInput } from './components/Input/BeeCustomInput'
export { default as BeeDrawer } from './components/Drawer/BeeDrawer'
export { default as BeeDialog } from './components/Dialog/BeeDialog'
export { default as BeeGrid } from './components/Grid/BeeGrid'
export { default as BeeSnackbar } from './components/Snackbar/BeeSnackbar'
export { formatPrice as BeeFormatPrice } from './components/Input/BeeFormatters'
export { BeeThemeConfig }

const config = {
  themeName: 'Bee Theme',
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    useNextVariants: true,
    color: '#444',
    h1: {
      fontWeight: 600
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600,
      lineHeight: '1rem'
    }
  },
  palette: {
    type: 'light',
    background: {
      default: '#fafafa'
    },
    primary: {
      main: '#fec62a',
      light: '#fff962',
      dark: '#c69600',
      contrastText: '#000000'
    },
    secondary: {
      main: '#444',
      light: '#6f6f6f',
      dark: '#1d1d1d',
      contrastText: '#fff'
    }
  },
  shape: {
    borderRadius: 3
  },
  drawerWidth: 240,
  drawerWidthCollapsed: 55
}

const theme = createMuiTheme(config)
export default theme
