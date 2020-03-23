import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Drawer } from '@material-ui/core'
import DrawerStyle from '../Drawer/BeeDrawerStyle'
import classNames from 'classnames'

class BeeDrawer extends React.Component {
  render () {
    const {
      classes,
      className,
      collapsed,
      color,
      header,
      body,
      ...rest
    } = this.props

    const drawerClasses = classNames({
      [classes.drawer]: true,
      [classes.open]: !collapsed,
      [classes.collapsed]: collapsed,
      [classes[color]]: color,
      'BeeDrawer-root': !collapsed,
      'BeeDrawer-root-collapsed': collapsed,
      [className]: className
    })

    const drawerHeadClasses = classNames({
      [classes.drawerHead]: true,
      'BeeDrawer-head': true
    })

    const drawerBodyClasses = classNames({
      [classes.drawerBody]: true,
      'BeeDrawer-body': true
    })

    return (
      <Drawer className={drawerClasses} {...rest}>
        {header ? (<div className={drawerHeadClasses}>{header}</div>) : null}
        <div className={drawerBodyClasses}>
          {this.props.children}
        </div>
      </Drawer>
    )
  }
}

BeeDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  header: PropTypes.node,
  body: PropTypes.node,
  collapsed: PropTypes.bool.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'dark',
    'gradient1',
    'gradient2'
  ]),
  items: PropTypes.array,
  variant: PropTypes.string,
  anchor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

export default withStyles(DrawerStyle)(BeeDrawer)
