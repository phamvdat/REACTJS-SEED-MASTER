import { RoutePath } from 'core/constants/routes';
import { authServive } from 'core/services/auth/auth';
import { Navigate } from 'react-router-dom';

const NonAuthenticated = ({ children }: { children: React.ReactNode }) => {
  return (
    <>{!authServive.isAuthenticated() ? children : <Navigate to={RoutePath.Index} replace />}</>
  );
};

export default NonAuthenticated;
