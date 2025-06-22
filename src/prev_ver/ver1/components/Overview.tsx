import React, {
    useCallback,
    useEffect,
    useState,
    useMemo,
} from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    IconButton,
    Card,
    CardContent,
    Grid,
} from '@mui/material';

import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Person from '@mui/icons-material/Person';
import Work from '@mui/icons-material/Work';
import Files from '@mui/icons-material/FileCopy';
import ContPg from '@mui/icons-material/ContactPage';
import Task from '@mui/icons-material/Task';
import Descr from '@mui/icons-material/Description';
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/PhoneAndroid";

import Layout0 from '../layouts/Layout0';
import { MouseTooltip } from '../styled/styled';

import diploma from "../files/B.S. Diploma - Joseph Daniel Moreno.pdf";
import resume from "../files/2023-12-13 Resume.pdf";

import dobot from '../img/dobot_demo.mp4';
import sdram0 from "../img/sdram_proj_pic1.png";
import chip8_wipeoff from "../img/chip8_wipeoff.gif";
import dmc from "../img/dmc_2021_cropped0.png";
import fpga0 from "../img/fpga_final0.png";
import ts from "../img/django-react_ts.gif";

const Overview = () => {
    const nav = useNavigate();

    const email: string = 'joejetmoreno@gmail.com';
    const phone_num: string = '+17277419439'

    const dr_cont: any[] = useMemo(() => [{txt: "Summary", icon: <Person />, ref: React.createRef()}, {txt: "Experience", icon: <Work />, ref: React.createRef()}, {txt: "Resume & Degree", icon: <Files />, ref: React.createRef()}, {txt: "Contact", icon: <ContPg />, ref: React.createRef()}], []);

    const [pdf, setPdf] = useState<any>(diploma);

    useEffect(() => {
        hSectJump(0);
    }, []);

    const hSectJump = useCallback((sect_ind: number) => {
        (dr_cont[sect_ind]['ref'].current as unknown as HTMLDivElement)?.scrollIntoView({ behavior: "smooth", });
    }, [dr_cont]);

    const hPdf = useCallback((pdf: any) => {
        setPdf(pdf);
    }, []);

    return (
        <Layout0
            dr_cont={dr_cont}
            drFunc={hSectJump}
        >
            <Box height="100vh" ref={dr_cont[0]['ref']}>
                <Box position="relative" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)', }}>
                    <Box paddingBottom="16px">
                        <Typography variant="h3" fontWeight="bold">Joseph Daniel Moreno</Typography>
                        <Typography variant="h4" fontWeight="bold">Computer Engineer / Programmer</Typography>
                    </Box>

                    <Typography variant="h6" fontStyle="italic">Full-Stack - Django-React, MySQL, nginx</Typography>
                    <Typography variant="h6" fontStyle="italic">AWS EC2 Deployment</Typography>
                    <Typography variant="h6" fontStyle="italic">LabVIEW - Actor Framework and QMH</Typography>
                    <Typography variant="h6" fontStyle="italic">C++ and C</Typography>
                </Box>
            </Box>

            <Box height="100vh" ref={dr_cont[1]['ref']}>
                <Box position="relative" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)', }}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Card
                                variant="elevation"
                                elevation={24}
                            >
                                <CardContent sx={{
                                    textAlign: "left",
                                }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.216863810825!2d-82.63129214841226!3d28.197187313968683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2969f82120ea7%3A0xd6f38ed25b1186d!2sGlobal%20ETS%2C%20LLC!5e1!3m2!1sen!2sus!4v1731789617350!5m2!1sen!2sus"
                                        width='100%'
                                        height='300px'
                                        style={{ border: 0, }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={6} alignSelf="center">
                            <Typography variant="h4" textAlign="left" fontWeight="bold">Global ETS, LLC</Typography>
                            <Typography variant="h6" textAlign="left">Software Engineer II, Nov. 2020 - Present </Typography>

                            <Typography variant="h6" textAlign="left" fontWeight="bold" fontStyle="italic" paddingTop="8px">Skills Used</Typography>
                            <Typography variant="body1" textAlign="left" fontStyle="italic">Python, React (TypeScript), SQL (MySQL, SQLite), AWS (Linux EC2), nginx, LabVIEW, C++, C, VHDL, EasyEDA, FreeCAD</Typography>

                            <Typography variant="body1" textAlign="left" paddingTop="16px">● Automated electronic testing using LabVIEW (QMH and actor framework).</Typography>
                            <Typography variant="body1" textAlign="left">● Web app full-stack development; Django-React, deployed on AWS EC2 instance.</Typography>
                            <Typography variant="body1" textAlign="left">● Circuit design, sent out for PCB fabrication.</Typography>
                        </Grid>

                        <Grid item container spacing={1}>
                            <Grid item xs={4} sx={{ cursor: "pointer", }}>
                                <Box onClick={() => nav('/projects', {state: {param0: "test_auto"}})}>
                                    <MouseTooltip
                                        tt_body="Testing Automation"
                                        comp={
                                            // <video autoPlay muted loop style={{ maxWidth: "100%", borderRadius: "8px", }}>
                                            //     <source src="https://dms.licdn.com/playlist/C5605AQF95HBwkpadUQ/mp4-640p-30fp-crf28/0/1640636159328?e=2147483647&amp;v=beta&amp;t=3OURk7lcdES4tAmC0NYRHTQ8obCrFSPtQcZ0P9vX_IU" type="video/mp4"/>
                                            // </video>

                                            <video src={dobot} controls={false} autoPlay muted loop style={{ maxWidth: "100%", borderRadius: "4px", }} />
                                        }
                                    />
                                </Box>
                            </Grid>
                            
                            <Grid item xs={4} alignSelf="center" sx={{ cursor: "pointer", }}>
                                <Box onClick={() => nav('/projects', {state: {param0: "sdram"}})}>
                                    <MouseTooltip
                                        tt_body="SDRAM Testing"
                                        comp={
                                            <img src={sdram0} alt="sdram_proj_pic0" style={{ maxWidth: "100%", borderRadius: "8px", }}/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4} alignSelf="center" sx={{ cursor: "pointer", }}>
                                <Box onClick={() => nav('/projects', {state: {param0: "ts"}})}>
                                    <MouseTooltip
                                        tt_body="Web App - Tracking System"
                                        comp={
                                            <img src={ts} alt="ts_pic0" style={{ maxWidth: "100%", borderRadius: "8px", }}/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4} alignSelf="center" sx={{ cursor: "pointer", }}>
                                <Box onClick={() => nav('/timeline', {state: {param0: "dmc"}})}>
                                    <MouseTooltip
                                        tt_body={"Defense Manufacturing\nConference 2021"}
                                        comp={
                                            <img src={dmc} alt="dmc" style={{ maxWidth: "100%", borderRadius: "8px", }}/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4} sx={{ cursor: "pointer", }}>
                                <Box onClick={() => nav('/projects', {state: {param0: "c8"}})}>
                                    <MouseTooltip
                                        tt_body="Chip-8 Emulator"
                                        comp={
                                            <img src={chip8_wipeoff} alt="chip8_wipeoff" style={{ maxWidth: "100%", borderRadius: "8px", }}/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            {/* <Grid item xs={4} sx={{ cursor: "pointer", }}> */}
                            <Grid item xs={4}>
                                <MouseTooltip
                                    tt_body="FPGA Final"
                                    comp={
                                        <img src={fpga0} alt="fpga_final0" style={{ maxWidth: "100%", borderRadius: "8px", }}/>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box height="100vh" ref={dr_cont[2]['ref']}>
                <Box display="flex" position="relative" top="50%" left="50%" height="100%" width="100%" sx={{ transform: 'translate(-50%, -50%)', }}>
                    <Box alignSelf="center">
                        <MouseTooltip
                            tt_body="Diploma"
                            comp={
                                <IconButton onClick={() => hPdf(diploma)}>
                                    <Task />
                                </IconButton>
                            }
                        />

                        <Box paddingTop="16px">
                            <MouseTooltip
                                tt_body="Resume"
                                comp={
                                    <IconButton onClick={() => hPdf(resume)}>
                                        <Descr />
                                    </IconButton>
                                }
                            />
                        </Box>
                    </Box>

                    <Box height="100%" width="100%">
                        <iframe 
                            src={pdf}
                            height="90%"
                            width="95%"
                            title="ba_cpe_jdm"
                            style={{ 
                                transform: 'translate(-50%, -50%)',
                                position: "relative",
                                top: "50%",
                                left: "50%",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box height="100vh" ref={dr_cont[3]['ref']}>
                <Box position="relative" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)', }}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <MouseTooltip
                                tt_body="Copy to Clipboard"
                                comp={
                                    <IconButton onClick={() => navigator.clipboard.writeText(email)}>
                                        <Email />
                                    </IconButton>
                                }
                            />
                        </Box>

                        <Box alignSelf="center">
                            <Typography variant="h6" fontWeight="bold" paddingLeft="8px">{email}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box>
                            <MouseTooltip
                                tt_body="Copy to Clipboard"
                                comp={
                                    <IconButton onClick={() => navigator.clipboard.writeText(phone_num)}>
                                        <Phone />
                                    </IconButton>
                                }
                            />
                        </Box>

                        <Box alignSelf="center">
                            <Typography variant="h6" fontWeight="bold" paddingLeft="8px">(727) 741-9439</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box paddingBottom="256px" />

            <Box position="sticky" bottom="32px">
                <MouseTooltip
                    tt_body="To Top"
                    comp={
                        <IconButton onClick={() => window.scrollTo({ behavior: "smooth", top: 0, left: 0 })}>
                            <ArrowUp />
                        </IconButton>
                    }
                />
            </Box>
        </Layout0>
    );
};

export default Overview;