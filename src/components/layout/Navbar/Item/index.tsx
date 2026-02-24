import type React from 'react';

import { Link } from 'react-router-dom';

interface ItemProps {
  to: string;
  children: React.ReactNode;
  handleMenuOpen: (prev: boolean) => void;
}

const Item = ({ to, children, handleMenuOpen }: ItemProps) => {
  return (
    <li>
      <Link
        className="hover:text-primary transition-colors duration-300 ease-in"
        to={to}
        onClick={() => handleMenuOpen(false)}
      >
        {children}
      </Link>
    </li>
  );
};

export default Item;
