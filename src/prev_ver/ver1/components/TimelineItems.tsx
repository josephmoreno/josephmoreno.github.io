import {
    Grid,
    Card,
    CardContent,
    Typography,
} from '@mui/material';

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
import { useRef } from 'react';

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
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4821.764367084832!2d100.43694614882155!3d5.215572081297973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ab10073b2cc89%3A0x7b604ba5babfe492!2sGlobal%20ETS%20(Malaysia)%20Sdn%20Bhd!5e1!3m2!1sen!2sus!4v1731788734087!5m2!1sen!2sus"
                                                width='100%'
                                                height='300px'
                                                style={{ border: 0, }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />

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
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.518973809117!2d-76.95703028786839!3d38.98635997158727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c68e463b290f%3A0xeb3f5603930ad3af!2s3501%20University%20Blvd%20E%2C%20Hyattsville%2C%20MD%2020783!5e1!3m2!1sen!2sus!4v1731789070988!5m2!1sen!2sus"
                                                width='100%'
                                                height='300px'
                                                style={{ border: 0, }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />

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
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.6190008185538!2d-104.75200487904047!3d39.817554747326525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c66789a1b53f3%3A0x73dc34741696a198!2s6700%20N%20Gaylord%20Rockies%20Blvd%2C%20Aurora%2C%20CO%2080019!5e1!3m2!1sen!2sus!4v1731789210037!5m2!1sen!2sus"
                                                width='100%'
                                                height='300px'
                                                style={{ border: 0, }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />

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
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.369027141949!2d-82.41512868807722!3d28.058601095741206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7b964528a09%3A0xf3875031bad2a0eb!2sDepartment%20of%20Computer%20Science%20and%20Engineering!5e1!3m2!1sen!2sus!4v1731789299054!5m2!1sen!2sus"
                                                width='100%'
                                                height='300px'
                                                style={{ border: 0, }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />

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