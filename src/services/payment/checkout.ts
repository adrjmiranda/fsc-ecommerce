import type { CartItem } from '@/@types/cart-item';

const CheckoutService = {
  async purchase(items: CartItem[]): Promise<{ url: string }> {
    const checkoutApiUrl = import.meta.env.VITE_CHECKOUT_API_URL;

    const response = await fetch(`${checkoutApiUrl}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: items }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  },
};

export { CheckoutService };
