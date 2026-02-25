import { LogIn, Store } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button';
import Field from '@/components/ui/Form/Field';

import { useSignIn } from '@/hooks/auth/useSignIn';

const SignIn = () => {
  const { form, onSubmit } = useSignIn();

  const navigate = useNavigate();

  return (
    <>
      <section className="flex min-h-screen py-20">
        <div className="wrapper flex-1">
          <div className="flex h-full items-center justify-center">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-108 flex-col gap-4 rounded-sm p-6 shadow-2xl ring-1 shadow-black/10 ring-gray-100"
            >
              <h1 className="text-center text-xl font-semibold">
                Entre com a sua conta
              </h1>

              <Button type="button" variant="primary">
                <FaGoogle />
                Entrar com o Google
              </Button>

              <p className="text-center text-sm">Ou entre com o seu e-mail</p>

              <hr className="h-px text-gray-400" />

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

              <Button type="submit" variant="primary">
                <LogIn size={16} />
                Entrar
              </Button>

              <p className="text-center text-sm">
                Ainda não possui uma conta?{' '}
                <Link to="/autenticacao/cadastro" className="text-primary">
                  Cadastre-se
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

export default SignIn;
