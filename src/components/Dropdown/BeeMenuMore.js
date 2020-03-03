import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const ITEM_HEIGHT = 48

class BeeMenuMore extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick (event) {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose (event, onClickProp, id, extraParams) {
    this.setState({ anchorEl: null })

    if (typeof onClickProp !== 'function') {
      return
    }

    if (onClickProp) {
      onClickProp(id, extraParams)
    }
  }

  render () {
    const { anchorEl } = this.state
    const { configuration, icon } = this.props

    let actionIcon = (<MoreVertIcon />)
    if (icon) {
      actionIcon = icon
    }

    const menuElements = []

    if (configuration) {
      configuration.forEach((item, key) => {
        if (!item.hidden) {
          menuElements.push((
            <MenuItem
              style={{ fontSize: '15px' }} key={'menu-ud-' + key}
              onClick={(e) => this.handleClose(e, item.onClick, this.props.id, this.props.extraParams)}
            >
              <div style={{ marginRight: '15px', display: 'flex' }}>
                {item.icon}
              </div>
              <div>
                {item.label}
              </div>
            </MenuItem>
          ))
        }
      })
    }

    return (
      <span>
        <IconButton
          aria-label='More'
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup='true'
          size={this.props.size || 'medium'}
          onClick={this.handleClick}
          disabled={this.props.disabled}
          style={this.props.styleButton ? this.props.styleButton : { display: !menuElements.length ? 'none' : 'auto' }}
        >
          {actionIcon}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              minWidth: 160
            }
          }}
        >
          {menuElements}
        </Menu>
      </span>
    )
  }
}

BeeMenuMore.propTypes = {
  /** A unique id for the component */
  id: PropTypes.string.isRequired,

  /** extra Props */
  extraParams: PropTypes.object,

  /** Icon for BeeMenuMore. If not specified <MoreVertIcon /> */
  icon: PropTypes.object,

  /** List of element in Context Menu */
  configuration: PropTypes.arrayOf(PropTypes.shape({
    /** The label of Menu Item */
    label: PropTypes.string.isRequired,

    /** The Click function of Menu Item */
    onClick: PropTypes.func.isRequired,

    /** The icon of Menu Item */
    icon: PropTypes.object,

    /** Hide or Show the Menu Item */
    hidden: PropTypes.bool

  })).isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  styleButton: PropTypes.any
}

export default BeeMenuMore
