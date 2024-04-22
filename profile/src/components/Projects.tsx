import {
    useRef,
    useCallback,
    useEffect,
    useMemo,
} from 'react';

import {
    Grid,
    Typography,
    Card,
    CardContent,
    Box,

    CardActionArea,
} from '@mui/material';

import { useLocation } from 'react-router-dom';

import Layout0 from '../layouts/Layout0';

import ts from '../img/django-react ts.mp4';
import dobot from '../img/dobot_demo.mp4';
import c8_brix from "../img/chip8_brix_cropped0.gif";
import c8_pong from "../img/chip8_pong_cropped0.gif";
import c8_hidden from "../img/chip8_hidden_cropped0.gif";
import c8_wipeoff from "../img/chip8_wipeoff_cropped0.gif";
import lv_ts from "../img/tracking_system.png";

import sdram0 from "../files/SDRAM Project Doc, Ver. 2.pdf";

const Projects = () => {
    const loc0 = useLocation();
    const loc0_state = loc0.state;

    const ref0 = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const sections: any[] = useMemo(() => [
        {name: "test_auto", ref: ref0},
        {name: "sdram", ref: ref1},
        {name: "ts", ref: ref2},
        {name: "c8", ref: ref3},
    ], []);

    const hSectJump = useCallback((name: string) => {
        const filt0: any[] = sections.filter((sect) => sect['name'] === name);

        if (filt0.length === 1) {
            console.log(filt0);

            (filt0[0]['ref'].current as unknown as HTMLDivElement)?.scrollIntoView({ behavior: "smooth", });
        };
    }, [sections]);

    useEffect(() => {
        if ((loc0_state !== null) && (loc0_state['param0'] !== undefined))
            hSectJump(loc0_state['param0']);
    }, [
        loc0_state,
        hSectJump,
    ]);

    return (
        <Layout0>
            <Grid container spacing={4} zIndex={30}>
                <Grid item xs={6} ref={ref2} zIndex="inherit">
                    <Card
                        variant="elevation"
                        elevation={24}
                    >
                        <CardContent sx={{
                            textAlign: "left",
                        }}>
                            <video src={ts} controls autoPlay muted loop style={{ maxWidth: "100%", borderRadius: "4px", }} />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6} alignSelf="center" zIndex="inherit">
                    <Typography variant="h4" textAlign="left" fontWeight="bold">Tracking System, Web App Version</Typography>
                    <Typography variant="h6" textAlign="left">Jan. 2023 - Present </Typography>

                    <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                    <Typography variant="body1" textAlign="left" fontStyle="italic">Python, React (TypeScript), SQL (MySQL), AWS (Linux EC2), nginx</Typography>

                    <Typography variant="body1" textAlign="left" paddingTop="16px">● Django Channels (websockets), real-time data broadcasting</Typography>
                    <Typography variant="body1" textAlign="left">● API calls from external applications, token authentication</Typography>
                    <Typography variant="body1" textAlign="left">● External / pre-existing database connection</Typography>
                </Grid>

                {/* === */}

                <Grid item xs={6} alignSelf="center" justifyItems="right" zIndex="inherit">
                    <Typography variant="h4" textAlign="left" fontWeight="bold">Tracking System, LabVIEW Version</Typography>
                    <Typography variant="h6" textAlign="left">Jan. 2022 - Present </Typography>

                    <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                    <Typography variant="body1" textAlign="left" fontStyle="italic">LabVIEW (Actor Framework), Python, C, SQL (SQLite)</Typography>

                    <Typography variant="body1" textAlign="left" paddingTop="16px">● AWS EC2 middleware</Typography>
                    <Typography variant="body1" textAlign="left">● Iterative server-client program development</Typography>
                    <Typography variant="body1" textAlign="left">● Closure tables, tree data representation</Typography>
                </Grid>

                <Grid item xs={6} zIndex="inherit">
                    <Card
                        variant="elevation"
                        elevation={24}
                    >
                        <CardContent sx={{
                            textAlign: "center",
                        }}>
                            <img src={lv_ts} alt="lv_ts" style={{ maxWidth: "100%", }}/>
                        </CardContent>
                    </Card>
                </Grid>

                {/* === */}

                <Grid item xs={6} ref={ref0} zIndex="inherit">
                    <Card
                        variant="elevation"
                        elevation={24}
                    >
                        <CardContent sx={{
                            textAlign: "center",
                        }}>
                            {/* <video src="https://dms.licdn.com/playlist/C5605AQF95HBwkpadUQ/mp4-640p-30fp-crf28/0/1640636159328?e=2147483647&amp;v=beta&amp;t=3OURk7lcdES4tAmC0NYRHTQ8obCrFSPtQcZ0P9vX_IU" autoPlay muted loop style={{ maxWidth: "100%", borderRadius: "8px", }} /> */}
                            <video src={dobot} controls={false} autoPlay muted loop style={{ maxWidth: "100%", borderRadius: "4px", }} />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6} alignSelf="center" zIndex="inherit">
                    <Typography variant="h4" textAlign="left" fontWeight="bold">Electronic Testing Automation</Typography>
                    <Typography variant="h6" textAlign="left">May 2021 - Dec. 2021 </Typography>

                    <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                    <Typography variant="body1" textAlign="left" fontStyle="italic">LabVIEW (Actor Framework, QMH), C#, FreeCAD</Typography>

                    <Typography variant="body1" textAlign="left" paddingTop="16px">● Sequencing control of measurement and visual devices</Typography>
                    <Typography variant="body1" textAlign="left">● Machine learning</Typography>
                    <Typography variant="body1" textAlign="left">● Dobot DLL for LabVIEW</Typography>
                </Grid>

                {/* === */}

                <Grid item xs={6} alignSelf="center" justifyItems="right" ref={ref1} zIndex="inherit">
                    <Typography variant="h4" textAlign="left" fontWeight="bold">SDRAM Testing</Typography>
                    <Typography variant="h6" textAlign="left">Apr. 2021 - Oct. 2021 </Typography>

                    <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                    <Typography variant="body1" textAlign="left" fontStyle="italic">VHDL, Xilinx Vivado, LabVIEW (QMH)</Typography>

                    <Typography variant="body1" textAlign="left" paddingTop="16px">● State machine-based controller</Typography>
                    <Typography variant="body1" textAlign="left">● Upper-level LabVIEW program, signals controller and logs pass/fails</Typography>
                </Grid>

                <Grid item xs={6} zIndex="inherit">
                    <Card
                        variant="elevation"
                        elevation={24}
                    >
                        <CardContent sx={{
                            textAlign: "center",
                        }}>
                            <iframe 
                                src={sdram0}
                                height="640px"
                                width="100%"
                                title="sdram_doc"
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* === */}

                <Grid item xs={6} ref={ref3} zIndex="inherit">
                    <Card
                        variant="elevation"
                        elevation={24}
                    >
                        <CardContent sx={{
                            textAlign: "center",
                        }}>
                            <img src={c8_brix} alt="chip8_brix" style={{ maxWidth: "100%", borderTopLeftRadius: "4px", }}/>
                            <img src={c8_pong} alt="chip8_pong" style={{ maxWidth: "100%", borderTopRightRadius: "4px", }}/>
                            <img src={c8_hidden} alt="chip8_hidden" style={{ maxWidth: "100%", borderBottomLeftRadius: "4px", }}/>
                            <img src={c8_wipeoff} alt="chip8_wipeoff" style={{ maxWidth: "100%", borderBottomRightRadius: "4px", }}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6} alignSelf="center" zIndex="inherit">
                    <Typography variant="h4" textAlign="left" fontWeight="bold">Chip8 Emulator</Typography>
                    <Typography variant="h6" textAlign="left">May 2020 - Jun. 2020 </Typography>

                    <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                    <Typography variant="body1" textAlign="left" fontStyle="italic">C++</Typography>

                    <Typography variant="body1" textAlign="left" paddingTop="16px">● SDL library to handle keystroke input and audio-visual output</Typography>
                    <Typography variant="body1" textAlign="left">● Basic video game emulator with small instruction set (35 opcodes)</Typography>
                </Grid>
            </Grid>

            <Box paddingBottom="200px" />
        </Layout0>
    );
};

export default Projects;