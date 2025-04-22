import {
    Card,
    Text,
    Grid,
    Stack,
} from '@mantine/core';

const Experience = () => {
    return (
        <Grid h='100vh' style={{ display: 'flex', alignItems: 'center', paddingLeft: '96px', paddingRight: '32px', }}>
            <Grid.Col span={6}>
                <Stack>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.216861337728!2d-82.629001524515!3d28.197187375905298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2969f82120ea7%3A0xd6f38ed25b1186d!2sGlobal%20ETS%2C%20LLC!5e1!3m2!1sen!2sus!4v1728767195720!5m2!1sen!2sus"
                        width='100%'
                        height={450}
                        style={{ border: 0, borderRadius: '16px', }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <Card shadow='xl' style={{ borderRadius: '16px', }}>
                        <Text size='38px' fw={700} style={{ textAlign: 'left', }}>Global ETS, LLC</Text>
                        <Text size='22px' fw={600} style={{ textAlign: 'left', lineHeight: 2, }}>R&D Engineer / Software Developer, Nov. 2020 - Present</Text>
                        <Text size='18px' fw={500} fs='italic' style={{ textAlign: 'left', lineHeight: 1.2, }}>Skills Used</Text>
                        
                        <Text size='18px' fw={400} style={{ textAlign: 'left', lineHeight: 1.2, }}>
                            {'Python, React, MySQL, SQLite, AWS (Linux EC2), nginx, LabVIEW, C++, C, VHDL,'} <br />
                            {'EasyEDA, FreeCAD'}
                        </Text> <br />

                        <Text size='18px' fw={400} ta='left' lh={1.2}>
                            {'● Automated electronic testing using LabVIEW (QMH and actor framework) and VHDL.'} <br />
                            {'● Web app development; Django-React, deployed on AWS EC2 instance.'} <br />
                            {'● Beginner circuit design; designs sent out for PCB fabrication.'} <br />
                        </Text>
                    </Card>
                </Stack>
            </Grid.Col>
        </Grid>
    );
};

export default Experience;