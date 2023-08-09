import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

// extending the ButtonProps with a mainColor prop of type string
interface MacButtonProps extends ButtonProps {
    mainColor: string
}

export const MacButton = styled(MuiButton, {shouldForwardProp: (prop) => prop !== "mainColor"})<MacButtonProps>(props => ({
    // if mainColor is secondary, the button background color should be heritage gold (i.e., the secondary color in our theme)
    // otherwise, the button background color should be heritage maroon (i.e., the primary color in our theme)
    backgroundColor: props.mainColor === 'secondary' ? useTheme().palette.secondary.main:  useTheme().palette.primary.main,
    // if mainColor is secondary, the button text color should be dark gray
    // otherwise, the button text color should be white
    color: props.mainColor === 'secondary' ? '#262626':  '',

    // setting the hover behavior of MacButton
    ':hover': {
        // if mainColor is secondary, the button should turn light gray (#DBDBDD) when hovering over it
        // otherwise, the button should turn dark gray (#5E6A71) when hovering over it
        backgroundColor: props.mainColor === 'secondary' ? '#DBDBDD':'#5E6A71',
    },
}));