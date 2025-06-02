import { Card, Image, Text, Button, Group, Modal, Box, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpOctagonFilled } from '@tabler/icons-react';

import CanvasTbGame0 from './CanvasTbGame0';

import numbo from '../assets/img/numbo_walking.gif';

const CardTbGame0 = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
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

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "300px", minHeight: "360px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={numbo}
                        height={160}
                        fit="scale-down"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Tile-Based Game (WIP)</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    C++ using SDL for rendering, audio, key and mouse input,
                    Entt for entity component system.
                    No actual game or concrete concept yet.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    Try it out
                </Button>
            </Card>
        </>
    );
};

export default CardTbGame0;