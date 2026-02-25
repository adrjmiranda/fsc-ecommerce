import * as z from 'zod';

const signInSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

const signUpSchema = signInSchema
  .extend({
    name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export { signInSchema, signUpSchema };
