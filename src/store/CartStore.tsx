import { create } from 'zustand';
import { Data } from '../components/api/getData/getData.tsx';

export type CartStoreState = {
  cart: Data[];
  count: number;
  addToCart: (product: Data) => void;
  removeFromCart: (product: Data) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStoreState>((set) => ({
  cart: [],
  count: 0,
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
    count: state.count + 1,
  })),
  removeFromCart: (product) => set((state) => {
    const index = state.cart.findIndex(p => p.id === product.id);
    if (index === -1) return state;

    const newCart = [...state.cart];
    newCart.splice(index, 1);

    return {
      cart: newCart,
      count: state.count - 1
    };
  }),
  clearCart: () => set ({
    cart: [],
    count: 0
  })
}));

export default useCartStore;