import { CustomTable, SaveButton } from "@/components";
import { Card, Flex, Table, Text } from "@mantine/core";


export function Dashboard() {

  return (
    <>
      <Flex
        mih={50}
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        mb="sm"
      >
        <Text size="xl">Dashboard Page</Text>
        <SaveButton >Guardar</SaveButton>
      </Flex>

      <Card withBorder shadow="sm" radius="md">
        <Table.ScrollContainer minWidth={600} >
          <CustomTable />
        </Table.ScrollContainer >
      </Card>
    </>
  )
}