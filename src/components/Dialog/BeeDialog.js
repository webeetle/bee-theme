import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Draggable from 'react-draggable'
import { Paper } from '@material-ui/core'

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
  const { open, title, toolbarBtns, maxWidth, children, styleContent, onClose, draggable, disableBackdropClick, disableEscapeKeyDown } = props

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={maxWidth}
      PaperComponent={draggable ? PaperComponent : undefined}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >

      <DialogTitle style={onClose ? { paddingLeft: '0px' } : null}>
        {onClose
          ? <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          : null}
        {title}
      </DialogTitle>

      <DialogContent style={styleContent}>
        {children}
      </DialogContent>

      <DialogActions>
        <Tools toolbarBtns={toolbarBtns} />
      </DialogActions>
    </Dialog>
  )
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
  className: PropTypes.string
}

export default BeeDialog
