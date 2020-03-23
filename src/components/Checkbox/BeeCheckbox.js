import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import withStyles from '@material-ui/core/styles/withStyles'
import CheckBoxStyle from './BeeCheckboxStyle'
import PropTypes from 'prop-types'
import clsx from 'clsx'

class BeeCheckbox extends React.Component {
  render () {
    const { classes, color, ...rest } = this.props
    const checkboxClasses = clsx(classes[color])

    return (
      <Checkbox
        color='primary'
        {...rest}
        className={checkboxClasses}
      />
    )
  }
}

BeeCheckbox.propTypes = {
  classes: PropTypes.array,
  rest: PropTypes.any,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'warning',
    'danger',
    'success',
    'info',
    'dark'
  ]).isRequired
}

export default withStyles(CheckBoxStyle)(BeeCheckbox)
