

import { NavLink as Link, NavLinkProps } from '@mantine/core';

import styles from "./styles.module.css"


export function NavLink(props: NavLinkProps) {

  return (
    <Link
      variant='filled'
      classNames={{
        root: styles.root,
      }}
      {...props}
    />
  )
}
