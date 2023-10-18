import SelectMUi, { components } from "react-select";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Select.scss";

function SelectComponent({
  options,
  value,
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  placeholder,
  ...props
}) {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDownwardIcon />
      </components.DropdownIndicator>
    );
  };
  const defProps = {
    options,
    onChange: (event) => {
      onChange(event);
    },
    onBlur,
    inputRef,
    name,
    error,
    value,
    placeholder,
    ...props,
  };

  return (
    <>
      <SelectMUi
        components={{ DropdownIndicator }}
        options={options}
        classNamePrefix="select"
        {...defProps}
      />
    </>
  );
}

export default SelectComponent;
