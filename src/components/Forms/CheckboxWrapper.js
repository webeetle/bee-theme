import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    color: props => props.hasError ? 'red' : 'initial'
  },
  label: {
    color: props => props.hasError ? 'red' : 'initial'
  },
  labelPlacementStart: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 0
  }
})

const CheckboxWrapper = (props) => {
  const {
    input: { name, onChange, value, checked },
    meta,
    label,
    disabled,
    labelPlacement,
    color = 'primary'
  } = props

  const classes = useStyles({
    hasError: meta.error && meta.touched,
    labelPlacement
  })

  return (
    <FormControlLabel
      name={name}
      onChange={(...params) => {
        if (onChange) {
          onChange(...params)
        }
        if (props.onChange) {
          props.onChange(...params)
        }
      }}
      value={value}
      checked={checked}
      disabled={disabled}
      control={
        <Checkbox color={color} classes={classes} />
      }
      label={label}
      labelPlacement={labelPlacement}
      classes={classes}
    />
  )
}

CheckboxWrapper.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
}

export default CheckboxWrapper
