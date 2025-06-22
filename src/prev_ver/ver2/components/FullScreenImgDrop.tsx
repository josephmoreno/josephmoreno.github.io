import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

const FsImgDrop = ({ hAddImgs, openRef }: { hAddImgs: (imgs: FileWithPath[]) => void, openRef: React.RefObject<() => void> }) => {
    return (
        <>
            <Dropzone
                activateOnClick={false}
                accept={IMAGE_MIME_TYPE}
                openRef={openRef}
                onDrop={hAddImgs}
                style={{ width: "100%", height: "100%", }}
            >
                <Group justify='center' gap='xl' mih={220} style={{ pointerEvents: 'none', }}>
                    <Dropzone.Accept>
                        <Group>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                stroke={1.5}
                            />

                            <div>
                                <Text size='xl' inline>
                                    Add images
                                </Text>
                            </div>
                        </Group>
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <Group>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                stroke={1.5}
                            />

                            <div>
                                <Text size='xl' inline>
                                    One of the files is not accepted; image files only.
                                </Text>
                            </div>
                        </Group>
                    </Dropzone.Reject>
                </Group>
            </Dropzone>
        </>
    );
};

export default FsImgDrop;