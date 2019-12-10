import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { Chip } from '@material-ui/core'

import chipStyle from './BeeChipStyle'

class BeeChip extends React.Component {
  render () {
    const {
      classes,
      color,
      children,
      className,
      rounded,
      ...rest
    } = this.props

    const chipClasses = classNames({
      [classes.button]: true,
      [classes.rounded]: rounded,
      [classes[color]]: (color !== 'primary' && color !== 'secondary') ? color : null,
      [className]: className
    })

    if (color === 'primary' || color === 'secondary') {
      Object.assign(rest, {
        color: color
      });
    }

    return (
      <Chip {...rest} className={chipClasses} />
    )
  }
}

BeeChip.propTypes = {
  classes: PropTypes.object.isRequired,
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

export default withStyles(chipStyle)(BeeChip)
