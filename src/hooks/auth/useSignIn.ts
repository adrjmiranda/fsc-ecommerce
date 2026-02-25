import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { signInSchema } from '@/schemas/auth';

const useSignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof signInSchema>) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};

export { useSignIn };
