import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';


const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');



const App = () => {
  return (
    <div>
      <h3>App layout</h3>

      <Suspense
        fallback={
          <div>
            loading private route
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
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
