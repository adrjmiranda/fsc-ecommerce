import { selectCartTotalFormatted } from '@/store/cart/selectors';
import { closeCart } from '@/store/cart/slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';

const Footer = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectCartTotalFormatted);

  return (
    <div className="flex shrink-0 flex-col gap-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-primary-text text-xl font-medium">Subtotal</p>
        <p>{total}</p>
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
