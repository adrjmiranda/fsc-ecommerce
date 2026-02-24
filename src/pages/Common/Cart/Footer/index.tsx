import { ShoppingBag } from 'lucide-react';

import Button from '@/components/ui/Button';

const Footer = () => {
  return (
    <tfoot className="text-primary-text w-full rounded-sm p-2 ring-1 ring-gray-100">
      <tr className="grid w-full grid-cols-5 items-center sm:grid-cols-6">
        <th className="text-sm font-medium sm:text-base"></th>
        <th className="hidden text-sm font-medium sm:flex sm:text-base"></th>
        <th className="text-sm font-medium sm:text-base"></th>
        <th className="text-sm font-bold sm:text-base">Subtotal</th>
        <th className="text-sm font-medium sm:text-base">R$ 0,00</th>
        <th className="text-sm font-medium sm:text-base">
          <Button
            variant="primary"
            className="w-full text-xs min-[480px]:text-sm"
          >
            <ShoppingBag size={20} className="hidden lg:block" />
            Continuar
          </Button>
        </th>
      </tr>
    </tfoot>
  );
};

export default Footer;
