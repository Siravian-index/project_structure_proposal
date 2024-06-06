import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';
import { AppShell, Burger, Button, Center, Group, Loader, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');



const App = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60, collapsed: false }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="lg"
      withBorder={true}
    >
      <AppShell.Header withBorder={false}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Filtrar casos duplicados</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navbar</Text>
        </Group>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Suspense
          fallback={
            <Center>
              <Loader color="blue" />
            </Center>
          }
        >
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="." />
  }
];
