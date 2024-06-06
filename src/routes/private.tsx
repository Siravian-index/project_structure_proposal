import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';
import { Center, Loader, } from '@mantine/core';
import { Shell } from '@/components';

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');



const App = () => {

  return (
    <Shell>
      <Suspense
        fallback={
          <Center>
            <Loader color="blue" />
          </Center>
        }
      >
        <Outlet />
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
