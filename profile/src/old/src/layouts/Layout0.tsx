import {
    useState,
    useCallback,
} from 'react';

import {
    Box,
    Grid,
    IconButton,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

import navCards from '../def/NavCards';

import {
    DrawerMain,
    DrawerHeader,
} from '../styled/styled';

type Layout0Props = {
    dr_cont?: string[],
    children: React.ReactNode,
    drFunc?: (ind: number) => void,
};

const Layout0 = (props: Layout0Props) => {
    const drawer_width: number = 240;
    const Main = DrawerMain(drawer_width);

    const dr_cont: string[] | undefined = props.dr_cont;
    const ch: React.ReactNode = props.children;

    const [open_dr, setOpenDr] = useState<boolean>(dr_cont !== undefined ? true : false);

    const hDrFunc = useCallback((ind: number) => {
        if (props.drFunc !== undefined)
            props.drFunc(ind);
    }, [props]);

    const nav_cards: React.ReactNode[] = navCards();

    return (
        <>
            <Drawer
                sx={{
                    width: drawer_width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawer_width,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open_dr}
            >
                <DrawerHeader>
                    <IconButton onClick={() => setOpenDr(false)}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                
                <Divider />

                <List>
                    {dr_cont !== undefined && dr_cont.map((li_obj: any, ind: number) => (
                        <ListItem
                            key={li_obj['txt']}
                            disablePadding
                            onContextMenu={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <ListItemButton
                                // selected={select_ind === ind && select_ni === null}
                                onClick={() => hDrFunc(ind)}
                            >
                                <ListItemIcon>
                                    {li_obj['icon']}
                                </ListItemIcon>

                                <ListItemText primary={li_obj['txt']} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Main open={open_dr}>
                <Box padding="32px">
                    <Grid
                        container
                        justifyContent={dr_cont !== undefined ? "space-between" : "right"}
                        spacing={4}
                    >
                        {dr_cont !== undefined &&
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => setOpenDr(true)}
                                    edge="start"
                                    sx={{ mr: 2, ...(open_dr && { display: "none" }), }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        }

                        <Grid item display="flex">
                            {nav_cards.map((card: React.ReactNode) =>
                                card
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box paddingLeft="32px" paddingRight="32px" paddingBottom="32px" paddingTop="8px">
                    {ch}
                </Box>
            </Main>
        </>
    );
};

export default Layout0;