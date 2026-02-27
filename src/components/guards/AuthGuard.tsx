import {
  selectCurrentUser,
  selectIsAuthenticating,
} from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate, Outlet } from 'react-router-dom';

import LoadingScreen from '@/components/ui/LoadingScreen';

const AuthGuard = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isAuthenticating = useAppSelector(selectIsAuthenticating);

  if (isAuthenticating) {
    return <LoadingScreen />;
  }

  if (!currentUser) {
    return <Navigate to="/autenticacao/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
