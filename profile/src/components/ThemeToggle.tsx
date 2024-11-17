import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
} from '@mantine/core';

import { IconSun, IconMoon, } from '@tabler/icons-react';

const ThemeToggle = () => {
    const { setColorScheme } = useMantineColorScheme();
    const comp_color_scheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

    return (
        <div style={{ position: 'absolute', top: '8px', right: '32px', zIndex: 1030, }}>
            <ActionIcon
                onClick={() => setColorScheme(comp_color_scheme === 'light' ? 'dark' : 'light')}
                variant='default'
                size='xl'
                aria-label='color scheme toggle'
            >
                {comp_color_scheme === 'light'
                    ?   <IconMoon stroke={1.5} />
                    :   <IconSun stroke={1.5} />
                }
            </ActionIcon>
        </div>
    );
};

export default ThemeToggle;