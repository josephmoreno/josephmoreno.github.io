import { useDisclosure } from '@mantine/hooks';
import { Stack, Burger, Transition, Select, rem } from '@mantine/core';
import useNavbar from '../stores/NavbarStore';
import NavbarLink, { navbar_data } from './NavbarLink';

import { IconSwitchHorizontal, } from '@tabler/icons-react';

import classes from './css/Navbar.module.css';

const translateX = {
    in: { transform: 'translateX(0px)'},
    out: { transform: `translateX(${rem('-80px')})`},
    transitionProperty: 'transform',
};

const Navbar = () => {
  const [nav_open, { toggle: toggleNav }] = useDisclosure();
  const nav_trig: boolean = useNavbar((state: any) => state.nav_trig);
  const app_ver: number = useNavbar((state: any) => state.app_ver);
  const setNavInd = useNavbar((state: any) => state.setNavInd);
  const setNavTrig = useNavbar((state: any) => state.navTrig);
  const setAppVer = useNavbar((state: any) => state.setAppVer);

  const links = navbar_data.map((link, ind) => (
    <NavbarLink
      {...link}
      key={link.label}
      // active={ind === active}
      onClick={() => { 
        // setActive(ind);
        setNavInd(ind);
        setNavTrig(!nav_trig);
      }}
    />
  ));

  return (
    <>
        <Transition
            mounted={nav_open}
            transition={translateX}
            duration={200}
            timingFunction='ease'
            keepMounted
        >
            {(transition_style) => (
                <nav className={classes.navbar} style={{ ...transition_style, }}>
                    <div className={classes.navbarMain}>
                        <Stack justify="center" gap={0}>
                          {links}
                        </Stack>
                    </div>

                    <Stack justify="center" gap={0}>
                        {/* <NavbarLink icon={IconSwitchHorizontal} label="Old Version" onClick={() => { setAppVer(1); }} /> */}

                        <Select
                          label="App Ver."
                          data={["1", "2", "3"]}
                          defaultValue={"" + app_ver}
                          allowDeselect={false}
                          withScrollArea={false}
                          rightSectionWidth={0}
                          comboboxProps={{
                            position: "top",
                            middlewares: { flip: false, shift: true, }
                          }}
                          onChange={(ver: string | null) => { if (ver !== null) setAppVer(+ver); }}
                        />
                    </Stack>
                </nav>
            )}
        </Transition>

        <Burger opened={nav_open} onClick={toggleNav} size='sm' pos="fixed" top="8px" left={rem('88px')} style={{ zIndex: 101, transition: 'all 0.2s ease', transform: (nav_open ? 'translateX(0px)' : `translateX(${rem('-80px')})`), }} />
    </>
  );
}

export default Navbar;