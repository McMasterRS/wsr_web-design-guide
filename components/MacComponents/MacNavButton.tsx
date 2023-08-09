import {styled, useTheme} from '@mui/material/styles'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

export const MacNavButton = styled(Button)(props => ({
    // setting the navigation button behavior when hovering over them
    ':hover': {
        // the background should be transparent when hovering over a navigation button
        backgroundColor: "transparent",
        // the text should be heritage gold (the secondary color in the theme)
        color: useTheme().palette.secondary.main,
    },
    // changing the color of the ripple and setting to a light grey
    '&& .MuiTouchRipple-child': {
        backgroundColor: "#D6D6D6",
    },
})) as typeof Button

export const MacIconNavButton = styled(IconButton)(props => ({
    // setting the navigation icon button behavior when hovering over them
    ':hover': {
        // the background should be transparent when hovering over a navigation icon button
        backgroundColor: "transparent",
        // the icon should be heritage gold (the secondary color in the theme)
        color: useTheme().palette.secondary.main,
    },
    '&& .MuiTouchRipple-child': {
        // changing the color of the ripple and setting to a light grey
        backgroundColor: "#D6D6D6",
    },
})) as typeof IconButton
