import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { login } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { getFirebaseAuthErrorMessage } from '@/utils/getFirebaseAuthErrorMessage';
import { useMutation } from '@tanstack/react-query';
import type { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { AuthService } from '@/services/auth';

const useGoogleSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.GOOGLE_SIGN_IN],
    mutationFn: AuthService.signInWithGoogle,
    onSuccess: (user: User) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      }

      toast.success('Login realizado com sucesso!');
      navigate('/');
    },
    onError: (error: unknown) => {
      const errorMessage = getFirebaseAuthErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const onSubmit = async () => {
    await mutateAsync();
  };

  return {
    onSubmit,
    isPending,
  };
};

export { useGoogleSignIn };
