import { RoutePath } from 'core/constants/routes';
import { authServive } from 'core/services/auth/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>{authServive.isAuthenticated() ? children : <Navigate to={RoutePath.Login} replace />}</>
  );
};

export default ProtectedRoute;
