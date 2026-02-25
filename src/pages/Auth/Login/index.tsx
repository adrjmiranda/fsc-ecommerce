import { LogIn } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

import Button from '@/components/ui/Button';
import Field from '@/components/ui/Form/Field';

const Login = () => {
  return (
    <>
      <section className="flex min-h-screen py-20">
        <div className="wrapper flex-1">
          <div className="flex h-full items-center justify-center">
            <form className="flex w-full max-w-96 flex-col gap-4 rounded-sm p-6 shadow-2xl ring-1 shadow-black/10 ring-gray-100">
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
                  type: 'email',
                  name: 'email',
                  id: 'email',
                  placeholder: 'Digite seu e-mail',
                }}
              />

              <Field
                labelProps={{
                  htmlFor: 'password',
                  label: 'Senha',
                }}
                inputProps={{
                  type: 'password',
                  name: 'password',
                  id: 'password',
                  placeholder: 'Digite sua senha',
                }}
              />

              <Button type="submit" variant="primary">
                <LogIn size={16} />
                Entrar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
