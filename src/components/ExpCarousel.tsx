import { useRef } from 'react';
import { Box } from '@mantine/core';

import Autoscroll from 'embla-carousel-auto-scroll';
import { Carousel } from '@mantine/carousel';

import dobot from '../prev_ver/ver2/assets/img/dobot_demo.mp4';
import dr_ts from '../prev_ver/ver1/img/django-react_ts.gif';
import sdram from '../prev_ver/ver1/img/sdram_proj_pic1.png';
import dmc from '../prev_ver/ver1/img/dmc_2021_cropped0.png';

const ExpCarousel = () => {
    const autoscroll = useRef(Autoscroll({ speed: 1, stopOnInteraction: false, startDelay: 500, }));

    return(
        <Box>
            <Carousel
                withControls={false}
                miw="calc(320px - 2rem)"
                mih="180px"
                maw="calc(480px - 2rem)"
                mah="270px"
                slideGap="sm"
                plugins={[autoscroll.current]}
                onMouseEnter={autoscroll.current.stop}
                onMouseLeave={() => autoscroll.current.play()}
                emblaOptions={{
                    loop: true,
                    align: "center",
                }}
            >
                <Carousel.Slide>
                    <video src={dobot} controls={false} width="100%" height="100%" autoPlay muted loop />
                </Carousel.Slide>
                
                <Carousel.Slide>
                    <img src={dr_ts} width="100%" height="100%" />
                </Carousel.Slide>
                
                <Carousel.Slide>
                    <img src={sdram} width="100%" height="100%" />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img src={dmc} width="100%" height="100%" />
                </Carousel.Slide>
            </Carousel>
        </Box>
    );
};

export default ExpCarousel;