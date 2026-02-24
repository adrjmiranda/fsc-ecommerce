import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CartItem } from '@/types/cart-item';

type CartState = {
  items: CartItem[];
  total: number;
  quantity: number;
  isCartOpen: boolean;
};

const initialState: CartState = {
  items: [],
  total: 0,
  quantity: 0,
  isCartOpen: false,
};

const updateCartTotals = (state: CartState) => {
  const { total, quantity } = state.items.reduce(
    (acc, item) => {
      acc.total += item.price * item.quantity;
      acc.quantity += item.quantity;

      return acc;
    },
    { total: 0, quantity: 0 },
  );

  state.total = total;
  state.quantity = quantity;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    openCart: (state) => {
      state.isCartOpen = true;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },

    clearCart: (state) => {
      state.items = [];
      updateCartTotals(state);
    },

    increaseItemQuantity: (
      state,
      action: PayloadAction<Omit<CartItem, 'quantity'>>,
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      updateCartTotals(state);
    },

    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        existingItem.quantity -= 1;
      }

      if (existingItem?.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      updateCartTotals(state);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      updateCartTotals(state);
    },
  },
});

export const {
  toggleCart,
  openCart,
  closeCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
