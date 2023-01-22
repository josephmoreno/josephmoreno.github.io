import { useState } from "react";

import {
    Grid,
    Paper,
    Divider,
    IconButton,
    Collapse,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";

import { ThemeProvider } from "@mui/material/styles";

import StyleConfigs from "../../configs/StyleConfigs";

import ReactPlayer from "react-player/youtube";

import ts_image from "../../images/tracking_system.png";
import chip8_pong from "../../images/chip8_pong.gif";
import chip8_brix from "../../images/chip8_brix.gif";
import chip8_hidden from "../../images/chip8_hidden.gif";
import chip8_wipeoff from "../../images/chip8_wipeoff.gif";
import sdram_ver1 from "../../files/SDRAM Project Doc, Ver. 1.pdf";
import sdram_ver2 from "../../files/SDRAM Project Doc, Ver. 2.pdf";

const ProjectsPage = () => {
    const [sdram_ver1_collapse, sdramVer1Collapse] = useState(false);
    const [sdram_ver2_collapse, sdramVer2Collapse] = useState(false);
    const [vid0_collapse, vid0Collapse] = useState(false);
    const [vid1_collapse, vid1Collapse] = useState(false);
    
    return (
        <Paper
            variant="outlined"
            square
            sx={{
                backgroundColor: StyleConfigs.page.bg,
                color: StyleConfigs.page.color
            }}
        >
            <Grid
                container spacing={1}
                fontFamily={StyleConfigs.page.fontFamily}
                margin={StyleConfigs.page.margin}
                paddingBottom={StyleConfigs.page.paddingBottom}
            >
                <Grid item xs={12} textAlign="center" fontSize={StyleConfigs.page.pageTitleFontSize}>
                    Projects
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Tracking System
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                >
                    Global ETS, Jan. 2022 - Present
                </Grid>

                <Grid
                    item xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Created and maintained server-client programs for communicating real-time information within the company. <br/><br/>
                    The database used for the tracking system is also used to communicate information to customers. <br/><br/>
                    The programs were made using LabVIEW's actor framework and the database used closure tables for tree data relations.
                </Grid>

                <Grid
                    item xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <img src={ts_image} style={{ maxWidth: "97%", height: "auto" }}/>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff",
                            width: "97%",
                        }}
                    />
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Electronic Testing with Vision-Motion Automation
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                >
                    Global ETS, May 2021 - Dec. 2021
                </Grid>

                <Grid
                    item xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Created a LabVIEW program to sequence the control of multiple instruments, including cameras and electronic testing equipment. <br/><br/>
                    This project required me to create a C# DLL from Dobot's provided SDK so we could control their robot arm using LabVIEW. <br/><br/>
                    We used a deep learning model to visually detect electronic package defects. <br/><br/>
                    I also learned how to 3D model (using FreeCAD) and print since this project required custom parts for positioning different parts of the demonstration. <br/><br/>
                    This project was presented at a booth at the 2021 Defense Manufacturing Conference, held in Denver, Colorado. <br/><br/>
                
                    Global ETS <a href="https://www.gets-usa.com/gets/" style={{ color: "#ffffff" }}>home page</a> <br/>
                    Video <a href="https://www.linkedin.com/posts/global-electronics-testing-services-671b3366_ai-tech-testing-activity-6881326848173846528-zBzq" style={{ color: "#ffffff" }}>source</a>
                </Grid>

                <Grid
                    container item xs={9}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        item xs={12}
                        textAlign="left"
                        fontSize={StyleConfigs.page.bodyFontSize}
                    >
                        <video controls autoPlay muted loop style={{ maxWidth: "97%", height: "auto" }}>
                            <source src="https://dms.licdn.com/playlist/C5605AQF95HBwkpadUQ/mp4-640p-30fp-crf28/0/1640636159328?e=2147483647&amp;v=beta&amp;t=3OURk7lcdES4tAmC0NYRHTQ8obCrFSPtQcZ0P9vX_IU" type="video/mp4"/>
                        </video>
                    </Grid>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff",
                            width: "97%",
                        }}
                    />
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    SDRAM (MT48LC2M32B2) Tester
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                >
                    Global ETS, Apr. 2021 - Oct. 2021
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Created a system to write data to an SDRAM chip and read it back to verify the data was written correctly. <br/><br/>
                    The first step for this project was studying the datasheet to understand how to control the chip. <br/><br/>
                    The next step was to decide on how to control it, and I had decided on using an FPGA which I programmed by using VHDL and Vivado's task flow. <br/><br/>
                    After verifying the FPGA design worked, I created a LabVIEW program that uses the VirtualBench to send / receive signals from the FPGA and display a "pass" or "fail" for the tested SDRAM on a data logging UI. <br/><br/>
                </Grid>

                <Grid
                    item xs={6}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    SDRAM Project Doc., Ver. 1
                    <ThemeProvider theme={StyleConfigs.page.theme}>
                        <IconButton
                            color="secondary"
                            onClick={() => sdramVer1Collapse(!sdram_ver1_collapse)}
                        >
                            {sdram_ver1_collapse === false 
                                ?   <KeyboardArrowDownIcon/>
                                :   <RemoveIcon/>
                            }
                        </IconButton>
                    </ThemeProvider>
                </Grid>

                <Grid
                    item xs={6}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    SDRAM Project Doc., Ver. 2
                    <ThemeProvider theme={StyleConfigs.page.theme}>
                        <IconButton
                            color="secondary"
                            onClick={() => sdramVer2Collapse(!sdram_ver2_collapse)}
                        >
                            {sdram_ver2_collapse === false 
                                ?   <KeyboardArrowDownIcon/>
                                :   <RemoveIcon/>
                            }
                        </IconButton>
                    </ThemeProvider>
                </Grid>

                <Grid
                    item xs={12}
                >
                    <Collapse in={sdram_ver1_collapse} timeout="auto">
                        <iframe src={sdram_ver1} width="97%" height="925px" title="sdram_ver1_pdf"/>
                    </Collapse>
                </Grid>

                <Grid
                    item xs={12}
                >
                    <Collapse in={sdram_ver2_collapse} timeout="auto">
                        <iframe src={sdram_ver2} width="97%" height="925px" title="sdram_ver2_pdf"/>
                    </Collapse>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff",
                            width: "97%",
                        }}
                    />
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    CSE Virtual Assistant
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                >
                    Microsoft and USF, Jan. 2020 - May 2020
                </Grid>

                <Grid
                    item xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    A conversational AI developed under Microsoft's guidance as my group senior project. <br/><br/>
                    It was made specifically to converse with CSE students, providing advice and information about the CSE department. <br/><br/>
                    We used Microsoft's bot framework, Azure, and C# to create it.
                </Grid>

                <Grid
                    container item xs={9}
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        item xs={12}
                    >
                        <ReactPlayer
                            url="https://www.youtube.com/embed/gfOIH3GjugQ"
                            width="97%"
                        />
                    </Grid>

                    <Grid
                        item xs={12}
                    >
                        Final Demo Video
                        <ThemeProvider theme={StyleConfigs.page.theme}>
                            <IconButton
                                color="secondary"
                                onClick={() => vid0Collapse(!vid0_collapse)}
                            >
                                {vid0_collapse === false 
                                    ?   <KeyboardArrowDownIcon/>
                                    :   <RemoveIcon/>
                                }
                            </IconButton>
                        </ThemeProvider>

                        <Collapse in={vid0_collapse} timeout="auto">
                            <ReactPlayer
                                url="https://www.youtube.com/embed/c0RjJDFJS1U"
                                width="97%"
                            />
                        </Collapse>
                    </Grid>

                    <Grid
                        item xs={12}
                    >
                        Final Presentation
                        <ThemeProvider theme={StyleConfigs.page.theme}>
                            <IconButton
                                color="secondary"
                                onClick={() => vid1Collapse(!vid1_collapse)}
                            >
                                {vid1_collapse === false 
                                    ?   <KeyboardArrowDownIcon/>
                                    :   <RemoveIcon/>
                                }
                            </IconButton>
                        </ThemeProvider>

                        <Collapse in={vid1_collapse} timeout="auto">
                            <ReactPlayer
                                url="https://www.youtube.com/embed/vGaL0xOAAbQ"
                                width="97%"
                            />
                        </Collapse>
                    </Grid>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff",
                            width: "97%",
                        }}
                    />
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Chip-8 Emulator
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.headerFontSize}
                >
                    Personal Project, May 2020 - Jun. 2020
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    A personal project I took on to understand more about video game emulators. <br/><br/>
                    A bulk of the code is translating the Chip-8's instructions to C++ syntax, but the Chip-8 is a good starting point for understanding emulators because of its small instruction set, consisting of 35 opcodes. <br/><br/>
                    Keystroke input and audio-visual output is done with the SDL library. <br/><br/>

                    <a href="https://en.wikipedia.org/wiki/CHIP-8" style={{color: "#ffffff"}}>Wikipedia article for the Chip-8</a> <br/>
                    GitHub repository <a href="https://github.com/josephmoreno/Chip-8_Emulator" style={{color: "#ffffff"}}>here</a>
                </Grid>

                <Grid
                    container item xs={12}
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        item xs={6}
                    >
                        <img src={chip8_pong} style={{ maxWidth: "95%", height: "auto" }} alt="chip8_pong"/>
                    </Grid>

                    <Grid
                        item xs={6}
                    >
                        <img src={chip8_brix} style={{ maxWidth: "95%", height: "auto" }} alt="chip8_brix"/>
                    </Grid>

                    <Grid
                        item xs={6}
                    >
                        <img src={chip8_hidden} style={{ maxWidth: "95%", height: "auto" }} alt="chip8_hidden"/>
                    </Grid>

                    <Grid
                        item xs={6}
                    >
                        <img src={chip8_wipeoff} style={{ maxWidth: "95%", height: "auto" }} alt="chip8_wipeoff"/>
                    </Grid>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff",
                            width: "97%",
                        }}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProjectsPage;