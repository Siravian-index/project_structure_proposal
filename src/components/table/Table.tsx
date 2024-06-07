
import styles from "./styles.module.css"

import { Table, TableData } from "@mantine/core"

export function CustomTable() {
    const titles = ['Element position', 'Element name', 'Symbol', 'Atomic mass']
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];

    const headers = titles.map((element) => (
        <Table.Th classNames={{ th: styles.th }} key={element}>{element}</Table.Th>
    ))
    // TODO: make it so it can take any array of obj an return rows regardless the key name
    // TODO load both the parent name and the value on the onClick
    // This will enter as prop
    const rows = elements.map((element) => (
        <Table.Tr classNames={{ tr: styles.tr }} key={element.name}>
            <Table.Td classNames={{ td: styles.td }}>{element.position}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.name}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.symbol}</Table.Td>
            <Table.Td classNames={{ td: styles.td }}>{element.mass}</Table.Td>
        </Table.Tr>
    ));


    return (
        <Table.ScrollContainer minWidth={500}>
            <Table classNames={{ table: styles.table }}>
                <Table.Thead classNames={{ thead: styles.thead }}>
                    <Table.Tr classNames={{ tr: styles.tr }}>
                        {headers}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody classNames={{ tbody: styles.tbody }}>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>

    )
}