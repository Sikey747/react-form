import "./RadioGroup.scss";
import Radio from "@mui/material/Radio";
import RadioGroupMui from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioGroup({  
value = "",
onChange,
onBlur,
name,
error,
data,
title,
...props}) {

const propsDefault = {
  value,
  onBlur,
  name,
    ...props,
    onChange:(event) => {
      onChange(event.target.value);
    },
  }

      let renderRadio = data.map((el)=>{
        return (
            <FormControlLabel key={el} id={el} value={el}   control={<Radio />} label={el} {...props}/>
        )
      })

  return (
    <FormControl error={!!error}>
      <FormLabel id="radio-buttons-group-label">{title}</FormLabel>
      <RadioGroupMui
        row
        aria-labelledby="radio-buttons-group-label"
        {...propsDefault}
      >
        {renderRadio}
      </RadioGroupMui>
    </FormControl>
  );
}

export default RadioGroup;