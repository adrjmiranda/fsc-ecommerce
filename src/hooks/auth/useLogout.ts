import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { logout } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '@/services/auth';

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.SIGN_OUT],
    mutationFn: AuthService.signOut,
    onSuccess: () => {
      dispatch(logout());

      navigate('/autenticacao/login');
    },
    onError: (error: unknown) => {
      console.error('Logout failed: ', error);
    },
  });

  const onSubmit = async () => {
    await mutateAsync();
  };

  return { onSubmit, isPending };
};
