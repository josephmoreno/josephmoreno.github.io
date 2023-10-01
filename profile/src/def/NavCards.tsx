import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';

import Person from '@mui/icons-material/Person';
import Folder from '@mui/icons-material/Folder';
import Timeline from '@mui/icons-material/Timeline';

const NavCards = (): React.ReactNode[] => {
    const nav = useNavigate();

    return ([
        <>  
            <Card variant="elevation" elevation={24} onClick={() => nav("/")}>
                <CardActionArea>
                    <CardContent>
                        <Person fontSize="large" />

                        <Typography variant="h5" component="div">
                            Overview
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>,

        <>  
            <Card variant="elevation" elevation={24} onClick={() => nav("/projects/")}>
                <CardActionArea>
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
                <CardActionArea>
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