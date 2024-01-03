import {
    Typography,
    Tooltip,
} from '@mui/material';

import {
    TooltipProps,
    tooltipClasses,
} from '@mui/material/Tooltip';

import { styled } from '@mui/material/styles';

export const DrawerMain = (drawer_width: number) => styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: "0px",
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawer_width}px`,
    }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// MouseTooltip
type MouseTooltipProps = {
    tt_body: string,
    comp: React.ReactElement,
};

export const MouseTooltip = (props: MouseTooltipProps) => {
    const tt_body: string[] = (props.tt_body).split("\n");
    const comp: React.ReactElement = props.comp;

    const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#ffffff',
            color: '#000000',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));

    return (
        <StyledTooltip title={
            <>
                {tt_body.map((str: string) =>
                    <Typography color="inherit" variant="body1">{str}</Typography>
                )}
            </>
        } followCursor>
            {comp}
        </StyledTooltip>
    );
};

export default MouseTooltip;