import App2 from './prev_ver/ver2/App';
import App1 from './prev_ver/ver1/App';

import React, { useCallback, useState, useEffect } from 'react';

import {
  MantineProvider,
  createTheme,
  Flex,
  Title,
  Text,
  Box,
  Switch,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { IconDeviceMobile, IconMail, IconBrandGithub } from '@tabler/icons-react';

import Navbar from './components/Navbar';
import Navheader from './components/Navheader';
import useNavbar from './stores/NavbarStore';
import ExpCarousel from './components/ExpCarousel';
import ProjCarousel from './components/ProjCarousel';
import CardGbaEmu from './components/CardGbaEmu';
import CardChip8 from './components/CardChip8';
import CardTbGame0 from './components/CardTbGame0';
import CardDragDrop from './components/CardDragDropPic';
import CardSdram from './components/CardSdramTester';
import CardDobot from './components/CardDobot';
import CardCt from './components/CardCt';
import CardTs from './components/CardTs';

import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import diploma from './assets/files/B.S. Diploma - Joseph Daniel Moreno.pdf';
import resume from './assets/files/resume.pdf';

const App = () => {
  const app_ver: number = useNavbar((state: any) => state.app_ver);

  const getApp: (() => React.ReactElement) = useCallback(() => {
    switch(app_ver) {
      case 1:
        return(<App1 />);
      case 2:
        return(<App2 />);
      case 3:
        return(<App3 />);
      default:
        return(<App3 />);
    };
  }, [app_ver]);

  return (getApp());
};

export default App;

// -----

const theme = createTheme({
  headings: {
    sizes: {
      h2: { fontWeight: "500", },
      h3: { fontWeight: "700", },
      h4: { fontWeight: "400", },
      h5: { fontWeight: "400", }
    }
  }
});

const App3 = () => {
  const nav_ind: number = useNavbar((state: any) => state.nav_ind);
  const nav_trig: boolean = useNavbar((state: any) => state.nav_trig);

  const bp0 = useMediaQuery(`(max-width: calc(480px + 2rem))`);
  const bp1 = useMediaQuery(`(max-width: 600px)`);
  const bp2 = useMediaQuery(`(max-width: 1120px) or (max-height: 630px)`);
  const [pdf, setPdf] = useState<any>(diploma);

  const refs: React.RefObject<HTMLDivElement>[] = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];

  const hPdfSwitch = useCallback((checked: boolean) => {
    setPdf(checked ? resume : diploma);
  }, []);

  useEffect(() => {
    if (nav_ind >= 0)
      refs[nav_ind].current?.scrollIntoView({ behavior: "smooth", });
  }, [nav_trig]);

  return(
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {bp0 ? <Navheader /> : <Navbar />}

      <Flex className="summary" ref={refs[0]}>
        <Title order={1} style={{ animation: "1s ease-out 0s 1 appear-from-bottom0", }}>
          Joseph Daniel Moreno
        </Title>
        <Title order={2} style={{ animation: "1.5s ease-out 0s 1 appear-from-bottom1", }}>
          Computer Engineer / Programmer
        </Title>
        <Title order={5} style={{ animation: "2s ease-out 0s 1 appear-from-bottom2", }}>
          Django-React, MySQL, SDL <br/>
          C++, TypeScript, Python, VHDL <br/>
          LabVIEW: Actor Framework and QMH
        </Title>
      </Flex>

      <Box mih="100vh">
        <Box className="styled-box0" ref={refs[1]}>
          <Title className="sect-title" order={1} fw={600}>Experience</Title>
          <Flex direction="column" gap="sm">
            <Flex direction="row" gap="sm" align="center">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.216861337728!2d-82.629001524515!3d28.197187375905298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2969f82120ea7%3A0xd6f38ed25b1186d!2sGlobal%20ETS%2C%20LLC!5e1!3m2!1sen!2sus!4v1728767195720!5m2!1sen!2sus"
                  width={bp0 ? "100%" : "50%"}
                  style={{ height: "clamp(150px, 50vw, 320px)", border: 0, boxShadow: "-10px 10px 5px #000000" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />

              {bp0 ? <></> : <ExpCarousel />}
            </Flex>

            <Box>
              <Title order={3} style={{ textAlign: "left", }}>R&D Engineer / Software Developer</Title>
              <Title order={4} style={{ textAlign: "left", }}>Global ETS, LLC / Nov. 2020 - Apr. 2025</Title>
            </Box>

            <Box>
              <Title order={3} style={{ textAlign: "left", }}>Skills Used</Title>
              <Text fw={500} ta="left">Python, React, MySQL, SQLite, AWS (Linux EC2), nginx, LabVIEW, C++, C, VHDL, EasyEDA, FreeCAD</Text>
            </Box>

            <Box>
              <Text ta="left">
                ● Automated electronic testing using LabVIEW (QMH and actor framework) and VHDL <br/>
                ● JTAG / boundary-scan testing bare FPGA chips. <br />
                ● Web app full-stack development; Django-React, deployed on AWS EC2 instance.
              </Text>
            </Box>

            {bp0 ? <ExpCarousel /> : <></>}
          </Flex>
        </Box>
      </Box>

      <Box mih="100vh">
        <Box className="styled-box1" ref={refs[2]}>
          <Title className="sect-title" order={1} fw={600}>Projects</Title>

          {bp1
            ? <ProjCarousel disabled={bp2} /> 
            : <Flex wrap="wrap" gap="sm" justify="center">
                <CardGbaEmu />
                <CardChip8 disabled={bp2} />
                <CardTbGame0 disabled={bp2} />
                <CardDragDrop />
                <CardSdram />
                <CardDobot />
                <CardCt />
                <CardTs />
              </Flex> 
          }
        </Box>
      </Box>

      <Box mih="100vh">
        <Box className="styled-box0" ref={refs[3]}>
          <Title className="sect-title" order={1} fw={600}>Degree & Resume</Title>
          
          <Switch
              size='lg'
              color='dark.4'
              onLabel='Resume'
              offLabel='Degree'
              pb="8px"
              onChange={(e) => { hPdfSwitch(e.currentTarget.checked); }}
          />

          <iframe 
              src={pdf}
              title="Degree and Resume"
              style={{ border: "0px", width: "clamp(300px, 90vw, 960px)", height: "clamp(300px, calc(300px + 40vw), 960px)", }}
          />
        </Box>
      </Box>

      <Box mih="100vh">
        <Box className="styled-box1" ref={refs[4]} style={{ scrollMarginTop: "50vh", }}>
          <a href="tel:+17277419439" style={{ display: "flex", alignItems: "center", textDecoration: "none", }}>
            <IconDeviceMobile size='50' style={{ paddingRight: '8px', }} /> <Text size="1.3rem" fw={700}>{'(727) 741-9439'}</Text>
          </a>
            
          <a href="mailto:joejetmoreno@gmail.com" style={{ display: "flex", alignItems: "center", textDecoration: "none", }}>
            <IconMail size='50' style={{ paddingRight: '8px', }} /> <Text size="1.3rem" fw={700}>joejetmoreno@gmail.com</Text>
          </a>

          <a href="https://github.com/josephmoreno" style={{ display: "flex", alignItems: "center", textDecoration: "none", }}>
            <IconBrandGithub size='50' style={{ paddingRight: '8px', }} /> <Text size="1.3rem" fw={700}>My GitHub</Text>
          </a>
        </Box>
      </Box>
    </MantineProvider>
  );
};