import { closeCart } from '@/store/cart/slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { createPortal } from 'react-dom';

import Footer from './Footer';
import Header from './Header';
import List from './List';

const Cart = () => {
  const { isCartOpen } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const cartRoot = document.getElementById('cart-root') as HTMLDivElement;

  return createPortal(
    isCartOpen ? (
      <div className="fixed inset-0 z-50 flex h-full w-full bg-black/50">
        <div
          className="flex h-full w-full"
          onClick={() => dispatch(closeCart())}
        ></div>
        <div className="ml-auto flex h-full w-full flex-col rounded-sm bg-white px-6 py-4 sm:w-148">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    ) : (
      <></>
    ),
    cartRoot,
  );
};

export default Cart;
