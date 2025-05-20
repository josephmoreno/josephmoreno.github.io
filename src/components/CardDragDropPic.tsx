import { Card, Text, Button, Group, Modal, Box, Tooltip, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpOctagonFilled } from '@tabler/icons-react';

import DragDropPic from './DragDropPic';

import drag_drop_demo from '../assets/img/drag_drop_demo.mov';

const CardDragDropPic = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    <Box display="flex">
                        <Text size="sm" fw={600} style={{ alignSelf: "center", paddingRight: "8px", }}>Drag-Drop React Module</Text>

                        <Tooltip
                            label={
                                <Box>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>Scroll Up = Enlarge Image, Scroll Down = Shrink Image</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>Right-Click = Context Menu ("Remove Image")</Text>
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
            >
                <DragDropPic />
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "300px", minHeight: "360px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <video
                        src={drag_drop_demo}
                        height={174}
                        autoPlay
                        loop
                        muted
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Drag-Drop React Module</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Drag and drop multiple images onto the page.
                    Uses React Spring and Use-Gesture.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    Try it out
                </Button>
            </Card>
        </>
    );
};

export default CardDragDropPic;