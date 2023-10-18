import "./Switch.scss";
import SwitchMui from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

function Switch({
  title,
  value,
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  ...props
}) {
  const defProps = {
    value,
    onChange: (event) => {
      onChange(event.target.checked);
    },
    onBlur,
    inputRef,
    name,
    error,
    ...props,
  };

  return (
    <FormControl >
      <FormLabel >{title}</FormLabel>
      <FormControlLabel
        {...defProps}
        control={<SwitchMui inputProps={{ "aria-label": "controlled" }} />}
        label="Label"
      />
    </FormControl>
  );
}

export default Switch;
