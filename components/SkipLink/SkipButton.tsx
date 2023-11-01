import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

interface SkipButtonProps extends ButtonProps {
    mainColor: string
}

export const SkipButton = styled(MuiButton, {
    shouldForwardProp: prop => prop !== 'mainColor',
})<SkipButtonProps>(props => ({
    backgroundColor: useTheme().palette.secondary.main, // using the secondary color (heritage gold) as the background color
    color: '#262626', // setting the text color to black
    // styles used when the button is in focus
    "&:focus-visible": {
        color: 'white', // the text color should be white
        backgroundColor: '#707070', // the background is grey
        outline: '2px solid #fdbf57', // the outline is a 2px solid heritage gold line
    },
}))
