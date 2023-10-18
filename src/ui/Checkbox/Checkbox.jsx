import React, { useState } from 'react';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

function CheckboxGroup({
  value,
  onChange,
  onBlur,
  inputRef,
  name,
  error,
  title,
  data,
  ...props
}) {
  const [selectedValues, setSelectedValues] = useState(value || []);

  const defProps = {
    value: selectedValues,
    onBlur,
    inputRef,
    name,
    onChange: (event) => {
      const value = event.target.value;
      const updatedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(updatedValues);
      onChange(updatedValues); // Передача выбранных значений наружу
    },
    ...props,
  };

  return (
    <FormControl error={!!error}>
      <FormLabel>{title}</FormLabel>
      <FormGroup>
        {data.map((el) => (
          <FormControlLabel
            key={el}
            control={
              <Checkbox
                {...defProps}
                value={el}
              />
            }
            label={el}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxGroup;
