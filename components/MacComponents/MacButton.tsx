import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

interface MacButtonProps extends ButtonProps {
    mainColor: string
}

export const MacButton = styled(MuiButton, {shouldForwardProp: (prop) => prop !== "mainColor"})<MacButtonProps>(props => ({
    backgroundColor:
        props.mainColor === 'secondary'
            ? useTheme().palette.secondary.main
            : useTheme().palette.primary.main,
    color: props.mainColor === 'secondary' ? '#262626':  '',
    ':hover': {
        backgroundColor: props.mainColor === 'secondary' ? '#DBDBDD':'#5E6A71',
        color: useTheme().palette.mode === 'dark' ? (props.mainColor === 'primary' ? '#FFFFFF' : '') : '',
    },
    // setting the focus indicator style
    // in light mode: primary buttons will have a black outline and grey background
    // in light mode: secondary buttons will have a maroon outline and light grey background
    // in dark mode: primary buttons will have a desaturated maroon (pink) outline and grey background
    // in dark mode: secondary buttons will have a vivid maroon outline and light grey background
    "&:focus-visible": {
        color: useTheme().palette.mode === 'dark' ? (props.mainColor === 'primary' ? '#FFFFFF' : '') : '',
        backgroundColor:
            props.mainColor === 'secondary' ? '#DBDBDD' : '#5E6A71',
        outline: `2px solid ${useTheme().palette.mode === 'dark' ? (props.mainColor === 'primary' ? '#F4B7C7' : '#dd3765') : (props.mainColor === 'primary' ? 'black' : useTheme().palette.primary.main) }`,
    },
}));