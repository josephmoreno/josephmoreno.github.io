import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardContent,
    Box,
} from '@mui/material';

import Mtt from '../styled/styled';

import ArrowBack from '@mui/icons-material/ArrowBack';
import Person from '@mui/icons-material/Person';
import Folder from '@mui/icons-material/Folder';
import Timeline from '@mui/icons-material/Timeline';

import useNavbar from '../../../stores/NavbarStore';

const NavCards = (): React.ReactNode[] => {
    const nav = useNavigate();
    const setOldVer = useNavbar((state: any) => state.setOldVer);

    return ([
        <Mtt
            tt_body='Back to Current Version'
            comp={
                <Box paddingLeft="16px" width="100px">  
                    <Card variant="elevation" elevation={24} onClick={() => { setOldVer(false); nav('/'); }}>
                        <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                            <CardContent>
                                <ArrowBack fontSize="large" />
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