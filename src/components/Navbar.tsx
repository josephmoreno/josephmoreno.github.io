// import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import useNavbar from '../stores/NavbarStore';
import { Tooltip, UnstyledButton, Stack, Burger, Transition, rem } from '@mantine/core';

import {
    IconUser,
    IconBriefcase2,
    // IconBriefcase,
    IconFiles,
    // IconTimeline,
    IconMail,

    // IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react';

import classes from './css/Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconUser;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} zIndex={1029}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const navbar_data = [
  { icon: IconUser, label: 'Summary' },
  { icon: IconBriefcase2, label: 'Experience', },
  // { icon: IconBriefcase, label: 'Projects', },
  { icon: IconFiles, label: 'Resume & Degree', },
  // { icon: IconTimeline, label: 'Timeline', },
  { icon: IconMail, label: 'Contact', },
];

const translateX = {
    in: { transform: 'translateX(0px)'},
    out: { transform: `translateX(${rem('-80px')})`},
    transitionProperty: 'transform',
};

const Navbar = () => {
  // const [active, setActive] = useState(0);
  const [nav_open, { toggle: toggleNav }] = useDisclosure();
  const setNavInd = useNavbar((state: any) => state.setNavInd);
  const setOldVer = useNavbar((state: any) => state.setOldVer);

  const links = navbar_data.map((link, ind) => (
    <NavbarLink
      {...link}
      key={link.label}
      // active={ind === active}
      onClick={() => { 
        // setActive(ind);
        setNavInd(ind);
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
                <nav className={classes.navbar} style={{ ...transition_style, height: "100vh" }}>
                    <div className={classes.navbarMain}>
                        <Stack justify="center" gap={0}>
                          {links}
                        </Stack>
                    </div>

                    <Stack justify="center" gap={0}>
                        <NavbarLink icon={IconSwitchHorizontal} label="Old Version" onClick={() => { setOldVer(true); }} />
                        {/* <NavbarLink icon={IconLogout} label="Logout" /> */}
                    </Stack>
                </nav>
            )}
        </Transition>

        <div style={{ position: 'absolute', top: '8px', left: '90px', zIndex: 1030, transition: 'all 0.2s ease', transform: (nav_open ? 'translateX(0px)' : `translateX(${rem('-80px')})`) }}>
            <Burger opened={nav_open} onClick={toggleNav} size='sm' />
        </div>
    </>
  );
}

export default Navbar;