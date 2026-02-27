import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { auth } from '@/lib/firebase';
import { login } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { getFirebaseAuthErrorMessage } from '@/utils/getFirebaseAuthErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import type { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as z from 'zod';

import { AuthService } from '@/services/auth';

import { signUpSchema } from '@/schemas/auth';

const useSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.SIGN_UP],
    mutationFn: AuthService.signUp,
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
      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    },
    onError: (error: unknown) => {
      const errorMessage = getFirebaseAuthErrorMessage(error);

      if ((error as FirebaseError)?.code === AuthErrorCodes.EMAIL_EXISTS) {
        form.setError('email', { message: errorMessage });
        return;
      }

      toast.error(errorMessage);
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const signUpData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await mutateAsync(signUpData);
  };

  return { form, onSubmit, isPending };
};

export { useSignUp };
