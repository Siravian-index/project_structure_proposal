import { Checkbox as Check, CheckboxProps } from '@mantine/core';


import styles from "./styles.module.css"

export function Checkbox(props: CheckboxProps) {


  return (
    <Check
      size='md'
      classNames={{
        root: styles.root,
        input: styles.input,
      }}
      {...props}
    />
  )
}