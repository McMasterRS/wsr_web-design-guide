import styled from "@emotion/styled";
import Checkbox, {CheckboxProps} from "@mui/material/Checkbox";
import React from "react";
import {useTheme} from "@mui/material/styles";

// disabling the ripple effect using disableFocusRipple
export const MacCheckbox = styled((props: CheckboxProps) => (
    <Checkbox disableFocusRipple {...props} />
))(({ }) => ({
    '&.Mui-focusVisible': {
        // adding a solid outline that is 2px thick and uses the current primary theme color (in light or dark mode)
        outline: `2px solid ${useTheme().palette.primary.main}`,
    },
}));