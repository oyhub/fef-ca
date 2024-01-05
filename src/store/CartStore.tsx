import { create } from 'zustand';
import { Data } from '../components/api/getData/getData.tsx';

export type CartStoreState = {
  cart: Data[];
  count: number;
  addToCart: (product: Data) => void;
  removeFromCart: (product: Data) => void;
  clearCart: () => void;
};

const cartStoreKey = 'cartData';
const getSavedCart = () => {
  const savedCart = localStorage.getItem(cartStoreKey);
  return savedCart ? JSON.parse(savedCart) : { cart: [], count: 0 };
};

export const useCartStore = create<CartStoreState>((set) => ({
  ...getSavedCart(),
  addToCart: (product) => set((state) => {
    const newState = {
      cart: [...state.cart, product],
      count: state.count + 1,
    };
    localStorage.setItem(cartStoreKey, JSON.stringify(newState));
    return newState;
  }),
  removeFromCart: (product) => set((state) => {
    const index = state.cart.findIndex(p => p.id === product.id);
    if (index === -1) return state;

    const newCart = [...state.cart];
    newCart.splice(index, 1);

    const newState = {
      cart: newCart,
      count: state.count - 1
    };
    localStorage.setItem(cartStoreKey, JSON.stringify(newState));
    return newState;
  }),
  clearCart: () => set (() => {
    const newState = {
      cart: [],
      count: 0
    };
    localStorage.setItem(cartStoreKey, JSON.stringify(newState));
    return newState;
  })
}));

export default useCartStore;