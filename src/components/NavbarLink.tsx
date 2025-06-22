import { Tooltip, UnstyledButton, rem } from '@mantine/core';

import {
    IconUser,
    IconBriefcase2,
    IconBriefcase,
    IconFiles,
    IconMail,
} from '@tabler/icons-react';

import classes from './css/Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconUser;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export const navbar_data = [
  { icon: IconUser, label: 'Summary' },
  { icon: IconBriefcase2, label: 'Experience', },
  { icon: IconBriefcase, label: 'Projects', },
  { icon: IconFiles, label: 'Resume & Degree', },
  // { icon: IconTimeline, label: 'Timeline', },
  { icon: IconMail, label: 'Contact', },
];

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} zIndex={1029}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

export default NavbarLink;