import { CustomTable, SaveButton, TextInput } from "@/components";
import { ActionIcon, Card, Group, Table, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter, IconSearch } from "@tabler/icons-react";


export function Dashboard() {
  const [opened, { toggle }] = useDisclosure(false);
  const titles = ["Nombre", "Cedula", "Finanzas", "Contacto", "Correo"]

  return (
    <>
      <Group
        justify="space-between"
        align="center"
        wrap="wrap"
        mb="lg"
        mt="xs"
      >
        <Title order={1} size="h4">Filtrar casos duplicados</Title>
        <SaveButton >Guardar</SaveButton>
      </Group>

      {opened ?
        <Card shadow="sm" radius="md" mb="lg">
          <Group
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
          </Group>
        </Card>
        :
        <ActionIcon variant="transparent" color="#4B4F63" aria-label="Settings">
          <IconSearch
            style={{ width: '70%', height: '70%' }} stroke={1.5}
            onClick={toggle} />
        </ActionIcon>
      }

      <Card shadow="sm" radius="md" mb="lg">
        <Table.ScrollContainer minWidth={600} >
          <CustomTable />
        </Table.ScrollContainer >
      </Card>

      <Card shadow="sm" radius="md" mb="lg">
        <Title order={4} size="h5">Datos del cliente</Title>

        {titles.map((title, index) => (

          <Group
            align="center"
            gap="sm"
            key={index}
          >
            <TextInput
              label={title}
              disabled
            />
          </Group>
        ))}

      </Card>
    </>
  )
}