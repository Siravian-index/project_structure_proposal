import { AppShell, AppShellProps } from "@mantine/core";


interface Props {

}


export function Shell({ children}: AppShellProps) {
    return (
        <AppShell>
            {children}
        </AppShell>
    )
}