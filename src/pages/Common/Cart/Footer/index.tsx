import {
  selectCartItems,
  selectCartTotalFormatted,
} from '@/store/cart/selectors';
import { useAppSelector } from '@/store/hooks';
import { Loader2, ShoppingBag } from 'lucide-react';

import Button from '@/components/ui/Button';

import { useCheckout } from '@/hooks/checkout/useCheckout';

const Footer = () => {
  const total = useAppSelector(selectCartTotalFormatted);
  const items = useAppSelector(selectCartItems);
  const { handleCheckout, isPending } = useCheckout({ items });

  return (
    <tfoot className="text-primary-text w-full rounded-sm p-2 ring-1 ring-gray-100">
      <tr className="grid w-full grid-cols-5 items-center sm:grid-cols-6">
        <th className="text-sm font-medium sm:text-base"></th>
        <th className="hidden text-sm font-medium sm:flex sm:text-base"></th>
        <th className="text-sm font-medium sm:text-base"></th>
        <th className="text-sm font-bold sm:text-base">Subtotal</th>
        <th className="text-sm font-medium sm:text-base">{total}</th>
        <th className="text-sm font-medium sm:text-base">
          <Button
            disabled={isPending}
            onClick={handleCheckout}
            variant="primary"
            className="w-full text-xs min-[480px]:text-sm"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <ShoppingBag size={20} className="hidden lg:block" />
                Continuar
              </>
            )}
          </Button>
        </th>
      </tr>
    </tfoot>
  );
};

export default Footer;
