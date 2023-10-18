import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme(
    {
      cssVarPrefix: '',
  palette: {
    mode: 'light',
    primary: {
      main: '#AC726E',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      secondary: '#0000008a',
    },
    info: {
      main: '#4285F4',
    },
    divider: '#D9D9D9',
  },
  typography: {
    // h1: {
    //   fontSize: 21,
    //   fontWeight: 600,
    //   lineHeight: 1,
    // },
    // fontFamily: 'Saira',
    fontSize: 17,
    fontWeightLight: 300,
    htmlFontSize: 16,
    button: {
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components:{
    MuiOutlinedInput:{
        styleOverrides: {
            root:{
                borderColor:"transparent",
                "&$focused":{
                    borderColor:"transparent",
                }
            }
            
        }
    },
    MuiSelect:{
        styleOverrides: {
            root:{
                minWidth:'100px',
                border: '1px solid',
                "&$focused":{
                    border: '1px solid',
                    outlined: '1px solid'
                },
                "&icon":{
                    color:"red"
            }
            }
            
        }
    },
    MuiToggleButton:{
        styleOverrides: {
            root:{
                padding:0,
                border:0,
                "&.Mui-selected":{
                    backgroundColor:'transparent',
                    "&:hover":{
                        backgroundColor:'transparent',
                    }
                },
                selected:{
                    backgroundColor:'transparent',
                    "&$:hover":{
                        backgroundColor:'transparent',
                    }
                }
            }
            }
        }
    }
  }
);

export default theme