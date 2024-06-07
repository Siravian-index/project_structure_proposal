
import { AppShell, Box, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import styles from "./styles.module.css"
interface Props {
    children: React.ReactNode
}


export function Shell({ children }: Props) {
    const [opened, { toggle }] = useDisclosure(true);
    return (
        <AppShell
            layout="alt"
            navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: !opened, mobile: !opened }, }}
            padding="lg"
            withBorder={true}
        >
            <AppShell.Navbar p="md" classNames={{ navbar: styles.navbar }}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" color='white' />
                    <Text classNames={{ root: styles["navbar-text"] }}>Navbar</Text>
                </Group>
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>

            <AppShell.Main>
                {!opened &&
                    <Burger opened={opened} onClick={toggle} size="sm" />
                }
                {children}
            </AppShell.Main>
        </AppShell>
    )
}