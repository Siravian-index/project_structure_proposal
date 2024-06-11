import { Suspense, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';
import { Box, Center, Container, Loader, } from '@mantine/core';

import { Shell, NavLink } from '@/components';


const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');

import { IconUsers, IconFolderOpen, IconBell, IconHome } from "@tabler/icons-react"

const App = () => {
  const [active, setActive] = useState(0);
  const data = [
    { icon: IconHome, label: 'Inicio' },
    { icon: IconUsers, label: 'Buscar' },
    {
      icon: IconFolderOpen,
      label: 'Filtrar',
      rightSection: <IconBell size="1rem" stroke={1.5} />,
    },
  ]
  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <Shell navLinks={<Box mt="lg">
      {items}
    </Box>}>
      <Suspense
        fallback={
          <Center>
            <Loader color="blue" />
          </Center>
        }
      >
        <Container fluid>
          <Outlet />
        </Container>
      </Suspense>
    </Shell>
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
