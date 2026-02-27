import { selectCurrentUser } from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate, Outlet } from 'react-router-dom';

const GuestGuard = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestGuard;
