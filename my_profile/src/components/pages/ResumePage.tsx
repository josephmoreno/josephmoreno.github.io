import React from "react";

import { Grid } from "@mui/material";

import StyleConfigs from "../../configs/StyleConfigs";

const ResumePage = () => {

    return (
        <Grid
            container spacing={2}
            fontFamily={StyleConfigs.page.fontFamily}
        >
            <Grid item xs={12} textAlign="center">
                Resume
            </Grid>
        </Grid>
    );
};

export default ResumePage;