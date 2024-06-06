
import { ActionIcon, Button, ButtonProps } from '@mantine/core';

import styles from "./styles.module.css"
import { IconPlus } from '@tabler/icons-react';
interface Props extends React.ComponentPropsWithoutRef<"button"> {
    props?: ButtonProps
    compact?: boolean
    loading?: boolean
}

export function SaveButton({ props, compact, loading, ...defaultBtnProps }: Props) {

    if (compact) {
        return (
            <ActionIcon
                {...defaultBtnProps}
                loading={loading}
                variant="filled"
                radius="xl"
                aria-label="Guardar"
                classNames={{ root: styles.root }}
            >
                <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
        )
    }

    return (
        <Button
            leftSection={<IconPlus size={18} />}
            radius="xl"
            classNames={{ root: styles.root }}
            loading={loading}
            {...props}
            {...defaultBtnProps}
        />
    )


}