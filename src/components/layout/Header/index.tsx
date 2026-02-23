import { Circle, Heart, SearchIcon, ShoppingCart, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import FormInput from '@/components/ui/Form/FormInput';
import Logo from '@/components/ui/Logo';

const Header = () => {
  return (
    <header>
      {/* TOPBAR */}
      <div className="border-b border-gray-200">
        <div className="wrapper">
          <div className="flex items-center justify-between py-10">
            <form className="flex w-fit flex-1/5 grow-0 items-center gap-2">
              <label htmlFor="search">
                <SearchIcon size={16} />
              </label>
              <FormInput
                type="search"
                name="search"
                id="search"
                placeholder="Buscar"
                className="w-full"
              />
            </form>

            <Logo />

            <div className="flex flex-1/5 grow-0 items-center justify-end gap-4">
              <Button type="button">
                <Link to="/login">
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
              <Button type="button" className="relative">
                <ButtonIcon
                  Icon={ShoppingCart}
                  fill
                  baseColor="default"
                  hoverColor="primary"
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

      {/* NAVBAR */}
      <nav className="h-20">
        <div className="flex h-full items-center">
          <div className="wrapper">
            <ul className="flex items-center justify-center gap-8 text-sm font-normal uppercase">
              <li>
                <Link
                  className="hover:text-primary transition-colors duration-300 ease-in"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors duration-300 ease-in"
                  to="/categorias"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors duration-300 ease-in"
                  to="/sobre"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors duration-300 ease-in"
                  to="/contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
