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
    // Collapse,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

import navCards from '../def/NavCards';

import {
    DrawerMain,
    DrawerHeader,
    // MouseTooltip,
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
            {/* <Drawer
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
                    {dr_data !== undefined && select_key !== undefined &&
                        <ListItem>
                            <Grid container justifyContent="space-between">
                                <Grid item alignSelf="center">
                                    <ListItemText primary={dr_data[select_key]['hdr']} primaryTypographyProps={{ fontWeight: "bold" }} />
                                </Grid>

                                {dr_arr.length > 1 &&
                                    <Grid item>
                                        <MouseTooltip
                                            tt_body={(dr_arr[(dr_arr.map(([key, obj]) => key).indexOf(select_key) + 1) % dr_arr.length][1] as any)['hdr']}
                                            comp={
                                                <IconButton onClick={() => hSelection(dr_arr[(dr_arr.map(([key, obj]) => key).indexOf(select_key) + 1) % dr_arr.length][0], 0, null)}>
                                                    <ChevronRight />
                                                </IconButton>
                                            }
                                        />
                                    </Grid>
                                }
                            </Grid>
                        </ListItem>
                    }

                    {dr_data !== undefined && select_key !== undefined && (dr_data[select_key]['data'] as any[]).length > 0 &&
                        (dr_data[select_key]['data'] as any[]).map((dr_obj, ind) => (
                            <>
                                <ListItem
                                    key={dr_obj['name']}
                                    disablePadding
                                    onContextMenu={(e) => {
                                        e.preventDefault();

                                        if (props.cxtMenOpen !== undefined)
                                            props.cxtMenOpen(e, [select_key, ind, null]);
                                    }}
                                >
                                    <ListItemButton
                                        selected={select_ind === ind && select_ni === null}
                                        onClick={() => hSelection(select_key, ind, null)}
                                    >
                                        {"li_icon" in dr_obj &&
                                            <ListItemIcon>
                                                {dr_obj["li_icon"]}
                                            </ListItemIcon>
                                        }

                                        <ListItemText primary={dr_obj['name']} />
                                    </ListItemButton>

                                    {dr_data[select_key]['nested_name'] !== null && (dr_obj[dr_data[select_key]['nested_name']] as any[]).length > 0 &&
                                        <IconButton onClick={() => hNestExp(dr_obj['name'])} sx={{ borderRadius: 0, }}>
                                            {select_key in dr_exp && (dr_exp[select_key] as string[]).includes(dr_obj['name'])
                                                ?   <ArrowUp />
                                                :   <ArrowDown />
                                            }
                                        </IconButton>
                                    }
                                </ListItem>

                                {select_key in dr_exp && select_ni !== undefined && dr_data[select_key]['nested_name'] !== null && (dr_obj[dr_data[select_key]['nested_name']] as any[]).length > 0 &&
                                    <Collapse in={(dr_exp[select_key] as string[]).includes(dr_obj['name'])} timeout="auto" unmountOnExit>
                                        <List component="div">
                                            {(dr_obj[dr_data[select_key]['nested_name']] as any[]).map((nested_obj: any, nested_ind) => (
                                                <ListItem
                                                    key={dr_obj['name'] + "." + nested_obj['name']}
                                                    onContextMenu={(e) => {
                                                        e.preventDefault();

                                                        if (props.cxtMenOpen !== undefined)
                                                            props.cxtMenOpen(e, [select_key, ind, nested_ind]);
                                                    }}
                                                    disablePadding
                                                >
                                                    <ListItemButton
                                                        selected={select_ind === ind && select_ni === nested_ind}
                                                        onClick={() => hSelection(select_key, ind, nested_ind)}
                                                        sx={{ pl: 4, }}
                                                    >
                                                        {"li_icon" in nested_obj &&
                                                            <ListItemIcon>
                                                                {nested_obj["li_icon"]}
                                                            </ListItemIcon>
                                                        }

                                                        <ListItemText primary={nested_obj['name']} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                }
                            </>
                        ))
                    }
                </List>
            </Drawer> */}

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
                    {/* <ListItem>
                        <Grid container justifyContent="space-between">
                            <Grid item alignSelf="center">
                                <ListItemText primary="Hello" primaryTypographyProps={{ fontWeight: "bold" }} />
                            </Grid>

                            {dr_arr.length > 1 &&
                                <Grid item>
                                    <MouseTooltip
                                        tt_body={(dr_arr[(dr_arr.map(([key, obj]) => key).indexOf(select_key) + 1) % dr_arr.length][1] as any)['hdr']}
                                        comp={
                                            <IconButton onClick={() => hSelection(dr_arr[(dr_arr.map(([key, obj]) => key).indexOf(select_key) + 1) % dr_arr.length][0], 0, null)}>
                                                <ChevronRight />
                                            </IconButton>
                                        }
                                    />
                                </Grid>
                            }
                        </Grid>
                    </ListItem> */}
   
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

                            {/* {dr_data[select_key]['nested_name'] !== null && (dr_obj[dr_data[select_key]['nested_name']] as any[]).length > 0 &&
                                <IconButton onClick={() => hNestExp(dr_obj['name'])} sx={{ borderRadius: 0, }}>
                                    {select_key in dr_exp && (dr_exp[select_key] as string[]).includes(dr_obj['name'])
                                        ?   <ArrowUp />
                                        :   <ArrowDown />
                                    }
                                </IconButton>
                            } */}
                        </ListItem>
                    ))}

                    {/* {select_key in dr_exp && select_ni !== undefined && dr_data[select_key]['nested_name'] !== null && (dr_obj[dr_data[select_key]['nested_name']] as any[]).length > 0 &&
                        <Collapse in={(dr_exp[select_key] as string[]).includes(dr_obj['name'])} timeout="auto" unmountOnExit>
                            <List component="div">
                                {(dr_obj[dr_data[select_key]['nested_name']] as any[]).map((nested_obj: any, nested_ind) => (
                                    <ListItem
                                        key={dr_obj['name'] + "." + nested_obj['name']}
                                        onContextMenu={(e) => {
                                            e.preventDefault();

                                            if (props.cxtMenOpen !== undefined)
                                                props.cxtMenOpen(e, [select_key, ind, nested_ind]);
                                        }}
                                        disablePadding
                                    >
                                        <ListItemButton
                                            selected={select_ind === ind && select_ni === nested_ind}
                                            onClick={() => hSelection(select_key, ind, nested_ind)}
                                            sx={{ pl: 4, }}
                                        >
                                            {"li_icon" in nested_obj &&
                                                <ListItemIcon>
                                                    {nested_obj["li_icon"]}
                                                </ListItemIcon>
                                            }

                                            <ListItemText primary={nested_obj['name']} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    } */}
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
                                <Box paddingLeft="16px" width="128px">
                                    {card}
                                </Box>
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