// importing the Roboto and Roboto Condensed fonts from Google Fonts
import {Roboto, Roboto_Condensed} from "next/font/google";

// specifying the weights and styles of the Roboto font
const roboto = Roboto({
    weight: ['400', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

// specifying the weights and styles of the Roboto Condensed font
const roboto_condensed = Roboto_Condensed({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

// declaring a custom typography variant
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        settingTitle: true;
    }
}

const themeOptions = {
    // setting the typography variants
    typography: {
        h1: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontSize: '50pt',
            fontWeight: 400,
        },
        h2: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontSize: '28pt',
            fontWeight: 400,
        },
        h3: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontSize: '20pt',
            fontWeight: 400,
        },
        h4: {
            fontFamily: roboto.style.fontFamily,
            fontSize: '13pt',
            fontWeight: 900,
        },
        button: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontWeight: 700,
        },
        settingTitle: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontSize: '15pt',
        },
    },
    // setting the global border radius for all components
    shape: {
        borderRadius: 28,
    },
    components: {
        // overwriting the border radius for the MuiPaper component (used dropdown menus)
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    }
}

export default themeOptions