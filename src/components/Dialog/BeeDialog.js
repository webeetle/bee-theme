import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Draggable from 'react-draggable'
import { Paper, withStyles } from '@material-ui/core'
import BeeDialogStyle from './BeeDialogStyle'
import classNames from 'classnames'

const Tools = ({ toolbarBtns }) => {
  return toolbarBtns && Array.isArray(toolbarBtns) && toolbarBtns.length ? toolbarBtns.map(item => item) : null
}

function PaperComponent (props) {
  return (
    <Draggable enableUserSelectHack={false}>
      <Paper {...props} />
    </Draggable>
  )
}

function BeeDialog (props) {
  const {
    open,
    title,
    toolbarBtns,
    maxWidth,
    children,
    onClose,
    draggable,
    disableBackdropClick,
    disableEscapeKeyDown,
    classes,
    color
  } = props

  const dialogClasses = classNames({
    [classes[color]]: color
  })

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={maxWidth}
      PaperComponent={draggable ? PaperComponent : undefined}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >

      <DialogTitle className={dialogClasses}>
        {title}
        {onClose
          ? <IconButton className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          : null}
      </DialogTitle>

      <DialogContent className={classes.root}>
        {children}
      </DialogContent>

      <DialogActions>
        <Tools toolbarBtns={toolbarBtns} />
      </DialogActions>
    </Dialog>
  )
}

BeeDialog.defaultProps = {
  color: 'default'
}

BeeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.any,
  toolbarBtns: PropTypes.node,
  maxWidth: PropTypes.number,
  children: PropTypes.node,
  styleContent: PropTypes.object,
  onClose: PropTypes.func,
  draggable: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.any,
  color: PropTypes.oneOf(['default', 'info', 'warning', 'success', 'danger', 'dark'])
}

export default withStyles(BeeDialogStyle)(BeeDialog)
