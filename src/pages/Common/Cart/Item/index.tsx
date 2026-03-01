import type { CartItem } from '@/@types/cart-item';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { formatCurrency } from '@/utils/formatCurrency';
import { Minus, Plus, Trash } from 'lucide-react';

import ButtonIcon from '@/components/ui/ButtonIcon';

const Item = ({ product }: { product: CartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className="grid h-30 w-full grid-cols-5 rounded-sm shadow-2xl shadow-black/5 sm:grid-cols-6">
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-30 rounded-sm object-cover object-center"
        />
      </td>
      <td className="hidden p-2 text-sm sm:flex sm:text-base">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-primary-text line-clamp-2 overflow-hidden text-center leading-4 font-normal">
            {product.name}
          </span>
        </div>
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        {formatCurrency(product.price)}
      </td>
      <td className="flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-sm p-2 text-sm sm:text-base">
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
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        {formatCurrency(product.price * product.quantity)}
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        <button
          onClick={() => dispatch(removeItem(product.id))}
          type="button"
          className="group"
        >
          <Trash
            size={20}
            className="ease transition-all duration-200 group-hover:scale-110 group-hover:text-red-500"
          />
        </button>
      </td>
    </tr>
  );
};

export default Item;
