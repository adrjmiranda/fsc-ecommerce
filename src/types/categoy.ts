import type { Product } from './product';

export type Category = {
  id: string;
  name: string;
  displayName: string;
  imageUrl: string;
  products: Product[];
};
