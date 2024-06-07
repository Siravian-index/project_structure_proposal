import { TextInput as Input, TextInputProps } from "@mantine/core";

import styles from "./styles.module.css"


export function TextInput(props: TextInputProps) {

    return <Input
        radius="xl"
        classNames={{ input: styles.input }}
        {...props}
    />
}