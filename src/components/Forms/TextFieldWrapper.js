import React from "react";
import TextField from "@material-ui/core/TextField";

export default ({
  input: { name, onChange, onBlur, value },
  meta,
  fullWidth,
  readOnly = false,
  variant,
  disabled = false,
  type = "text",
  highlighted = false,
  InputProps = {},
  onClick,
  disableUnderline = false,
  rowsMax,
  multiline,
  rows,
  uppercase = false,
  ...propsInputWrapped
}) => {
  if (type === "hidden") {
    delete meta.error;
  }
  if (uppercase) {
    value = typeof value === "string" ? value.toUpperCase() : value;
  }

  return (
    <TextField
      type={type}
      label={propsInputWrapped.placeholder}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={(meta.error && meta.touched) || highlighted}
      value={value}
      fullWidth={fullWidth}
      variant={variant}
      onChange={(...params) => {
        if (onChange) {
          onChange(...params);
        }
        if (propsInputWrapped.onChange) {
          propsInputWrapped.onChange(...params);
        }
      }}
      onBlur={(...params) => {
        if (onBlur) {
          onBlur(...params);
        }
        if (propsInputWrapped.onBlur) {
          propsInputWrapped.onBlur(...params);
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
  );
};
