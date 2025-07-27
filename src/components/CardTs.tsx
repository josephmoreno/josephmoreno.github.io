import { Card, Text, Button, Group, Modal, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import old_ts from '../prev_ver/ver1/img/tracking_system.png';
import ts_demo from '../assets/videos/ts_demo.mp4'

const CardTs = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Tracking System"
                fullScreen
                zIndex={opened ? 1030 : 200}
            >
                <Flex h="100vh" justify="center">
                    <video width="90%" height="90%" src={ts_demo} controls autoPlay muted loop />
                </Flex>
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={old_ts}
                        height="100%"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Tracking System</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Internal information system, developed in LabVIEW.
                    Developed prototype web app version using Django and React.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    View demo
                </Button>
            </Card>
        </>
    );
};

export default CardTs;