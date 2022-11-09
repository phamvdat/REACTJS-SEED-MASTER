import App from 'App';
import Forbidden from 'core/components/Error/Forbidden';
import NotFound from 'core/components/Error/NotFound';
import BlankLayout from 'core/components/Layouts/BlankLayout';
import DefaultLayout from 'core/components/Layouts/DefaultLayout';
import ErrorLayout from 'core/components/Layouts/ErrorLayout';
import { RoutePath } from 'core/constants/routes';
import AboutPage from 'core/pages/about';
import HomePage from 'core/pages/home';
import LoginPage from 'features/account/pages/login';
import RegisterPage from 'features/account/pages/register';
import { Navigate, RouteObject } from 'react-router-dom';
import NonAuthenticated from './non-authenticated';
import ProtectedRoute from './protected';

const routesConfig: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <App />,
    children: [
      {
        path: '*',
        element: <ErrorLayout />,
        children: [
          { path: '*', element: <NotFound /> },
          { path: RoutePath.Forbidden, element: <Forbidden /> },
        ],
      },
      {
        element: <BlankLayout />,
        children: [],
      },

      {
        // authen routes
        element: (
          <NonAuthenticated>
            <DefaultLayout />
          </NonAuthenticated>
        ),
        children: [
          {
            path: RoutePath.Login,
            element: (
              <NonAuthenticated>
                <LoginPage />
              </NonAuthenticated>
            ),
          },
          {
            path: RoutePath.Register,
            element: (
              <NonAuthenticated>
                <RegisterPage />
              </NonAuthenticated>
            ),
          },
          {
            path: RoutePath.Index,
            element: <HomePage />,
          },
          {
            path: 'about',
            element: (
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            ),
          },
          {
            path: RoutePath.Home,
            element: <Navigate to={RoutePath.Index} replace />,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
