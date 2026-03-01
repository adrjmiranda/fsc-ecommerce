import type { Product } from '@/@types/product';
import { increaseItemQuantity } from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { formatCurrency } from '@/utils/formatCurrency';

import Button from '@/components/ui/Button';

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      key={product.id}
      className="flex h-96 w-full flex-col justify-between gap-2 overflow-hidden rounded-sm p-2 ring-1 ring-gray-100"
    >
      <img
        src={product.imageUrl}
        alt={product.displayName}
        className="h-70 w-full rounded-sm object-cover object-top"
      />

      <div className="flex items-center justify-between gap-2">
        <h3 className="line-clamp-1 truncate text-base font-medium">
          {product.displayName}
        </h3>
        <p>{formatCurrency(product.price)}</p>
      </div>

      <Button
        onClick={() =>
          dispatch(
            increaseItemQuantity({
              id: product.id,
              name: product.displayName,
              price: product.price,
              imageUrl: product.imageUrl,
            }),
          )
        }
        type="button"
        variant="primary"
        className="w-full"
      >
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductCard;
