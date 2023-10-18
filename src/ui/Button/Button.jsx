import ButtonMi from '@mui/material/Button';
import './Button.scss';

// eslint-disable-next-line react/prop-types
export default function Button({children, ...props}) {
  return (
     <ButtonMi {...props}>{children}</ButtonMi>
  );
}

