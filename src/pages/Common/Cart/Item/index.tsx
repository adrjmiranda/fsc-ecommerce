import { Minus, Plus, Trash } from 'lucide-react';

import ButtonIcon from '@/components/ui/ButtonIcon';

const Item = () => {
  return (
    <tr className="grid h-30 w-full grid-cols-5 rounded-sm shadow-2xl shadow-black/5 sm:grid-cols-6">
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        <img
          src="https://texcotton.cdn.magazord.com.br/img/2025/07/produto/78365/r5447-bg0009-03.jpg?ims=450x600"
          alt="..."
          className="h-full w-30 rounded-sm object-cover object-center"
        />
      </td>
      <td className="hidden p-2 text-sm sm:flex sm:text-base">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-primary-text line-clamp-2 overflow-hidden text-center leading-4 font-normal">
            Produto Produto Produto Produto Produto Produto Produto Produto
          </span>
        </div>
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        R$ 100,00
      </td>
      <td className="flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        <button className="bg-secondary rounded-sm p-0.5">
          <ButtonIcon
            Icon={Minus}
            fill={false}
            baseColor="default"
            hoverColor="primary"
          />
        </button>
        <span className="text-primary-text rounded-sm p-0.5">1</span>
        <button type="button" className="bg-secondary rounded-sm p-0.5">
          <ButtonIcon
            Icon={Plus}
            fill={false}
            baseColor="default"
            hoverColor="primary"
          />
        </button>
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        R$ 100,00
      </td>
      <td className="flex h-full w-full items-center justify-center overflow-hidden rounded-sm p-2 text-sm sm:text-base">
        <button type="button" className="group">
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
