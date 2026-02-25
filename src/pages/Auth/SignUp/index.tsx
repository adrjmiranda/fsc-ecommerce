import { Store, UserPlus } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button';
import Field from '@/components/ui/Form/Field';

import { useSignUp } from '@/hooks/auth/useSignUp';

const SignUp = () => {
  const { form, onSubmit } = useSignUp();

  const navigate = useNavigate();

  return (
    <>
      <section className="flex min-h-screen py-20">
        <div className="wrapper flex-1">
          <div className="flex h-full items-center justify-center">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-120 flex-col gap-4 rounded-sm p-6 shadow-2xl ring-1 shadow-black/10 ring-gray-100"
            >
              <h1 className="text-center text-xl font-semibold">
                Crie a sua conta
              </h1>

              <Button type="button" variant="primary">
                <FaGoogle />
                Criar conta com o Google
              </Button>

              <p className="text-center text-sm">
                Ou crie sua conta com o e-mail
              </p>

              <hr className="h-px text-gray-400" />

              <Field
                labelProps={{
                  htmlFor: 'name',
                  label: 'Nome',
                }}
                inputProps={{
                  ...form.register('name'),
                  type: 'text',
                  name: 'name',
                  id: 'name',
                  placeholder: 'Digite seu nome',
                }}
                errorMessage={form.formState.errors.name?.message}
              />

              <Field
                labelProps={{
                  htmlFor: 'email',
                  label: 'E-mail',
                }}
                inputProps={{
                  ...form.register('email'),
                  type: 'email',
                  name: 'email',
                  id: 'email',
                  placeholder: 'Digite seu e-mail',
                }}
                errorMessage={form.formState.errors.email?.message}
              />

              <Field
                labelProps={{
                  htmlFor: 'password',
                  label: 'Senha',
                }}
                inputProps={{
                  ...form.register('password'),
                  type: 'password',
                  name: 'password',
                  id: 'password',
                  placeholder: 'Digite sua senha',
                }}
                errorMessage={form.formState.errors.password?.message}
              />

              <Field
                labelProps={{
                  htmlFor: 'confirmPassword',
                  label: 'Confirmar senha',
                }}
                inputProps={{
                  ...form.register('confirmPassword'),
                  type: 'password',
                  name: 'confirmPassword',
                  id: 'confirmPassword',
                  placeholder: 'Digite sua senha',
                }}
                errorMessage={form.formState.errors.confirmPassword?.message}
              />

              <Button type="submit" variant="primary">
                <UserPlus size={16} />
                Registrar
              </Button>

              <p className="text-center text-sm">
                Já possui uma conta?{' '}
                <Link to="/autenticacao/login" className="text-primary">
                  Entre
                </Link>
              </p>

              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/')}
              >
                <Store size={16} />
                Continuar Comprando
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
