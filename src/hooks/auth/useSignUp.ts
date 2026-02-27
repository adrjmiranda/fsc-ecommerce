import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { auth } from '@/lib/firebase';
import { login } from '@/store/auth/slice';
import { useAppDispatch } from '@/store/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
      navigate('/');
    },
    onError: (error: unknown) => {
      console.error('Registration failed: ', error);
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
