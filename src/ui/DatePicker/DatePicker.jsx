import "./DatePicker.scss";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/uk";

function DatePickerMy({
  id,
  value,
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  defaultValue,
  ...props
}) {

  const defProps = {
    value,
    onChange: (event) => {
      onChange(event);
    },
    onBlur,
    inputRef,
    name,
    error,
    id,
    defaultValue,
    ...props,
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
      <DatePicker
        {...defProps}
        format="DD MM YYYY"
        {...props}
      />
    </LocalizationProvider>
  );
}

export default DatePickerMy;
