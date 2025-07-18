import { useRef } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

import CardGbaEmu from './CardGbaEmu';
import CardChip8 from './CardChip8';
import CardTbGame0 from './CardTbGame0';
import CardDragDrop from './CardDragDropPic';
import CardSdram from './CardSdramTester';

const ProjCarousel = ({ disabled }: { disabled?: boolean} = { disabled: false }) => {
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, }));

    return(
        <Carousel
            withControls={false}
            w="calc(300px - 2rem)"
            h="376px"
            slideGap="sm"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            emblaOptions={{
                loop: true,
                align: "center",
            }}
        >
            <Carousel.Slide>
                <CardGbaEmu />
            </Carousel.Slide>

            <Carousel.Slide>
                <CardChip8 disabled={disabled} />
            </Carousel.Slide>
            
            <Carousel.Slide>
                <CardTbGame0 disabled={disabled} />
            </Carousel.Slide>
            
            <Carousel.Slide>
                <CardDragDrop />
            </Carousel.Slide>

            <Carousel.Slide>
                <CardSdram />
            </Carousel.Slide>
        </Carousel>
    );
};

export default ProjCarousel;