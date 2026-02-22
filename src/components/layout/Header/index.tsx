import { Heart, SearchIcon, ShoppingCart, User2 } from 'lucide-react';
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
              <Button type="button">
                <ButtonIcon
                  Icon={ShoppingCart}
                  fill
                  baseColor="default"
                  hoverColor="primary"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav>
        <div className="wrapper">
          {/* TODO:... */}
          Navbar
        </div>
      </nav>
    </header>
  );
};

export default Header;
