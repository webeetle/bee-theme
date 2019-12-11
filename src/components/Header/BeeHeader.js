import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import HeaderStyle from './BeeHeaderStyle'

class BeeHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
    this.headerColorChange = this.headerColorChange.bind(this)
  }

  componentDidMount () {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange)
    }
  }

  headerColorChange () {
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }

  componentWillUnmount () {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange)
    }
  }

  render () {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute,
      handleDrawerToggle
    } = this.props

    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    })

    let iconBar = (<IconButton
      color='inherit'
      aria-label='open drawer'
      onClick={handleDrawerToggle}
    >
      <Menu />
    </IconButton>)

    if (!handleDrawerToggle) {
      iconBar = null
    }

    const brandComponent = <Button className={classes.title}>{brand}</Button>
    return (
      <AppBar className={appBarClasses} elevation={2}>
        <Toolbar className={classes.container}>
          {iconBar}
          {leftLinks !== undefined ? brandComponent : null}

          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation='css'>
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          {rightLinks}
        </Toolbar>
      </AppBar>
    )
  }
}

BeeHeader.defaultProp = {
  color: 'white'
}

BeeHeader.propTypes = {
  classes: PropTypes.object,
  handleDrawerToggle: PropTypes.func,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'secondary',
    'dark'
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
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
      'secondary',
      'dark'
    ]).isRequired
  })
}

export default withStyles(HeaderStyle)(BeeHeader)
