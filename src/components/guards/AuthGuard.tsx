import { selectCurrentUser } from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  if (!currentUser) {
    return <Navigate to="/autenticacao/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
