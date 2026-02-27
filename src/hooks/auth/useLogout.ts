import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { logout } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { AuthService } from '@/services/auth';

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.SIGN_OUT],
    mutationFn: AuthService.signOut,
    onSuccess: () => {
      dispatch(logout());

      toast.success('Logout realizado com sucesso!');
      navigate('/autenticacao/login');
    },
    onError: () => {
      dispatch(logout());
      navigate('/autenticacao/login');
    },
  });

  const onSubmit = async () => {
    await mutateAsync();
  };

  return { onSubmit, isPending };
};
