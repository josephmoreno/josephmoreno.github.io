import { useRef, useEffect, useState, useCallback } from 'react';
import useNavbar from '../stores/NavbarStore';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Text, Switch, Box, } from '@mantine/core';
import { IconDeviceMobile, IconMail, } from '@tabler/icons-react';
import Experience from '../components/Experience';
import dobot from '../assets/img/dobot_demo.mp4';
import dr_ts from '../assets/img/django-react_ts.gif';
import sdram from '../assets/img/sdram_proj_pic1.png';
import diploma from '../assets/files/B.S. Diploma - Joseph Daniel Moreno.pdf';
import resume from '../assets/files/2025-05-15 resume.pdf';
// import bg from '../assets/img/bg2.png';
import line from '../assets/img/bg_line0.png';
import CardChip8 from '../components/CardChip8';
import CardTbGame0 from '../components/CardTbGame0';
import CardDragDropPic from '../components/CardDragDropPic';

// const url = (name: string, wrap: boolean = false) =>
//     `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Overview = () => {
    const pg_count: number = 5;

    const parallax = useRef<IParallax>(null!);
    const nav_ind: number = useNavbar((state: any) => state.nav_ind);
    const [pdf, setPdf] = useState<any>(diploma);

    useEffect(() => {
        parallax.current.scrollTo(nav_ind);
    }, [nav_ind]);

    const hPdfSwitch = useCallback((checked: boolean) => {
        setPdf(checked ? resume : diploma);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', background: '#253237', }}>
            <Parallax ref={parallax} pages={pg_count}>

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={pg_count}
                    style={{
                        // backgroundImage: url('stars', true),
                        // backgroundImage: `url(${bg})`,
                        // backgroundSize: 'contain',
                        // backgroundRepeat: 'repeat',

                        backgroundColor: '#111111',
                    }}
                />

                <ParallaxLayer offset={0.8} speed={0.8} style={{ opacity: 1, }}>
                    <img src={line} style={{ display: 'block', width: '100%', marginLeft: '-50%', }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={0.8} style={{ opacity: 1, }}>
                    <img src={line} style={{ display: 'block', width: '100%', marginLeft: '50%', }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.8} speed={0.8} style={{ opacity: 1, }}>
                    <img src={line} style={{ display: 'block', width: '100%', marginLeft: '-50%', }} />
                </ParallaxLayer>

                <ParallaxLayer offset={3.8} speed={0.8} style={{ opacity: 1, }}>
                    <img src={line} style={{ display: 'block', width: '100%', marginLeft: '50%', }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.05}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text size='38px' fw={700}>Joseph Daniel Moreno</Text>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.05}
                    speed={0.03}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text size='28px' fw={700}>Computer Engineer / Programmer</Text>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.12}
                    speed={0.01}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text size='18px' fw={640} style={{ lineHeight: 1.4, }}>
                        {'Django-React, MySQL, nginx'} <br />
                        {'LabVIEW: Actor Framework, QMH'} <br />
                        {'Python, TypeScript, C++, VHDL'}
                    </Text>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1}>
                    <Experience />
                </ParallaxLayer>

                <ParallaxLayer offset={1.1} speed={0.7} style={{ pointerEvents: 'none', }}>
                    <video src={dobot} controls={false} autoPlay muted loop style={{ width: '480px', marginLeft: '70%', borderRadius: '16px', }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.4} speed={0.5} style={{ pointerEvents: 'none', }}>
                    <img src={dr_ts} style={{ width: '480px', marginLeft: '40%', borderRadius: '16px', }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.7} speed={0.3} style={{ pointerEvents: 'none', }}>
                    <img src={sdram} style={{ width: '480px', marginLeft: '70%', borderRadius: '16px', }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.05}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CardChip8 />
                    <CardTbGame0 marLeftPer={2} />
                    <CardDragDropPic marLeftPer={2} />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.05}>
                    <Switch
                        pos='absolute'
                        top='15px'
                        left='50%'
                        size='lg'
                        color='dark.4'
                        onLabel='Resume'
                        offLabel='Degree'
                        onChange={(e) => { hPdfSwitch(e.currentTarget.checked); }}
                    />

                    <iframe 
                        src={pdf}
                        height="90%"
                        width="90%"
                        title="ba_cpe_jdm"
                        style={{
                            transform: 'translate(-50%, -50%)',
                            position: "relative",
                            top: "50%",
                            left: "45%",
                            border: "0px",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={0.05}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box>    
                        <Box display='flex' style={{ alignItems: 'center', }}>
                            <IconDeviceMobile size='50' style={{ paddingRight: '8px', }} /> <Text size='24px' fw={700}>{'(727) 741-9439'}</Text>
                        </Box>

                        <Box display='flex' style={{ alignItems: 'center', }}>
                            <IconMail size='50' style={{ paddingRight: '8px', }} /> <Text size='24px' fw={700}>joejetmoreno@gmail.com</Text>
                        </Box>
                    </Box>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Overview;