import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NumericFormat, PatternFormat } from "react-number-format";
import IconButton from "@mui/material/IconButton";
import "./Input.scss";

function Input({
  id,
  placeholder,
  type = "text",
  disabled,
  icon,
  mask,
  value = "",
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  ...props
}) 
{
/* ----------------------------- password State ----------------------------- */
const [showPassword, setShowPassword] = useState(false);
/* ----------------------------- icon type chose ---------------------------- */
const iconType = {
    tel: PhoneIcon,
    email: AlternateEmailIcon,
    password: VisibilityOff,
    showPassword: Visibility,
    price: AttachMoneyIcon,
};
const IconComponent = iconType[type];
/* --------------------- input default AttributionSharp --------------------- */
const inputProps = {
    id,
    type: type === "password" && showPassword ? "text" : type,
    placeholder,
    name,
    disabled,
    error:!!error,
    value,
    "aria-label": name,
    InputProps: icon
      ? {
          startAdornment: (
            <InputAdornment position="start">
              {type === "password" ? (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> :  <Visibility />}
                </IconButton>
              ) : (
                <IconComponent />
              )}
            </InputAdornment>
          ),
        }
      : null,
    onChange: (event) => {
      onChange(event.target.value);
    },
    onBlur,
    inputRef,
    ...props,
};
/* --------------------------------- render --------------------------------- */
const renderInput = mask ? (
    type === "tel" ? (
      <PatternFormat
        format="+## (###) ### ## ##"
        customInput={TextField}
        {...inputProps}
      />
    ) : (
      <NumericFormat
        thousandSeparator
        customInput={TextField}
        {...inputProps}
      />
    )
) : (
    <TextField
      {...inputProps}
      className={type === "password" ? "password" : ""}
    />
);

return renderInput;
}

export default Input;