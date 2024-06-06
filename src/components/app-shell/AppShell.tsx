
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import styles from "./styles.module.css"
interface Props {
    children: React.ReactNode
    header: string
}


export function Shell({ children, header }: Props) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            layout="alt"
            header={{ height: 60, collapsed: false }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="lg"
            withBorder={true}
        >
            <AppShell.Header withBorder={false}>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text>{header}</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md" classNames={{ navbar: styles.navbar }}>
                <Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text classNames={{ root: styles["navbar-text"] }}>Navbar</Text>
                </Group>
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}