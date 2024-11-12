// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define your custom theme options
const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#257FE6', // Primary color from your preference
        },
        secondary: {
            main: '#979797', // Secondary color (you can customize this as well)
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: 15,
                },
                containedPrimary: {
                    background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    color: 'white',
                    '&:hover': {
                        background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginTop: 5,
                    marginBottom: 15,
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    color: "#333"
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    "span": {
                        fontWeight: "bold",
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    'label + &': {
                        marginTop: 5,
                    },
                    backgroundColor: "white"
                },
            }
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 5,
                    borderColor: "#ccc",
                    borderWidth: 1
                }
            }
        }
    },
};

// Create the theme
const theme = createTheme(themeOptions);

export default theme;
