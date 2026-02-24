import { closeCart } from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { X } from 'lucide-react';

import ButtonIcon from '@/components/ui/ButtonIcon';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-detail flex shrink-0 items-center justify-between py-4">
      <h2 className="text-xl font-medium">Carrinho</h2>
      <button type="button" onClick={() => dispatch(closeCart())}>
        <ButtonIcon
          Icon={X}
          baseColor="default"
          hoverColor="primary"
          fill
          size={24}
        />
      </button>
    </div>
  );
};

export default Header;
