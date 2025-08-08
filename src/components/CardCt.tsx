import { Card, Text, Group, /*Modal, Box,*/ Button } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

import old_ct_prog from '../assets/videos/old_ct_prog.mp4';

const CardCt = ({ marLeftPer }: { marLeftPer?: number } = { marLeftPer: 0 }) => {
    // const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            {/* <Modal
                opened={opened}
                onClose={close}
                title={
                    <Box display="flex">
                        <Text size="sm" fw={600} style={{ alignSelf: "center", paddingRight: "8px", }}>3D PCB</Text>
                    </Box>
                }
                fullScreen
                zIndex={opened ? 1030 : 200}
                pos="relative"
            >
                <></>
            </Modal> */}

            <Card shadow="sm" padding="lg" radius="md" pos="relative" withBorder style={{ width: "calc(300px - 2rem)", minHeight: "376px", paddingBottom: "64px", marginLeft: (marLeftPer + '%'), }}>
                <Card.Section>
                    <video src={old_ct_prog} controls={false} width="100%" height="100%" autoPlay muted loop />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>LabVIEW Curve Tracer</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    Implemented using 2 oscilloscopes and a function generator.
                    Uses LabVIEW and NI VirtualBench.
                    PCB designed through EasyEDA
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" pos="absolute" bottom="16px" left="5%" w="90%" disabled={true}>
                    No demo available
                </Button>
            </Card>
        </>
    );
};

export default CardCt;