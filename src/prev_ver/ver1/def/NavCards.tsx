import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardContent,
    Box,
    Select,
    MenuItem,
} from '@mui/material';

import Mtt from '../styled/styled';

import Person from '@mui/icons-material/Person';
import Folder from '@mui/icons-material/Folder';
import Timeline from '@mui/icons-material/Timeline';

import useNavbar from '../../../stores/NavbarStore';

const NavCards = (): React.ReactNode[] => {
    const nav = useNavigate();
    const app_ver = useNavbar((state: any) => state.app_ver);
    const setAppVer = useNavbar((state: any) => state.setAppVer);

    return ([
        <Mtt
            tt_body='App Version'
            comp={
                <Box paddingLeft="16px" width="100px">  
                    <Card variant="elevation" elevation={24}>
                        <CardActionArea style={{ backgroundColor: "#ffffff", minHeight: "75px", }}>
                            <CardContent>
                                <Select
                                    defaultValue={app_ver}
                                    onChange={(e) => { setAppVer(e.target.value); nav("/"); }}
                                    autoWidth
                                    label="App Ver."
                                    size="small"
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            }
        />,

        <Mtt
            tt_body='Overview'
            comp={
                <Box paddingLeft="16px" width="100px">  
                    <Card variant="elevation" elevation={24} onClick={() => nav("/")}>
                        <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                            <CardContent>
                                <Person fontSize="large" />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            }
        />,

        <Mtt
            tt_body='Projects'
            comp={
                <Box paddingLeft="16px" width="100px">  
                    <Card variant="elevation" elevation={24} onClick={() => nav("/projects/")}>
                        <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                            <CardContent>
                                <Folder fontSize="large" />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            }
        />,

        <Mtt
            tt_body='Timeline'
            comp={
                <Box paddingLeft="16px" width="100px">  
                    <Card variant="elevation" elevation={24} onClick={() => nav("/timeline/")}>
                        <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                            <CardContent>
                                <Timeline fontSize="large" />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            }
        />,
    ]);
};

export default NavCards;