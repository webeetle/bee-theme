import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({
  input: { name, onChange, onBlur, value, ...propsInput },
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
  label,
  placeholder,
  rowsMax,
  multiline,
  rows,
  uppercase = false,
  hidden = false,
  id,
  ...propsField
}) => {
  if (type === 'hidden') {
    delete meta.error
  }

  return (
    hidden ? null : (
      <TextField
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        error={(meta.error && meta.touched) || highlighted}
        value={propsField.value ? propsField.value : value}
        fullWidth={fullWidth}
        variant={variant}
        onChange={(...params) => {
          if (uppercase) {
            params[0].target.value = params[0].target.value.toUpperCase()
          }

          if (onChange) {
            onChange(...params)
          }
          if (propsField.onChange) {
            propsField.onChange(...params)
          }
        }}
        onBlur={(...params) => {
          if (onBlur) {
            onBlur(...params)
          }
          if (propsField.onBlur) {
            propsField.onBlur(...params)
          }
        }}
        disabled={disabled}
        rows={rows}
        rowsMax={rowsMax}
        multiline={multiline}
        inputProps={{
          ...propsInput
        }}
        InputProps={{
          ...InputProps,
          className: multiline ? 'textarea-default' : (InputProps ? InputProps.className : ''),
          readOnly,
          disableUnderline: disableUnderline,
          type: type
        }}
        onClick={!disabled ? onClick : () => {}}
      />
    )
  )
}
