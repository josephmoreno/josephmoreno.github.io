import { Menu, rem, Box, } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const ImgCxtMenu = ({ opened, setOpened, top, left, cxtSel }: {
    opened: boolean,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>,
    
    top: number,
    left: number,
    cxtSel: (sel: number) => void,
}) => {
    return (
        <Box style={{ position: 'absolute', top: top + 'px', left: left + 'px', }}>
            <Menu opened={opened} onChange={setOpened} shadow='md' width={200} withinPortal={false}>
                <Menu.Dropdown>
                    {/* <Menu.Item
                        leftSection={<IconCursorText style={{ width: rem(14), height: rem(14), }}/>}
                        onClick={() => cxtSel(0)}
                    >
                        Label Image
                    </Menu.Item> */}

                    <Menu.Item
                        leftSection={<IconTrash style={{ width: rem(14), height: rem(14), }}/>}
                        onClick={() => cxtSel(1)}
                    >
                        Remove Image
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Box>
    );
};

export default ImgCxtMenu;