import { CustomTable, SaveButton } from "@/components";
import { Flex, Table, Text } from "@mantine/core";


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
      >
        <Text size="xl">Dashboard Page</Text>
        <SaveButton >Guardar</SaveButton>
      </Flex>


      <CustomTable />
    </>
  )
}