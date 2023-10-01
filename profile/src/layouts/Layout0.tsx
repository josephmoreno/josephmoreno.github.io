import {
    Box,
    Grid,
} from '@mui/material';

import navCards from '../def/NavCards';

type Layout0Props = {
    children: React.ReactNode,
};

const Layout0 = (props: Layout0Props) => {
    const ch: React.ReactNode = props.children;

    return (
        <>
            <Box padding="32px">
                <Grid
                    container
                    justifyContent="right"
                    spacing={4}
                >
                    <Grid item display="flex">
                        {navCards().map((card: React.ReactNode) => 
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
        </>
    );
};

export default Layout0;