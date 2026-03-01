import { useEffect } from 'react';

import { clearCart } from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { CheckCircle2, Home, XCircle } from 'lucide-react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/ui/Button';

const PaymentConfirmation = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const status = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCart());
    }
  }, [status, dispatch]);

  if (canceled === 'true') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="py-20">
        <div className="wrapper">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              {status === 'true' ? (
                <>
                  <CheckCircle2 size={40} calcMode="text-green-500" />
                  <p>Pagamento realizado com sucesso!</p>
                </>
              ) : (
                <>
                  <XCircle size={40} calcMode="text-red-500" />
                  <p>Pagamento falhou!</p>
                </>
              )}
            </div>

            <Link to="/">
              <Button variant="primary">
                <Home size={16} className="text-white" />
                Voltar para a loja
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentConfirmation;
