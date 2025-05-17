import { useRef, useEffect } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

import styles from './css/DraggablePic.module.css';

const wheel = (y: number) => {
    const scale_p: number = 1 - (y / 10000);
    return `scale(${scale_p})`;
};

const scaleDownDim = (img_w: number, img_h: number): { w: number, h: number } => {
    let w: number = img_w;
    let h: number = img_h;
    let scale_p: number = 1;

    while ((w > 720 || h > 720) && scale_p > 0) {
        scale_p -= 0.01;
        w = w * scale_p;
        h = h * scale_p;
    };

    return({ w: w, h: h });
};

const DraggablePic = ({ img, img_ind, img_w = 200, img_h = 200, cxtMenu = undefined }: {
    img: string,
    img_ind: number,
    img_w?: number,
    img_h?: number,
    cxtMenu?: (top: number, left: number, img_ind: number) => void,
}) => {
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault();
        document.addEventListener('gesturestart', preventDefault);
        document.addEventListener('gesturechange', preventDefault);

        return () => {
            document.removeEventListener('gesturestart', preventDefault);
            document.removeEventListener('gesturechange', preventDefault);
        };
    }, []);

    const target = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 1, tension: 5000, friction: 100 },
        }),
    );

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

    useGesture(
        {
            onDrag: ({ active, offset: [x, y], }) => api.start({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.025, }),
            onMove: ({ dragging, }) => !dragging && api.start({ rotateX: 0, rotateY: 0, scale: 1.025 }),
            onHover: ({ hovering }) => !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y], }) => { event.preventDefault(); wheelApi.set({ wheelY: y, }); },
        }, {
            target, eventOptions: { passive: false },
            wheel: { bounds: { top: -8000, bottom: 8000, }},    // Connected to wheel function at top; -80% and 80% zoom bounds.
        }
    );

    const wh: { w: number, h: number } = scaleDownDim(img_w, img_h);

    return (
        <animated.div
            ref={target}
            className={styles.card}
            style={{
                transform: wheelY.to(wheel),
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
                width: wh.w + 'px',
                height: wh.h + 'px',
            }}
            onContextMenu={(e) => { e.preventDefault(); if (cxtMenu !== undefined) cxtMenu(e.clientY, e.clientX, img_ind); }}
        >
            <div key={img_ind} style={{ backgroundImage: `url(${img})`, backgroundSize: (wh.w + 'px') + ' ' + (wh.h + 'px'), }} />
        </animated.div>
    );
};

export default DraggablePic;