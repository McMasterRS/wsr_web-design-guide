import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import SpeedDial, {SpeedDialProps} from '@mui/material/SpeedDial'

// extending the SpeedDialProps with a mainColor prop of type string
interface MacSpeedDialProps extends SpeedDialProps {
    mainColor: string
}

export const MacSpeedDial = styled(SpeedDial, {shouldForwardProp: (prop) => prop !== "mainColor"})<MacSpeedDialProps>(props => ({
    '& .MuiFab-primary': {
        // if mainColor is secondary, the speed dial background color should be heritage gold (i.e., the secondary color in our theme)
        // otherwise, the speed dial background color should be heritage maroon (i.e., the primary color in our theme)
        backgroundColor: props.open
            ? props.mainColor === 'secondary'
                ? '#DBDBDD'
                : '#5E6A71'
            : props.mainColor === 'secondary'
                ? useTheme().palette.secondary.main
                : useTheme().palette.primary.main,
        // if mainColor is secondary, the speed dial text color should be dark gray
        // otherwise, the speed dial text color should be white
        color: props.mainColor === 'secondary' ? '#262626' : '',

        // setting the hover behavior of MacSpeedDial
        '&:hover': {
            // if mainColor is secondary, the speed dial should turn light gray (#DBDBDD) when hovering over it
            // otherwise, the speed dial should turn dark gray (#5E6A71) when hovering over it
            backgroundColor:
                props.mainColor === 'secondary' ? '#DBDBDD' : '#5E6A71',
        },
    },
}))