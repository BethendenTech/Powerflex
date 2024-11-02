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
                    background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    color: 'white',
                    height: "55px",
                    width: '50%',
                    borderRadius: "12px",
                    padding: '8px 24px',
                    '&:hover': {
                        background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    },
                },
            },
        },
    },
};

// Create the theme
const theme = createTheme(themeOptions);

export default theme;
