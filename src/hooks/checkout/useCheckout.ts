import type { CartItem } from '@/@types/cart-item';
import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { CheckoutService } from '@/services/payment/checkout';

const useCheckout = ({ items }: { items: CartItem[] }) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MUTATION_KEYS.CHECKOUT, JSON.stringify(items)],
    mutationFn: () => CheckoutService.purchase(items),
    onSuccess: async (data) => {
      const { url } = data;
      window.location.href = url;
    },
    onError: (error: Error) => {
      toast.error(`Falha no checkout: ${error.message}`);
    },
  });

  const handleCheckout = async () => {
    await mutateAsync();
  };

  return {
    handleCheckout,
    isPending,
  };
};

export { useCheckout };
