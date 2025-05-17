import { Card, Text, Button, Group, Modal, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import DragDropPic from './DragDropPic';

import drag_drop_demo from '../assets/img/drag_drop_demo.mp4';

const CardDragDropPic = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Drag Drop Images Demo"
                fullScreen
                zIndex={opened ? 1030 : 200}
            >
                <Text size='sm' fw={600} style={{ paddingBottom: '4px', }}>Scroll Up = Enlarge Image, Scroll Down = Shrink Image, Right-Click = Context Menu ("Remove Image")</Text>
                <DragDropPic />
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '300px', marginLeft: (marLeftPer + '%'), }}>
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
                    Drag and drop any number of images onto the page.
                    Uses React Spring and Use-Gesture.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
                    Try it out
                </Button>
            </Card>
        </>
    );
};

export default CardDragDropPic;