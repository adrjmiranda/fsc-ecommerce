import { closeCart } from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';

const Footer = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex shrink-0 flex-col gap-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-primary-text text-xl font-medium">Subtotal</p>
        <p>R$ 0,00</p>
      </div>
      <Link
        to="/carrinho"
        className="w-full"
        onClick={() => dispatch(closeCart())}
      >
        <Button type="button" variant="primary" className="w-full">
          Continuar
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
