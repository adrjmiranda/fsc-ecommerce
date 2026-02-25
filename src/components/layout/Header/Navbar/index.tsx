import { useState } from 'react';

import { TextAlignJustify } from 'lucide-react';

import Item from './Item';

const items = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/categorias',
    label: 'Categorias',
  },
  {
    to: '/sobre',
    label: 'Sobre',
  },
  {
    to: '/contato',
    label: 'Contato',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="h-16 sm:h-20">
      <div className="flex h-full items-center">
        <div className="wrapper w-full">
          <div className="flex w-full justify-end sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <TextAlignJustify size={28} />
            </button>
          </div>

          <ul
            className={`${isMenuOpen ? 'top-60 opacity-100' : '-top-60 opacity-0'} absolute z-50 w-[calc(100vw-(--spacing(4)))] flex-col items-center justify-center gap-8 rounded-sm bg-white p-4 text-sm font-normal uppercase transition-all duration-300 ease-in sm:static sm:top-0 sm:flex sm:w-full sm:flex-row sm:rounded-none sm:bg-transparent sm:p-0 sm:opacity-100`}
          >
            {items.map((item) => (
              <Item key={item.to} to={item.to} handleMenuOpen={setIsMenuOpen}>
                {item.label}
              </Item>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
