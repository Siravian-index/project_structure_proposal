import { CustomTable, SaveButton, TextInput } from "@/components";
import { ActionIcon, Button, Card, Flex, Table, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter, IconSearch } from "@tabler/icons-react";


export function Dashboard() {
  const [opened, { toggle }] = useDisclosure(false);

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

      {opened ?
        <Card shadow="sm" radius="md" mb="lg">
          <Flex
            align="center"
            gap="sm"
          >
            <TextInput
              placeholder="Buscar por cedula"
              leftSectionPointerEvents="all"
              leftSection={<IconSearch onClick={toggle} />}
            />
            <ActionIcon variant="default" radius="xl" aria-label="Settings">
              <IconFilter style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Card>
        :
        <ActionIcon variant="transparent" color="#4B4F63" aria-label="Settings">
          <IconSearch
            style={{ width: '70%', height: '70%' }} stroke={1.5}
            onClick={toggle} />
        </ActionIcon>
      }

      <Card shadow="sm" radius="md">
        <Table.ScrollContainer minWidth={600} >
          <CustomTable />
        </Table.ScrollContainer >
      </Card>
    </>
  )
}