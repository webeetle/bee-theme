import React from "react";
import { DatePicker } from "material-ui-pickers";

const DatePickerWrapper = (props) => {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;

  const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      format={"dd-MM-Y"}
      value={value === "" ? null : value}
    />
  );
}

export default DatePickerWrapper;
