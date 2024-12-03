import { useEffect, useRef, useState } from 'react';
import { Loader } from '@mantine/core';

// -- @ts-ignore
import Chip8 from './emscripten/chip8.mjs';

const CanvasChip8 = ({ opened }: { opened: boolean }) => {
    const normalQuit = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        Chip8({
            canvas: (() => document.getElementById('canvas'))(),
            onRuntimeInitialized: (() => setLoading(false)),
        }).then((instance: any) => { normalQuit.current = instance.cwrap('normalQuit', null); }); // Under "Interacting with an API written in C/C++ from NodeJS" section: https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap
    }, []);

    useEffect(() => {
        if ((opened === false) && (normalQuit.current !== null))
            normalQuit.current();
    }, [opened]);

    return(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {loading
                ?   <Loader color='blue' />
                :   <></>
            }
            <canvas id='canvas' />
        </div>
    );
};

export default CanvasChip8;