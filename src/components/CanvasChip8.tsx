import { useEffect, useRef } from 'react';

import Chip8 from './emscripten/chip8.mjs';

const CanvasChip8 = ({ opened }: { opened: boolean }) => {
    const normalQuit = useRef<any>(null);

    useEffect(() => {
        Chip8({
            canvas: (() => document.getElementById('canvas'))(),
        }).then((instance: any) => { normalQuit.current = instance.cwrap('normalQuit', null); }); // Under "Interacting with an API written in C/C++ from NodeJS" section: https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap
    }, []);

    useEffect(() => {
        if ((opened === false) && (normalQuit.current !== null))
            normalQuit.current();
    }, [opened]);

    return(<canvas id='canvas' />);
};

export default CanvasChip8;