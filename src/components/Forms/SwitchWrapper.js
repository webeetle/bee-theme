import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import PropTypes from 'prop-types'

const SwitchWrapper = (props) => {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props

  const nowLabel = rest.checked ? rest.checkedlabel : rest.uncheckedlabel

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            {...rest}
            name={name}
            inputProps={restInput}
            onChange={(elem) => {
              onChange(elem)

              if (rest.onChange) {
                rest.onChange(null, elem.target.name, elem.target.checked)
              }
            }}
          />
        }
        label={nowLabel || ''}
      />
    </>
  )
}

SwitchWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
}

export default SwitchWrapper
