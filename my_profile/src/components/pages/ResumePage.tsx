import React from "react";

import { Grid } from "@mui/material";

import StyleConfigs from "../../configs/StyleConfigs";

const ResumePage = () => {

    return (
        <Grid
            container spacing={2}
            fontFamily={StyleConfigs.page.fontFamily}
        >
            <Grid item xs={8} textAlign="center">
                Resume
            </Grid>

            <Grid item xs={2}>
                Hello
            </Grid>

            <Grid item xs={2}>
                Thar
            </Grid>
        </Grid>
    );
};

export default ResumePage;