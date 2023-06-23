import type {AppProps} from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import themeOptions from '@/config/theme'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
})

export default function App({ Component, pageProps }: AppProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | null>(null)


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
                        main:
                            themeMode == null
                                ? prefersDarkMode
                                    ? '#86174E'
                                    : '#7a003c'
                                : themeMode == 'light'
                                    ? '#7a003c'
                                    : '#86174E',
                    },
                    secondary: {
                        main:
                            themeMode == null
                                ? prefersDarkMode
                                    ? '#FDC566'
                                    : '#fdbf57'
                                : themeMode == 'light'
                                    ? '#fdbf57'
                                    : '#FDC566',
                    },
                },
            }),
        [themeMode, prefersDarkMode]
    )

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setThemeMode(prevMode => (prevMode == null ? (theme.palette.mode === 'dark' ? 'light' : 'dark') : prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [theme]
    )

    return <>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <CssBaseline />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>

    </>
}
