import React from 'react'
import TextField from '@material-ui/core/TextField'
import Attachment from '@material-ui/icons/AttachFile'
import { IconButton, Tooltip } from '@material-ui/core'
import PropTypes from 'prop-types'

const FileUploadWrapper = (props) => {
  const {
    input: { name, onChange, onBlur, value },
    accept = '*',
    meta,
    id,
    multiple = false,
    btnText = 'Upload',
    onClick,
    ...propsInputWrapped
  } = props

  return (
    <React.Fragment>
      <input
        accept={accept}
        style={{ display: 'none' }}
        multiple={multiple}
        id={id}
        name={name}
        value={value}
        onChange={(...e) => {
          if (onChange) {
            onChange(...e)
          }
          if (propsInputWrapped.onChange) {
            propsInputWrapped.onChange(...e)
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
        type="file"
      />
      <label htmlFor={id}>
        <Tooltip title={btnText}>
          <IconButton variant="raised" size={'small'} component="span" >
            <Attachment />
          </IconButton>
        </Tooltip>
        {
          !multiple
            ? <TextField
              style={{ margin: '8px 0px 0px 0px' }}
              error={(meta.error && meta.touched)}
              value={document.getElementById(id) && document.getElementById(id).files[0] && document.getElementById(id).files[0].name ? document.getElementById(id).files[0].name : 'Nessun file selezionato'}
              InputProps={{
                readOnly: true,
                disableUnderline: true
              }}
            /> : null
        }
      </label>
    </React.Fragment>
  )
}

FileUploadWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  multiple: PropTypes.bool,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  accept: PropTypes.string
}

export default FileUploadWrapper
