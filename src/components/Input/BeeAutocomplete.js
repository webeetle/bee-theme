import React, { Component } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 20,
    left: 0,
    right: 0,
    maxHeight: 250,
    overflowY: 'auto'
  },
  chip: {
    margin: '20px 30px'
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1
  },
  divider: {
    height: 30
  }
})

/* Input */
const renderInput = (inputProps) => {
  const { InputProps, classes, ref, variant, error, helperText, selectedItem, clearSelection, ...other } = inputProps

  return (
    <TextField
      variant={variant}
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      error={error}
      helperText={helperText}
      {...other}
    />
  )
}
/* End */

/* Option */
const renderOption = ({ suggestion, index, itemProps, highlightedIndex, selectedItem }) => {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}

renderOption.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
}

/* End */

class BeeAutocomplete extends Component {
  searchLocal (value, rowsData) {
    const inputValue = deburr(value.trim()).toLowerCase()
    const inputLength = inputValue.length
    let count = 0

    if (inputLength !== 0 && (rowsData && rowsData.length > 0)) {
      return rowsData.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

        if (keep) {
          count += 1
        }

        return keep
      })
    }
    return []
  }

  getOptions (value) {
    const { rowsData, remote } = this.props
    if (!remote) {
      return this.searchLocal(value, rowsData)
    } else {
      return rowsData
    }
  }

  render () {
    const { classes, label, placeholder, variant, onChange, onStateChange, onInputValueChange, value, error, helperText, disabled } = this.props

    return (
      <div className={classes.root}>
        <Downshift
          onStateChange={onStateChange}
          onInputValueChange={onInputValueChange}
          onChange={onChange}
          initialSelectedItem={value}
          initialInputValue={value}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem
          }) => {
            return (
              <div className={classes.container}>
                {renderInput({
                  fullWidth: true,
                  classes,
                  variant,
                  InputProps: getInputProps({
                    placeholder: placeholder
                  }),
                  label: label,
                  error: error,
                  helperText: helperText,
                  disabled: disabled,
                  selectedItem
                })}
                <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className={classes.paper} square>
                      {
                        this.getOptions(inputValue).map((suggestion, index) =>
                          renderOption({
                            suggestion,
                            index,
                            itemProps: getItemProps({ item: suggestion.value }),
                            highlightedIndex,
                            selectedItem
                          })
                        )
                      }
                    </Paper>
                  ) : null}
                </div>
              </div>
            )
          }}
        </Downshift>
      </div>
    )
  }
}

BeeAutocomplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  rowsData: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  onChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  onStateChange: PropTypes.func,
  remote: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BeeAutocomplete)
