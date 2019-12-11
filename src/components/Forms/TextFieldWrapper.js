import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const TextFieldWrapper = (props) => {
  const {
    input: { name, onChange, onBlur, value },
    meta,
    fullWidth,
    readOnly = false,
    variant,
    disabled = false,
    type = 'text',
    highlighted = false,
    InputProps = {},
    onClick,
    disableUnderline = false,
    rowsMax,
    multiline,
    rows,
    uppercase = false,
    ...propsInputWrapped
  } = props

  if (type === 'hidden') {
    delete meta.error
  }
  let tempValue = null
  if (uppercase) {
    tempValue = typeof value === 'string' ? value.toUpperCase() : value
  }

  return (
    <TextField
      type={type}
      label={propsInputWrapped.placeholder}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={(meta.error && meta.touched) || highlighted}
      value={tempValue}
      fullWidth={fullWidth}
      variant={variant}
      onChange={(...params) => {
        if (onChange) {
          onChange(...params)
        }
        if (propsInputWrapped.onChange) {
          propsInputWrapped.onChange(...params)
        }
      }}
      onBlur={(...params) => {
        if (onBlur) {
          onBlur(...params)
        }
        if (propsInputWrapped.onBlur) {
          propsInputWrapped.onBlur(...params)
        }
      }}
      disabled={disabled}
      rows={rows}
      rowsMax={rowsMax}
      multiline={multiline}
      InputProps={{
        ...InputProps,
        readOnly,
        disableUnderline: disableUnderline,
        type: type
      }}
      onClick={onClick}
    />
  )
}

TextFieldWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onClick: PropTypes.func,
  rowsMax: PropTypes.number,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  disableUnderline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  rows: PropTypes.array,
  uppercase: PropTypes.bool,
  InputProps: PropTypes.object,
  highlighted: PropTypes.bool,
  multiline: PropTypes.bool
}

export default TextFieldWrapper
