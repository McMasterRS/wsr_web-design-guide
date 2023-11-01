import {styled, useTheme} from '@mui/material/styles'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

export const MacNavButton = styled(Button)(props => ({
    ':hover': {
        backgroundColor: "transparent",
        color: useTheme().palette.secondary.main,
    },
    '&& .MuiTouchRipple-child': {
        backgroundColor: "#D6D6D6",
    },
    // adding a solid white border that is 2px thick to the button that is shown when tabbing through it
    "&:focus-visible": {
        outline: "2px solid #fff",
    },
})) as typeof Button

export const MacIconNavButton = styled(IconButton)(props => ({
    ':hover': {
        backgroundColor: "transparent",
        color: useTheme().palette.secondary.main,
    },
    '&& .MuiTouchRipple-child': {
        backgroundColor: "#D6D6D6",
    },
    // adding a solid white border that is 2px thick to the button that is shown when tabbing through it
    "&:focus-visible": {
        outline: "2px solid #fff",
    },
})) as typeof IconButton
