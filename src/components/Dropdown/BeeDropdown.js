import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import Popper from '@material-ui/core/Popper'

// core components
import Button from '../Button/BeeButton'
import BeeDropdownStyle from './BeeDropdownStyle'

class BeeDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleCloseAway = this.handleCloseAway.bind(this)
  }

  handleClick () {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose (param) {
    this.setState({ open: false })
    if (this.props && this.props.onClick) {
      this.props.onClick(param)
    }
  }

  handleCloseAway (event) {
    if (this.anchorEl.contains(event.target)) {
      return
    }
    this.setState({ open: false })
  }

  render () {
    const { open } = this.state
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding
    } = this.props

    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: open,
      [classes.caretRTL]: rtlActive
    })

    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    })

    let icon = null
    switch (typeof buttonIcon) {
      case 'function':
        icon = <this.props.buttonIcon className={classes.buttonIcon} />
        break
      case 'string':
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        )
        break
      default:
        icon = null
        break
    }
    return (
      <div>
        <div>
          <Button
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node
            }}
            onClick={this.handleClick}
          >
            {buttonText !== undefined ? buttonText : null}
            {icon}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left ? 'top-start' : 'top'
              : left ? 'bottom-start' : 'bottom'
          }
          className={classNames({
            [classes.popperClose]: !open,
            [classes.pooperResponsive]: true
          })}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              in={open}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={this.handleClose}
                            className={classes.dropdownDividerItem}
                          />
                        )
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => {
                            if (prop.onClick) {
                              prop.onClick()
                            }

                            this.handleClose()
                          }}
                          className={dropdownItem}
                        >
                          {prop.label}
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }
}

BeeDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary'
}

BeeDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'dark'
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  onClick: PropTypes.func
}

export default withStyles(BeeDropdownStyle)(BeeDropdown)
