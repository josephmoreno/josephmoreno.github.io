import { Card, Image, Text, Button, Group, /*Modal, Box,*/ Tooltip } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { /*IconHelpOctagonFilled,*/ IconBrandGithub } from '@tabler/icons-react';

// import CanvasChip8 from '../prev_ver/ver2/components/CanvasChip8';

import gba_splash from '../assets/img/gba_splash.gif';

const CardGbaEmu = ({ /*disabled,*/ marLeftPer }: { disabled?: boolean, marLeftPer?: number } = { disabled: false, marLeftPer: 0 }) => {
    // const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            {/* <Modal
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
            </Modal> */}

            <Card shadow="sm" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={gba_splash}
                        height={160}
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Nintendo GBA Emulator</Text>
                    <Tooltip label={<Text size='sm' fw={600} style={{ alignSelf: "center", }}>GitHub Repo</Text>}>
                        <a href="https://github.com/josephmoreno/gba_emu" style={{ textDecoration: "none", display: "flex", alignContent: "center", }}><IconBrandGithub /></a>
                    </Tooltip>
                </Group>

                <Text size="sm" c="dimmed">
                    Being developed in C++.
                    Currently coding out ARM7TDMI instructions.
                    SDL for handling keystroke input and audio-visual output.
                </Text>

                <Button color="blue" mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" disabled={true} /*onClick={open}*/>
                    WIP - Demo Not Ready
                </Button>
            </Card>
        </>
    );
};

export default CardGbaEmu;