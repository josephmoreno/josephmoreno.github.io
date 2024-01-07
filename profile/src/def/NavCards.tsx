import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box,
} from '@mui/material';

import Person from '@mui/icons-material/Person';
import Folder from '@mui/icons-material/Folder';
import Timeline from '@mui/icons-material/Timeline';

const NavCards = (): React.ReactNode[] => {
    const nav = useNavigate();

    return ([
        <>  
            <Card variant="elevation" elevation={24} onClick={() => nav("/")}>
                <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                    <CardContent>
                        <Box>
                            <Person fontSize="large" />

                            <Typography variant="h5" component="div">
                                Overview
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>,

        <>  
            <Card variant="elevation" elevation={24} onClick={() => nav("/projects/")}>
                <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                    <CardContent>
                        <Folder fontSize="large" />

                        <Typography variant="h5" component="div">
                            Projects
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>,

        <>  
            <Card variant="elevation" elevation={24} onClick={() => nav("/timeline/")}>
                <CardActionArea style={{ backgroundColor: "#ffffff", }}>
                    <CardContent>
                        <Timeline fontSize="large" />

                        <Typography variant="h5" component="div">
                            Timeline
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>,
    ]);
};

export default NavCards;