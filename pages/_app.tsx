import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import themeOptions from '@/config/theme'

export default function App({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        ...themeOptions
    });

    return <>
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    </>
}
