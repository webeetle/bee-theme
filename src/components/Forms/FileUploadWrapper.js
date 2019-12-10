import React from "react"
import TextField from "@material-ui/core/TextField";
import Attachment from "@material-ui/icons/AttachFile";
import { IconButton, Tooltip } from "@material-ui/core";

export default ({
  input: { name, onChange, onBlur, value },
  accept = "*",
  meta,
  id,
  multiple = false,
  btnText = "Upload",
  disabled = false,
  InputProps = {},
  onClick,
  ...propsInputWrapped
}) => {
  return (
    <React.Fragment>
      <input
        accept={accept}
        style={{ display: "none" }}
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
          <IconButton variant="raised" size={"small"} component="span" >
            <Attachment />
          </IconButton>
        </Tooltip>
        {
          !multiple ?
            <TextField
              style={{ margin: "8px 0px 0px 0px" }}
              error={(meta.error && meta.touched)}
              value={document.getElementById(id) && document.getElementById(id).files[0] && document.getElementById(id).files[0].name ? document.getElementById(id).files[0].name : "Nessun file selezionato"}
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
