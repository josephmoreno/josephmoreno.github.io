import { Card, Image, Text, Button, Group, Modal, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import CanvasChip8 from './CanvasChip8';

import brix from '../old/src/img/chip8_brix.gif';

const CardChip8 = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Chip-8 Emulator / BRIX" size='680px'
            >
                <Text size='sm' fw={600} style={{ paddingBottom: '4px', }}>Q = Left, E = Right, P = Play/Pause Music</Text>
                <CanvasChip8 opened={opened} />
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '300px', marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={brix}
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Chip-8 Emulator</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Emulator developed in C++.
                    SDL used to handle keystroke input and audio-visual output.
                    Ported to JavaScript and WebAssembly using emscripten.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
                    Try it out
                </Button>
            </Card>
        </>
    );
};

export default CardChip8;