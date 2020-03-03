import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'
import styleSnackbarContent from './BeeSnackbarStyle'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

function BeeSnackbarContent (props) {
  const { onClose, classes, className, message, variant, ...other } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby='client-snackbar'
      message={
        <span id='client-snackbar' className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key='close'
          aria-label='Close'
          color='inherit'
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

BeeSnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
  message: PropTypes.node,
  variant: PropTypes.string
}

const BeeSnackbarContentWrapper = withStyles(styleSnackbarContent)(BeeSnackbarContent)

const style = theme => ({
  margin: {
    margin: theme.spacing(1)
  }
})

class BeeSnackbar extends React.Component {
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose () {
    this.setState({ open: false })

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  componentDidMount () {
    if (this.props.open) {
      this.setState({ open: this.props.open })
    } else {
      this.setState({ open: true })
    }
  }

  render () {
    const {
      variant,
      message,
      ...rest
    } = this.props

    const open = (this.state && this.state.open) ? this.state.open : null

    return (
      <Snackbar
        open={open}
        onClose={this.handleClose}
        {...rest}
      >
        <BeeSnackbarContentWrapper
          variant={variant}
          message={message}
          onClose={this.handleClose}
        />
      </Snackbar>
    )
  }
}

BeeSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default withStyles(style)(BeeSnackbar)
