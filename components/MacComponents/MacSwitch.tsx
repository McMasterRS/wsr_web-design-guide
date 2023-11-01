import styled from "@emotion/styled";
import Switch, {SwitchProps} from "@mui/material/Switch";
import React from "react";

// disabling the ripple effect using disableFocusRipple
export const MacSwitch = styled((props: SwitchProps) => (
    <Switch disableFocusRipple {...props} />
))(({ }) => ({
    '& .MuiSwitch-switchBase': {
        // when the switch is disabled and in focus, its background color will be dark grey and the outline will be light pink
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            backgroundColor: '#5E6A71',
            outline: `3px solid #F4B7C7`,
        },
    },
    // when the switch is enabled and in focus, its background color will be vivid maroon and the outline will be heritage gold
    '& .MuiSwitch-switchBase.Mui-checked': {
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            backgroundColor: '#dd3765',
            outline: '3px solid #fdd287',
        },
    }
}));