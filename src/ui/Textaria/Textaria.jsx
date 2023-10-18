import "./Textaria.scss";

import TextField from "@mui/material/TextField";

function TextAria({
  value = "",
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  id,
  placeholder,
  minRows = 3,
  disabled,
  ...props
}) {
const propsDefault = {
  value,
  onBlur,
  inputRef,
  name,
  error:!!error,
  id,
  placeholder,
  multiline:true,
  minRows,
  disabled,
  "aria-label": name,
  ...props,
  onChange:(event) => {
    onChange(event.target.value);
  },
}
  return (
    <TextField
    {...propsDefault}
    />
  );
}

export default TextAria;