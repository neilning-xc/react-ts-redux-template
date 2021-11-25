import { RouteObject, Navigate } from 'react-router';
import { useRoutes, useLocation, matchRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';
import { useAuth } from '@/lib/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const location = useLocation();

  const matchedProtectedRoute = matchRoutes(protectedRoutes as RouteObject[], location);

  const shouldRedirectLogin = !auth.user && matchedProtectedRoute !== null;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{shouldRedirectLogin ? <Navigate to={'/auth/login'} /> : element}</>;
};
