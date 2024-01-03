import {
    useCallback,
    useEffect,
} from 'react';

import { useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';

import TimelineSect from "@mui/lab/Timeline";

import Layout0 from '../layouts/Layout0';
import TlObjs from './TimelineItems';

const Timeline = () => {
    const tl_objs: any[] = TlObjs();

    const loc0 = useLocation();
    const loc0_state = loc0.state;

    const hSectJump = useCallback((name: string) => {
        const filt0: any[] = tl_objs.filter((tl_obj) => tl_obj['name'] === name);

        if (filt0.length === 1)
            (filt0[0]['ref'].current as unknown as HTMLDivElement)?.scrollIntoView({ behavior: "smooth", });
    }, [tl_objs]);

    useEffect(() => {
        if ((loc0_state !== null) && (loc0_state['param0'] !== undefined))
            hSectJump(loc0_state['param0']);
    }, [
        loc0_state,
        hSectJump,
    ]);

    return (
        <Layout0>
            <Grid
                container
                spacing={1}
            >
                <Grid
                    item xs={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <TimelineSect position="alternate">
                        {tl_objs.map((tl_obj: any) => (
                            tl_obj['elem']
                        ))}
                    </TimelineSect>
                </Grid>
            </Grid>
        </Layout0>
    );
};

export default Timeline;