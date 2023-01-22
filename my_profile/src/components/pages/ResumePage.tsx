import { useState } from "react";

import ReactPlayer from "react-player/youtube";

import {
    Grid,
    Paper,
    Divider,
    Collapse,
    IconButton,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";

import StyleConfigs from "../../configs/StyleConfigs";
import diploma from "../../files/B.S. Diploma - Joseph Daniel Moreno.pdf";

const ResumePage = () => {
    const [deg_collapse, setDegCollapse] = useState(false);
    const [vid0_collapse, setVid0Collapse] = useState(false);

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
                    Resume
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
                    Education
                </Grid>

                <Grid
                    item
                    xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Bachelor of Science in Computer Engineering, GPA: 3.27

                    <br/>

                    August 2020 from University of South Florida

                    {' '}

                    <ThemeProvider theme={StyleConfigs.page.theme}>
                        <IconButton
                            color="secondary"
                            onClick={() => setDegCollapse(!deg_collapse)}
                        >
                            {deg_collapse === false 
                                ?   <KeyboardArrowDownIcon/>
                                :   <RemoveIcon/>
                            }
                        </IconButton>
                    </ThemeProvider>

                    <br/>

                    <Collapse in={deg_collapse} timeout="auto">
                        <iframe src={diploma} width="97%" height="925px" title="ba_cpe_jdm"/>
                    </Collapse>

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
                    Skills
                </Grid>

                <Grid
                    item
                    xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Platforms / Operating Systems:
                </Grid>

                <Grid
                    item
                    xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Windows 7/8/10/11, Android, Linux
                </Grid>

                <Grid
                    item
                    xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Programming Languages:
                </Grid>

                <Grid
                    item
                    xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    LabVIEW, C++, C, C#, TypeScript, JavaScript, Python, Java, SQL, CUDA
                </Grid>

                <Grid
                    item
                    xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Hardware Description Languages:
                </Grid>

                <Grid
                    item
                    xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    VHDL, Verilog
                </Grid>

                <Grid
                    item
                    xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Web Development:
                </Grid>

                <Grid
                    item
                    xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Django, React, HTML, CSS, CSHTML
                </Grid>

                <Grid
                    item
                    xs={3}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    Software / Environments:
                </Grid>

                <Grid
                    item
                    xs={9}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    MySQL, Apache, Nginx, Git, MinGW, Microsoft Visual Studio, Visual Studio Code, Node.js, Eclipse,<br/>
                    Code::Blocks, Xilinx Vivado, Xilinx ISE, MPLAB X IDE, FreeCAD
                </Grid>

                <Grid
                    item
                    xs={12}
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
                    Experience
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Research and Development Engineer - Global ETS, Nov. 2020 - Present
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Created and maintained software with LabVIEW (using QMH and actor framework) to improve the efficiency of the lab / testing floor. <br/>
                    • Built digital circuits and used LabVIEW to automate the testing of electronic components. <br/>
                    • Worked and communicated in a team to prioritize requirements and distribute tasks.
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Conversational AI App Developer - Microsoft and USF, Jan. 2020 - May 2020
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Created and connected a QnA Maker knowledge base. <br/>
                    • Created back and front-end to manage the AI's database from a web browser. <br/>
                    • Deployed the app using Azure and Visual Studio. <br/>

                    Summary Video
                    <ThemeProvider theme={StyleConfigs.page.theme}>
                        <IconButton
                            color="secondary"
                            onClick={() => setVid0Collapse(!vid0_collapse)}
                        >
                            {vid0_collapse === false 
                                ?   <KeyboardArrowDownIcon/>
                                :   <RemoveIcon/>
                            }
                        </IconButton>
                    </ThemeProvider>

                    <Collapse in={vid0_collapse} timeout="auto">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=gfOIH3GjugQ"
                        />
                    </Collapse>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Computer Technician Intern - Computronics Computers, Jan. 2017 - Aug. 2017
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Installed different versions of Windows, removed viruses, and optimized the performance of clients' computers. <br/>
                    • Troubleshot issues concerning hardware and software. <br/>
                    • Provided customer service and performed store maintenance.
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Tech Replacement Guide Creator - iFixit, Aug. 2017 - Dec. 2017
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Disassembled an LG V10 and created guides on how to replace its parts. <br/>
                    • Scheduled meetings and distributed duties among my team members. <br/>
                    • Maintained a log for meetings and created a team charter. <br/>
                    
                    Contributed to six guides: fingerprint sensor, dual front cameras, motherboard, loudspeaker, headphone jack, battery <br/>
                    <a href="https://www.ifixit.com/Device/LG_V10" style={{color: "#ffffff"}}>Link</a>
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Warehouse Handler - FedEx, Dec. 2018 (Seasonal)
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Loaded/unloaded packages to/from trucks. <br/>
                    • Organized documents by route. <br/>
                    • Prepped conveyor belt for incoming packages.
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                    fontWeight="bold"
                    sx={{
                        textDecoration: "underline",
                    }}
                >
                    Store Volunteer - Tarpon Springs Shepherd Center, Feb. 2014 - Apr. 2014
                </Grid>

                <Grid
                    item xs={12}
                    textAlign="left"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    • Performed routine store cleaning. <br/>
                    • Stocked and organized shelves with products. <br/>
                    • Loaded/unloaded products to/from trucks. <br/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ResumePage;