import { useState } from "react";

import {
    Grid,
    Paper,
    Card,
    CardContent,
    Divider,
    Collapse,
    IconButton,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from 'react-leaflet';

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import FlightIcon from "@mui/icons-material/Flight";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MonitorIcon from "@mui/icons-material/Monitor";
import SchoolIcon from "@mui/icons-material/School";

import StyleConfigs from "../../configs/StyleConfigs";

import dmc_2021 from "../../images/dmc_2021.png";
import transcript from "../../files/Official PDF Transcript.pdf"

const TimelinePage = () => {
    const [transcript_collapse, transcriptCollapse] = useState(false);

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
                    Timeline
                </Grid>

                <Grid
                    item xs={12}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={StyleConfigs.page.bodyFontSize}
                >
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Card
                                            variant="outlined"
                                            square
                                            sx={{
                                                backgroundColor: StyleConfigs.page.cardBg,
                                                color: StyleConfigs.page.color,
                                            }}
                                        >
                                            <CardContent sx={{
                                                fontFamily: StyleConfigs.page.fontFamily,
                                                textAlign: "left",
                                            }}>
                                                <MapContainer center={[5.29244, 100.28419]} zoom={15} scrollWheelZoom={false} className="leaflet-map">
                                                    <TileLayer
                                                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                                                    />
                                                    <Marker position={[5.29244, 100.28419]}>
                                                        <Popup>
                                                            Global ETS, Malaysia <br/><br/>
                                                            Plot 88F, 2nd Floor, Lintang Bayan Lepas 10, Bayan Lepas Industrial Park, Bayan Lepas Free Industrial Zone Phase 4, 11900 Bayan Lepas, Penang, Malaysia
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>

                                                <br/>

                                                Global ETS, Florida, had been using the Tracking System since May 2022. <br/><br/>
                                                I travelled to the Malaysia location to deploy it, which involved establishing the server,
                                                installing dependencies and setting up the check-in stations, installing the client program
                                                for select people at that location, and writing up documents for maintaining the set-up after
                                                I departed.
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TimelineOppositeContent>
                            
                            <TimelineSeparator>
                            <TimelineDot>
                                <FlightIcon/>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            
                            <TimelineContent sx={{ fontFamily: StyleConfigs.page.fontFamily }}>
                                <div style={{ fontSize: StyleConfigs.page.headerFontSize }}> Tracking System Deployment </div>
                                <div style={{ fontSize: StyleConfigs.page.bodyFontSize }}>
                                    Global ETS <br/>
                                    Sep. 21, 2022 - Oct. 8, 2022
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Card
                                            variant="outlined"
                                            square
                                            sx={{
                                                backgroundColor: StyleConfigs.page.cardBg,
                                                color: StyleConfigs.page.color,
                                            }}
                                        >
                                            <CardContent sx={{
                                                fontFamily: StyleConfigs.page.fontFamily,
                                                textAlign: "left",
                                            }}>
                                                <MapContainer center={[38.98636, -76.95445]} zoom={15} scrollWheelZoom={false} className="leaflet-map">
                                                    <TileLayer
                                                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                                                    />
                                                    <Marker position={[38.98636, -76.95445]}>
                                                        <Popup>
                                                            College Park Marriott Hotel & Conference Center <br/><br/>
                                                            3501 University Blvd E, Hyattsville, MD 20783
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>

                                                <br/>

                                                Set up a booth with the automated electronic testing demonstration. <br/><br/>
                                                Global ETS presented their progress on FPGA testing at the symposium. <br/>
                                                I had a part in Global ETS's FPGA speed testing by writing up the VHDL files,
                                                implementing, and uploading the bitstream to standalone FPGA chips to perform
                                                the speed test.
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TimelineOppositeContent>
                            
                            <TimelineSeparator>
                            <TimelineDot>
                                <LightbulbIcon/>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            
                            <TimelineContent sx={{ fontFamily: StyleConfigs.page.fontFamily }}>
                                <div style={{ fontSize: StyleConfigs.page.headerFontSize }}> Symposium on Counterfeit Parts & Materials </div>
                                <div style={{ fontSize: StyleConfigs.page.bodyFontSize }}>
                                    Global ETS <br/>
                                    Jun. 28-30, 2022
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Card
                                            variant="outlined"
                                            square
                                            sx={{
                                                backgroundColor: StyleConfigs.page.cardBg,
                                                color: StyleConfigs.page.color,
                                            }}
                                        >
                                            <CardContent sx={{
                                                fontFamily: StyleConfigs.page.fontFamily,
                                                textAlign: "left",
                                            }}>
                                                The Florida location of Global ETS started using their Tracking System around May 2022. <br/>
                                                The deployment involved setting up a "check-in station" for each department which is where
                                                the departments will scan in the jobs they've received which is broadcasted to all the
                                                Tracking System clients. <br/>
                                                We needed to scan in hundreds of jobs that are already in circulation to initialize the
                                                Tracking System's database. <br/>
                                                We also installed the client program on nearly all the staff's computers. <br/><br/>
                                                I eventually made an updater in LabVIEW so each of the clients could request the latest
                                                version from the server.
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TimelineOppositeContent>
                            
                            <TimelineSeparator>
                            <TimelineDot>
                                <MonitorIcon/>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            
                            <TimelineContent sx={{ fontFamily: StyleConfigs.page.fontFamily }}>
                                <div style={{ fontSize: StyleConfigs.page.headerFontSize }}> Tracking System Deployment </div>
                                <div style={{ fontSize: StyleConfigs.page.bodyFontSize }}>
                                    Global ETS <br/>
                                    May 2022
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Card
                                            variant="outlined"
                                            square
                                            sx={{
                                                backgroundColor: StyleConfigs.page.cardBg,
                                                color: StyleConfigs.page.color,
                                            }}
                                        >
                                            <CardContent sx={{
                                                fontFamily: StyleConfigs.page.fontFamily,
                                                textAlign: "left",
                                            }}>
                                                <MapContainer center={[39.81755, -104.75092]} zoom={15} scrollWheelZoom={false} className="leaflet-map">
                                                    <TileLayer
                                                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                                                    />
                                                    <Marker position={[39.81755, -104.75092]}>
                                                        <Popup>
                                                            Gaylord Rockies Resort & Convention Center <br/><br/>
                                                            6700 N Gaylord Rockies Blvd, Aurora, CO 80019
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>

                                                <br/>

                                                Set up a booth with the automated electronic testing demonstration. <br/><br/>
                                                It was a large venue with over 100 exhibitors, including companies like Lockheed Martin
                                                and Boeing (exhibitor list <a href="http://www.dmcmeeting.com/pages/exhibit_2021.html" style={{ color: "#ffffff" }}>here</a>).

                                                <br/>

                                                {/* Image Source: https://apex-innovates.org/events/defense-manufacturing-conference-dmc-2021-0 */}
                                                <img
                                                    src={dmc_2021}
                                                    style={{ maxWidth: "100%", height: "auto" }}
                                                    alt="dmc_2021"
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TimelineOppositeContent>
                            
                            <TimelineSeparator>
                            <TimelineDot>
                                <LightbulbIcon/>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            
                            <TimelineContent sx={{ fontFamily: StyleConfigs.page.fontFamily }}>
                                <div style={{ fontSize: StyleConfigs.page.headerFontSize }}> Defense Manufacturing Conference (DMC) 2021 </div>
                                <div style={{ fontSize: StyleConfigs.page.bodyFontSize }}>
                                    Global ETS <br/>
                                    Dec. 13-16, 2021
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Card
                                            variant="outlined"
                                            square
                                            sx={{
                                                backgroundColor: StyleConfigs.page.cardBg,
                                                color: StyleConfigs.page.color,
                                            }}
                                        >
                                            <CardContent sx={{
                                                fontFamily: StyleConfigs.page.fontFamily,
                                                textAlign: "left",
                                            }}>
                                                <MapContainer center={[28.05871, -82.41386]} zoom={15} scrollWheelZoom={false} className="leaflet-map">
                                                    <TileLayer
                                                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                                                    />
                                                    <Marker position={[28.05871, -82.41386]}>
                                                        <Popup>
                                                            University of South Florida, Tampa <br/><br/>
                                                            4202 E Fowler Ave, Tampa, FL 33620
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>

                                                <br/>

                                                Studied for my Bachelor's in computer engineering. <br/>

                                                My Transcript
                                                <ThemeProvider theme={StyleConfigs.page.theme}>
                                                    <IconButton
                                                        color="secondary"
                                                        onClick={() => transcriptCollapse(!transcript_collapse)}
                                                    >
                                                        {transcript_collapse === false 
                                                            ?   <KeyboardArrowDownIcon/>
                                                            :   <RemoveIcon/>
                                                        }
                                                    </IconButton>
                                                </ThemeProvider>

                                                <Collapse in={transcript_collapse} timeout="auto">
                                                    <iframe src={transcript} width="97%" height="400px" title="transcript_jdm"/>
                                                </Collapse>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TimelineOppositeContent>
                            
                            <TimelineSeparator>
                            <TimelineDot>
                                <SchoolIcon/>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            
                            <TimelineContent sx={{ fontFamily: StyleConfigs.page.fontFamily }}>
                                <div style={{ fontSize: StyleConfigs.page.headerFontSize }}> University of South Florida </div>
                                <div style={{ fontSize: StyleConfigs.page.bodyFontSize }}>
                                    May 2014 - Aug. 2020
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TimelinePage;