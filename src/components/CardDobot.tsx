import { Card, Text, Button, Group, Modal, Flex, Tooltip, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpOctagonFilled } from '@tabler/icons-react';

import dobot from '../prev_ver/ver2/assets/img/dobot_demo.mp4';

const CardDobot = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    <Flex>
                        <Text size="sm" fw={600} style={{ alignSelf: "center", paddingRight: "8px", }}>Automated Testing</Text>

                        <Tooltip
                            label={
                                <Box>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>Video produced by Global ETS, LLC</Text>
                                    <Text size='sm' fw={600} style={{ alignSelf: "center", }}>Robot arm and SDK credit to Dobot Robotics</Text>
                                </Box>
                            }
                            defaultOpened
                            closeDelay={250}
                            zIndex={opened ? 1031 : 300}
                        >
                            <IconHelpOctagonFilled />
                        </Tooltip>
                    </Flex>
                }
                fullScreen
                zIndex={opened ? 1030 : 200}
            >
                <Flex h="100vh" justify="center">
                    <iframe
                        width="90%" 
                        height="90%"
                        src="https://www.youtube.com/embed/_fnqPFSuumk?si=bU1oOF_bRXfukrbg&mute=1&rel=0&autoplay=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Flex>
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <video src={dobot} controls={false} width="100%" height="100%" autoPlay muted loop />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Automated Testing</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Automated component testing, developed in LabVIEW and C#.
                    Machine learning for component orientation and deep learning for package defects.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    View demo
                </Button>
            </Card>
        </>
    );
};

export default CardDobot;