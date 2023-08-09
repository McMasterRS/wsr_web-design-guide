'use client';

import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import themeOptions from "@/config/theme";

// exporting the ColorModeContext containing the skeleton of the function used to change
// the current color mode
export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
})

export function Provider({ children } : {children: React.ReactNode}) {
    // checking if the user has dark mode enabled on their system
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    // declaring the themeMode constant and the setTheMode function
    // themeMode can be "light", "dark" or null and is initialized to null
    const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | null>(null)

    // setting the primary color hex code depending on the themeMode
    const primary_color = themeMode == null
        ? prefersDarkMode
            ? '#ed89a3'
            : '#7a003c'
        : themeMode == 'light'
            ? '#7a003c'
            : '#ed89a3';

    // setting the secondary color hex code depending on the themeMode
    const secondary_color = themeMode == null
        ? prefersDarkMode
            ? '#fdd287'
            : '#fdbf57'
        : themeMode == 'light'
            ? '#fdbf57'
            : '#fdd287';

    // creating a theme using the themeOptions imported from theme.ts
    const theme = React.useMemo(
        () =>
            createTheme({
                ...themeOptions,
                palette: {
                    mode:
                        themeMode == null
                            ? prefersDarkMode
                                ? 'dark'
                                : 'light'
                            : themeMode,
                    primary: {
                        main: primary_color
                    },
                    secondary: {
                        main: secondary_color
                    },
                },
            }),
        [themeMode, prefersDarkMode, primary_color, secondary_color]
    )

    // the toggleColorMode function changes the themeMode depending on its current value
    // if the current themeMode is light, it will change it to dark
    // if the current themeMode is dark, it will change it to light
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setThemeMode(prevMode => (prevMode == null ? (theme.palette.mode === 'dark' ? 'light' : 'dark') : prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [theme]
    )

    // we use the ColorModeContext.Provider to pass the current colorMode to all the component below it
    // we use the ThemeProvider to pass the current theme to all the component below it
    // any component can read the colorMode and theme, no matter how deep it is
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}