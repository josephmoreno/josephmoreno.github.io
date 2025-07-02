import { Card, Image, Text, Button, Group, Modal, Box, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpOctagonFilled, IconBrandGithub } from '@tabler/icons-react';

import CanvasTbGame0 from '../prev_ver/ver2/components/CanvasTbGame0';

import numbo from '../prev_ver/ver2/assets/img/numbo_walking.gif';

const CardTbGame0 = ({ disabled, marLeftPer }: { disabled?: boolean, marLeftPer?: number } = { disabled: false, marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    <Box display="flex">
                        <Text size="sm" fw={600} style={{ alignSelf: "center", paddingRight: "8px", }}>Tile-Based Game</Text>

                        <Tooltip
                            label={
                                <Box>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>WASD controls, play/stop music button in top-left</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>WIP - collision is unstable so the collision boxes are visible for now</Text>
                                </Box>
                            }
                            defaultOpened
                            closeDelay={250}
                            zIndex={opened ? 1031 : 300}
                        >
                            <IconHelpOctagonFilled />
                        </Tooltip>
                    </Box>
                }
                fullScreen
                zIndex={opened ? 1030 : 200}
                pos="relative"
            >
                <CanvasTbGame0 opened={opened} />
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={numbo}
                        height={160}
                        fit="scale-down"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Tile-Based Game (WIP)</Text>
                    <Tooltip label={<Text size='sm' fw={600} style={{ alignSelf: "center", }}>GitHub Repo</Text>}>
                        <a href="https://github.com/josephmoreno/tile_based_game0" style={{ textDecoration: "none", display: "flex", alignContent: "center", }}><IconBrandGithub /></a>
                    </Tooltip>
                </Group>

                <Text size="sm" c="dimmed">
                    C++ using SDL for rendering, audio, key and mouse input,
                    Entt for entity component system.
                    No actual game or concrete concept yet.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" disabled={disabled} onClick={open}>
                    {disabled ? "Desktop-Only Demo" : "Try it out"}
                </Button>
            </Card>
        </>
    );
};

export default CardTbGame0;