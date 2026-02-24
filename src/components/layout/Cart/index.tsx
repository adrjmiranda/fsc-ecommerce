import { createPortal } from 'react-dom';

import Footer from './Footer';
import Header from './Header';
import List from './List';

const Cart = () => {
  const cartRoot = document.getElementById('cart-root') as HTMLDivElement;

  return createPortal(
    <div className="fixed inset-0 z-50 h-full w-full bg-black/50">
      <div className="ml-auto flex h-full w-full flex-col rounded-sm bg-white px-6 py-4 sm:w-1/5">
        <Header />
        <List />
        <Footer />
      </div>
    </div>,
    cartRoot,
  );
};

export default Cart;
