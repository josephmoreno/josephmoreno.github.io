import { Transition, Burger, Group, Box, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useNavbar from '../stores/NavbarStore';
import NavbarLink, { navbar_data } from './NavbarLink';

import classes from './css/Navheader.module.css';

const translateY = {
    in: { transform: 'translateY(0px)'},
    out: { transform: `translateY(${rem('-80px')})`},
    transitionProperty: 'transform',
};

const Navheader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const nav_trig: boolean = useNavbar((state: any) => state.nav_trig);
  const setNavInd = useNavbar((state: any) => state.setNavInd);
  const navTrig = useNavbar((state: any) => state.navTrig);

  const links = navbar_data.map((link, ind) => (
    <NavbarLink
      {...link}
      key={link.label}
      // active={ind === active}
      onClick={() => { 
        // setActive(ind);
        setNavInd(ind);
        navTrig(!nav_trig);
      }}
    />
  ));

  return (
    <>
        <Box className={classes.container}/>

        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <Transition
            mounted={opened}
            transition={translateY}
            duration={200}
            timingFunction='ease'
            keepMounted
        >
            {(transition_style) => (
                <Group style={{ ...transition_style, position: "fixed", right: "0px", top: "2px", zIndex: 100, }}>
                    <Group gap={0}>
                        {links}
                    </Group>
                </Group>
            )}
        </Transition>
    </>
  );
};

export default Navheader;