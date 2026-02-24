import { Minus, Plus, Trash } from 'lucide-react';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';

const Item = () => {
  return (
    <div className="group grid h-28 w-full shrink-0 grid-cols-6 grid-rows-1 overflow-hidden rounded-sm shadow-sm transition-all duration-300 hover:scale-105">
      <div className="col-span-2 h-full w-full overflow-hidden p-1">
        <img
          src="https://img.freepik.com/fotos-gratis/jovem-mulher-bonita-morena-posando-em-fundo-de-marmore-bege-vestindo-shorts-de-linho-bege-bolsa-luxuosa-de-couro-caramelo-camisa-branca-e-acessorios-de-ouro-roupa-de-estilo-de-rua_291049-1753.jpg?semt=ais_hybrid&w=740&q=80"
          alt="..."
          className="h-full w-full rounded-sm object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div className="col-span-3 flex h-full flex-col justify-between p-2">
        <p className="text-primary-text line-clamp-2 text-[14px] leading-5 font-medium text-ellipsis">
          Produto Produto Produto Produto Produto Produto Produto Produto
        </p>
        <p>R$ 0,00</p>
        <div className="flex items-center gap-2">
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
        </div>
      </div>

      <Button className="col-span-1 self-start py-2">
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
