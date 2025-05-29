import { Card, Image, Text, Button, Group, Modal, Tooltip, Box, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpOctagonFilled } from '@tabler/icons-react';

import CanvasChip8 from './CanvasChip8';

import brix from '../old/src/img/chip8_brix.gif';

const CardChip8 = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    <Box display="flex">
                        <Text size="sm" fw={600} style={{ alignSelf: "center", paddingRight: "8px", }}>Chip-8 Emulator</Text>

                        <Tooltip
                            label={
                                <>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>Use mouse to select game</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>16 keys for input: 1234-QWER-ASDF-ZXCV</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>M = Back to Game Selection Menu</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>P = Play/Pause Music</Text>
                                </>
                            }
                            defaultOpened
                            closeDelay={250}
                        >
                            <IconHelpOctagonFilled />
                        </Tooltip>
                    </Box>}
                size='680px'
            >
                <CanvasChip8 opened={opened} />
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "300px", minHeight: "360px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={brix}
                        height={160}
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

                <Button color="blue" mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    Try it out
                </Button>
            </Card>
        </>
    );
};

export default CardChip8;