import type { CartItem } from '@/@types/cart-item';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { formatCurrency } from '@/utils/formatCurrency';
import { Minus, Plus, Trash } from 'lucide-react';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';

const Item = ({ product }: { product: CartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="group grid h-28 w-full shrink-0 grid-cols-6 grid-rows-1 overflow-hidden rounded-sm shadow-sm transition-all duration-300 hover:scale-105">
      <div className="col-span-2 h-full w-full overflow-hidden p-1">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full rounded-sm object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div className="col-span-3 flex h-full flex-col justify-between p-2">
        <p className="text-primary-text line-clamp-2 text-[14px] leading-5 font-medium text-ellipsis">
          {product.name}
        </p>
        <p>{formatCurrency(product.price)}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseItemQuantity(product.id))}
            className="bg-secondary rounded-sm p-0.5"
          >
            <ButtonIcon
              Icon={Minus}
              fill={false}
              baseColor="default"
              hoverColor="primary"
            />
          </button>
          <span className="text-primary-text rounded-sm p-0.5">
            {product.quantity}
          </span>
          <button
            onClick={() =>
              dispatch(
                increaseItemQuantity({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imageUrl: product.imageUrl,
                }),
              )
            }
            type="button"
            className="bg-secondary rounded-sm p-0.5"
          >
            <ButtonIcon
              Icon={Plus}
              fill={false}
              baseColor="default"
              hoverColor="primary"
            />
          </button>
        </div>
      </div>

      <Button
        onClick={() => dispatch(removeItem(product.id))}
        className="col-span-1 self-start py-2"
      >
        <ButtonIcon
          Icon={Trash}
          fill={false}
          baseColor="default"
          hoverColor="primary"
        />
      </Button>
    </div>
  );
};

export default Item;
