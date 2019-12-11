import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { Button } from '@material-ui/core'

import buttonStyle from './BeeButtonStyle'

class BeeButton extends React.Component {
  render () {
    const {
      classes,
      color,
      children,
      className,
      rounded,
      ...rest
    } = this.props

    const btnClasses = classNames({
      [classes.button]: true,
      [classes.rounded]: rounded,
      [classes[color]]: (color !== 'primary' && color !== 'secondary') ? color : null,
      [className]: className
    })

    if (color === 'primary' || color === 'secondary') {
      Object.assign(rest, {
        color: color
      })
    }

    return (
      <Button {...rest} className={btnClasses}>
        {children}
      </Button>
    )
  }
}

BeeButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'dark'
  ]),
  rounded: PropTypes.bool
}

export default withStyles(buttonStyle)(BeeButton)
