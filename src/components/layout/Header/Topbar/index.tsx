import { openCart } from '@/store/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { Circle, Heart, SearchIcon, ShoppingCart, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Input from '@/components/ui/Form/Input';
import Logo from '@/components/ui/Logo';

const Topbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-detail">
      <div className="wrapper">
        <div className="grid grid-cols-2 items-center justify-between gap-10 py-10 sm:flex sm:gap-0">
          <form className="order-2 flex w-fit flex-1/5 grow-0 items-center gap-2 sm:order-1">
            <label htmlFor="search">
              <SearchIcon size={16} />
            </label>
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Buscar"
              className="w-full"
            />
          </form>

          <div className="order-1 col-span-2 sm:order-2">
            <Logo />
          </div>

          <div className="7xl:pr-0 order-3 flex flex-1/5 grow-0 items-center justify-end gap-4 pr-6 sm:order-3">
            <Button type="button">
              <Link to="/autenticacao/login">
                <ButtonIcon
                  Icon={User2}
                  fill
                  baseColor="default"
                  hoverColor="primary"
                />
              </Link>
            </Button>
            <Button type="button">
              <ButtonIcon
                Icon={Heart}
                fill={false}
                baseColor="default"
                hoverColor="primary"
              />
            </Button>
            <Button
              type="button"
              className="relative"
              onClick={() => dispatch(openCart())}
            >
              <ButtonIcon
                Icon={ShoppingCart}
                fill
                baseColor="default"
                hoverColor="secondary"
              />
              <div className="absolute -top-2 -right-2 h-fit w-fit">
                <Circle
                  className="text-primary fill-primary absolute inset-0 z-0 -translate-1/2 rounded-full"
                  fill="black"
                  size={28}
                />
                <span className="absolute top-1/2 left-1/2 z-10 -translate-1/2 text-center text-xs font-medium text-white">
                  25
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
