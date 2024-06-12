
import { Avatar, Flex, Table } from "@mantine/core"

import styles from "./styles.module.css"
import { Checkbox } from "../checkbox/Checkbox";


export function CustomTable() {
    const titles = ["Nombre", "Cedula", "Finanzas", "Contacto", "Correo"]
    // The idea is that each prop is and obj with value and node props to find the owner
    const elements = [
        { name: "Juan Carlos", cc: "11232132", finances: "$25.000.000", contact: "3128574632", email: "jc@gmail.com" },
        { name: "Jhoan Carlos", cc: "11232132", finances: "$25.000.000", contact: "3128574632", email: "jc@gmail.com" },
        { name: "Juan Carlitos", cc: "11232132", finances: "$25.000.000", contact: "3128574632", email: "jc@gmail.com" },
        { name: "Juan karlos", cc: "11232132", finances: "$25.000.000", contact: "3128574632", email: "jc@gmail.com" },
    ];

    const headers = titles.map((element) => (
        <Table.Th classNames={{ th: styles.th }} key={element}>{element}</Table.Th>
    ))
    // TODO: make it so it can take any array of obj an return rows regardless the key name
    // TODO load both the parent name and the value on the onClick
    // This will enter as prop
    const rows = elements.map((element, index) => (
        <Table.Tr classNames={{ tr: styles.tr }} key={index} className={styles.row}>
            <Table.Td classNames={{ td: styles.td }}>
                <Checkbox
                />
            </Table.Td>
            <Table.Td classNames={{ td: styles.td }}>
                <Flex
                    align="center"
                    gap="xs"
                >

                    <Avatar radius="xl">JC</Avatar>
                    {element.name}
                </Flex>
            </Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.cc}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.finances}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.contact}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.email}</Table.Td>

        </Table.Tr>
    ));


    return (
        <Table classNames={{ table: styles.table }}
            horizontalSpacing="sm"
            verticalSpacing="sm"
        >
            <Table.Thead classNames={{ thead: styles.thead }}>
                <Table.Tr classNames={{ tr: styles.tr }}>
                    <Table.Th  classNames={{ th: styles.th }}/>
                    {headers}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody classNames={{ tbody: styles.tbody }}>{rows}</Table.Tbody>
        </Table>

    )
}