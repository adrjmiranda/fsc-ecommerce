import type { RootState } from '..';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartQuantity = (state: RootState) => state.cart.quantity;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;

export const selectCartTotalFormatted = (state: RootState) => {
  return state.cart.total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
