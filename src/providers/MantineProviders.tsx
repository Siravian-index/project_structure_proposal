

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
interface Props {
    children: React.ReactNode
}
export function MantineProviders({ children }: Props) {
    return (
        <MantineProvider>
            <ModalsProvider>
                {children}
            </ModalsProvider>
        </MantineProvider>
    )
}