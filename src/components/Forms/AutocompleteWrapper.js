import React from 'react'
import Autocomplete from '../Input/BeeAutocomplete'

export default ({
  onStateChange,
  onInputValueChange,
  fullWidth,
  label,
  variant,
  input: { name, onChange, value },
  rowsData,
  remote,
  meta,
  disabled = false,
  ...propsInputWrapped
}) => {
  const renderAutocompleteWithoutValue = () => {
    return (
      <Autocomplete
        key={'autocomplete_without_value'}
        name={name}
        variant={variant}
        label={label}
        fullWidth={fullWidth}
        value={value}
        onChange={(value) => {
          if (onChange) {
            onChange(value)
          }
          if (propsInputWrapped.onChange) {
            propsInputWrapped.onChange(value)
          }
        }}
        onStateChange={onStateChange}
        onInputValueChange={onInputValueChange}
        rowsData={rowsData}
        remote={remote}
        helperText={meta.touched ? meta.error : undefined}
        error={meta.error && meta.touched}
        disabled={disabled}
      />
    )
  }

  const renderAutocompleteWithValue = () => {
    return (
      <Autocomplete
        key={'autocomplete_with_value'}
        name={name}
        variant={variant}
        label={label}
        fullWidth={fullWidth}
        value={value}
        onChange={(value) => {
          if (onChange) {
            onChange(value)
          }
          if (propsInputWrapped.onChange) {
            propsInputWrapped.onChange(value)
          }
        }}
        onStateChange={onStateChange}
        onInputValueChange={onInputValueChange}
        rowsData={rowsData}
        remote={remote}
        helperText={meta.touched ? meta.error : undefined}
        error={meta.error && meta.touched}
        disabled={disabled}
      />
    )
  }

  return (value ? renderAutocompleteWithValue() : renderAutocompleteWithoutValue())
}
