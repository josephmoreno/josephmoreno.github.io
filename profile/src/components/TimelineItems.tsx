import {
    Grid,
    Card,
    CardContent,
    Typography,
} from '@mui/material';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FlightIcon from "@mui/icons-material/Flight";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MonitorIcon from "@mui/icons-material/Monitor";
import SchoolIcon from "@mui/icons-material/School";

import old_ts from '../img/tracking_system.png';
import dmc_2021 from '../img/dmc_2021.png';
import React, { useRef } from 'react';

const TlObjs = () => {
    const ref0 = useRef(null);

    return (
        [
            {
                name: "mys_ts",
                ref: null,
                elem: (
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} paddingBottom="16px">
                                    <Card
                                        variant="elevation"
                                        elevation={24}
                                    >
                                        <CardContent sx={{
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

                                            <Typography variant="body1">
                                                Global ETS, Florida, had been using the Tracking System since May 2022. <br/><br/>
                                                I travelled to the Malaysia location to deploy it, which involved establishing the server,
                                                setting up check-in stations, installing the client program for select people at that
                                                location, and writing up documents for maintaining the set-up after my departure.
                                            </Typography>
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
                        
                        <TimelineContent>
                            <Typography variant="h5">
                                Tracking System Deployment
                            </Typography>
                            <Typography variant="body1">
                                Global ETS <br/>
                                Sep. 21, 2022 - Oct. 8, 2022
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            },

            {
                name: "md_sympo",
                ref: null,
                elem: (
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} paddingBottom="16px">
                                    <Card
                                        variant="elevation"
                                        elevation={24}
                                    >
                                        <CardContent sx={{
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

                                            <Typography variant="body1">
                                                Set up a booth with the automated electronic testing demonstration. <br/><br/>
                                                Global ETS presented their progress on FPGA testing at the symposium. <br/>
                                                I had a part in Global ETS's FPGA speed testing by writing up the VHDL files,
                                                implementing, and uploading the bitstream to standalone FPGA chips to perform
                                                the speed test.
                                            </Typography>
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

                        <TimelineContent>
                            <Typography variant="h5">
                                Symposium on Counterfeit Parts & Materials
                            </Typography>
                            <Typography variant="body1">
                                Global ETS <br/>
                                Jun. 28-30, 2022
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            },

            {
                name: "lv_ts",
                ref: null,
                elem: (
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} paddingBottom="16px">
                                    <Card
                                        variant="elevation"
                                        elevation={24}
                                    >
                                        <CardContent sx={{
                                            textAlign: "left",
                                        }}>
                                            <Typography variant="body1">
                                                The Florida location of Global ETS started using their Tracking System around May 2022. <br/>
                                                The deployment involved setting up a "check-in station" for each department which is where
                                                the departments scan in the jobs they've received and broadcasts it to all the
                                                other connections. <br/>
                                                We needed to scan in hundreds of jobs that are already in circulation to initialize the
                                                Tracking System's database. <br/>
                                                We also installed the client program on all the staff's computers. <br/><br/>
                                                I eventually made an updater in LabVIEW so each of the clients could request the latest
                                                version from the server.
                                            </Typography>

                                            <br />

                                            <img src={old_ts} alt="old_ts" style={{ maxWidth: "100%", }}/>
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

                        <TimelineContent>
                            <Typography variant="h5">
                                Tracking System Deployment
                            </Typography>
                            <Typography variant="body1">
                                Global ETS <br/>
                                May 2022
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            },

            {
                name: "dmc",
                ref: ref0,
                elem: (
                    <TimelineItem ref={ref0}>
                        <TimelineOppositeContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} paddingBottom="16px">
                                    <Card
                                        variant="elevation"
                                        elevation={24}
                                    >
                                        <CardContent sx={{
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

                                            <Typography variant="body1">
                                                Set up a booth with the automated electronic testing demonstration. <br/><br/>
                                                It was a large venue with over 100 exhibitors, including Lockheed Martin
                                                and Boeing (exhibitor list <a href="http://www.dmcmeeting.com/pages/exhibit_2021.html" style={{ color: "#000000" }}>here</a>).
                                            </Typography>

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

                        <TimelineContent>
                            <Typography variant="h5">
                                Defense Manufacturing Conference (DMC) 2021
                            </Typography>
                            <Typography variant="body1">
                                Global ETS <br/>
                                Dec. 13-16, 2021
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            },

            {
                name: "usf",
                ref: null,
                elem: (
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} paddingBottom="16px">
                                    <Card
                                        variant="elevation"
                                        elevation={24}
                                    >
                                        <CardContent sx={{
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

                                            <Typography variant="body1">
                                                Studied for my Bachelor's in computer engineering. <br/>
                                            </Typography>
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

                        <TimelineContent>
                            <Typography variant="h5">
                                University of South Florida
                            </Typography>
                            <Typography variant="body1">
                                May 2014 - Aug. 2020
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            },
        ]
    );
}

export default TlObjs;