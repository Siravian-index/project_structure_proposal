
import { Navigate, useRoutes } from 'react-router-dom';


import { publicRoutes } from './public';
import { protectedRoutes } from './private';
// import { useUser } from '@/lib/auth';

function AppRoutes() {
  // TODO:
  // Use azure hook to get current user data
  // const user = useUser();

  const commonRoutes = [
    { path: '/', element: <div>landing page</div> },
    { path: '*', element: <Navigate to="/" replace/> },
  ];

  // TODO:
  // Based on current user status load public or private routes
  // const routes = user.data ? protectedRoutes : publicRoutes;
  // const routes = publicRoutes;

  const element = useRoutes([...publicRoutes, ...protectedRoutes, ...commonRoutes]);

  return <>{element}</>;
}


export default AppRoutes