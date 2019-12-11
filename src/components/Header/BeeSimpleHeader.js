import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import HeaderStyle from './BeeHeaderStyle'
import Typography from '@material-ui/core/Typography'

class BeeSimpleHeader extends React.Component {
  render () {
    const {
      classes,
      color,
      brand,
      fixed,
      absolute,
      children,
      elevation
    } = this.props

    const appBarClasses = classNames({
      [classes.appBarDefaultPadding]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    })

    return (
      <AppBar className={appBarClasses} elevation={elevation}>
        <Toolbar className={classes.container} variant="dense">
          {brand ? (
            <Typography color="inherit" align="left" variant="subtitle1">{brand}</Typography>
          ) : null}
          {children}
        </Toolbar>
      </AppBar>
    )
  }
}

BeeSimpleHeader.defaultProp = {
  color: 'primary',
  elevation: 1
}

BeeSimpleHeader.propTypes = {
  brand: PropTypes.string,
  elevation: PropTypes.number,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark'
  ]),
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark'
    ]).isRequired
  })
}

export default withStyles(HeaderStyle)(BeeSimpleHeader)
