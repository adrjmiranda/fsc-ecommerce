import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { auth } from '@/lib/firebase';
import { login } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { getFirebaseAuthErrorMessage } from '@/utils/getFirebaseAuthErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as z from 'zod';

import { AuthService } from '@/services/auth';

import { signInSchema } from '@/schemas/auth';

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.SIGN_IN],
    mutationFn: AuthService.signIn,
    onSuccess: () => {
      const user = auth.currentUser;

      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      }

      form.reset();
      toast.success('Login realizado com sucesso!');
      navigate('/');
    },
    onError: (error: unknown) => {
      const errorMessage = getFirebaseAuthErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const signInData = {
      email: data.email,
      password: data.password,
    };
    await mutateAsync(signInData);
  };

  return {
    form,
    onSubmit,
    isPending,
  };
};

export { useSignIn };
