import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'

const SelectMultipleWrapper = (props) => {
  const {
    input: { name, value, onChange },
    native,
    multiple,
    fullWidth,
    variant,
    rowsData,
    meta,
    disabled = false,
    ...propsInputWrapped
  } = props

  const renderOption = (rowData, native = false) => {
    if (native) {
      return (
        <option value={rowData.value}>{rowData.label}</option>
      )
    }

    return (
      <MenuItem key={rowData} value={rowData}>
        <Checkbox color='primary' checked={value.indexOf(rowData) > -1} />
        <ListItemText primary={rowData} />
      </MenuItem>
    )
  }

  const renderSelectedOption = (value, label, native) => {
    if (value && value !== '') {
      return renderOption({
        value: value,
        label: label
      }, native)
    }

    return null
  }

  const ownProps = () => {
    const otherProps = {}

    if (variant === 'outlined') {
      otherProps.input = (
        <OutlinedInput
          fullWidth
          labelWidth={propsInputWrapped.placeholder.length * 9.5}
        />
      )
    }

    return otherProps
  }

  return (
    <FormControl variant={variant} fullWidth={fullWidth} error={meta.error && meta.touched}>
      {propsInputWrapped.placeholder ? (<InputLabel> {propsInputWrapped.placeholder} </InputLabel>) : null}
      <Select
        value={(value) || []}
        multiple={multiple}
        native={native}
        name={name}
        disabled={disabled}
        input={<Input id="select-multiple-checkbox" />}
        renderValue={selected => (
          <div>
            {selected.map(value => (
              <Chip key={value} label={value} style={{ marginRight: 5, height: 20 }} />
            ))}
          </div>
        )}
        {...ownProps()}
        onChange={(...params) => {
          if (onChange) {
            onChange(...params)
          }
          if (propsInputWrapped.onChange) {
            propsInputWrapped.onChange(...params)
          }
        }}
      >
        {
          rowsData && rowsData.length ? rowsData.map((rowData) => {
            return renderOption(rowData, native)
          }) : renderSelectedOption(value, value, native)
        }
      </Select>
      {meta.error && meta.touched ? (<FormHelperText>{meta.error}</FormHelperText>) : <React.Fragment />}
    </FormControl>
  )
}

SelectMultipleWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  rowsData: PropTypes.array,
  multiple: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  native: PropTypes.bool
}

export default SelectMultipleWrapper
