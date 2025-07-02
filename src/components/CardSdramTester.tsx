import { Card, Text, Button, Group, Modal, Box, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import sdram from '../prev_ver/ver1/img/sdram_proj_pic1.png';
import sdram_doc from '../prev_ver/ver1/files/SDRAM Project Doc, Ver. 2.pdf';

const CardSdramTester = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="SDRAM Tester Document"
                fullScreen
                zIndex={opened ? 1030 : 200}
            >
                <Box h="100vh">
                    <iframe 
                        src={sdram_doc}
                        height="90%"
                        width="100%"
                        title="sdram_doc"
                    />
                </Box>
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <Image
                        src={sdram}
                        height={175}
                        // fit="scale-down"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>SDRAM Tester</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Developed testing routine and fixture for a Micron Technology part number; uses VHDL and LabVIEW.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" onClick={open}>
                    View doc
                </Button>
            </Card>
        </>
    );
};

export default CardSdramTester;