import { create } from 'zustand';
import { Product } from './screens/HomeScreen';
import { createCart } from './services/cart.service';
import { getAllProducts } from './services/products.service';
import { genrateSpecialDate, getSpecialDate } from './services/specialDate.service';
import { getUserByName } from './services/user.service';
import { ToBuy } from './utils/util';

export interface User {
  id: string;
  username: string;
  totalSpendMonth: number;
  lastBuyDate: string;
  carts: unknown[];
  vip: boolean;
}

export interface Store {
  productsInCart: Product[];
  productList: Product[];
  specialDate: {
    id: string;
    startDate: string;
    endDate: string;
    name: string;
  };
  userDataFetch: User,
  setUserFetch: (name: string) => void;
  setProductsList: () => void;
  addProductToCart: (product: Product) => void;
  finishBuy: (product: ToBuy) => void;
  removeProductFromCart: (id: string) => void;
  clearCart: () => void;
  getSpecialDate: () => void;
  generateSpecialDate: (name: string) => void;
}

export const useStore = create<Store>((set, get) => ({
  productsInCart: [],
  productList: [],
  specialDate: {
    id: '',
    startDate: '',
    endDate: '',
    name: ''
  },
  userDataFetch: {
    id: '',
    username: '',
    totalSpendMonth: 0,
    lastBuyDate: '',
    carts: [],
    vip: false
  },
  setUserFetch: async (name: string) => {
    const thisState = get();
    try {
      const userDataFetch = await getUserByName(name);
      set({
        ...thisState,
        userDataFetch,
      });
    } catch (error) {
      throw new Error("Error al finalizar la compra");
    }
  },
  setProductsList: async () => {
    const products = await getAllProducts();
    const thisState = get();
    set({
      ...thisState,
      productList: [...products]
    });

  },
  addProductToCart: (product: Product) => {
    const thisState = get();
    set({
      ...thisState,
      productsInCart: [...thisState.productsInCart, product]
    });
  },
  removeProductFromCart: (id: string) => {
    const thisState = get();
    const toDel = thisState.productsInCart.filter(product => product.id == id);
    const updated = thisState.productsInCart.filter(product => product.id !== id);
    toDel.pop();
    set({
      ...thisState,
      productsInCart: [...updated, ...toDel]
    });
  },
  clearCart: () => {
    const thisState = get();
    set({
      ...thisState,
      productsInCart: []
    });
  },
  finishBuy: async (products: ToBuy) => {
    const thisState = get();
    try {
      await createCart(products);
      await set({
        ...thisState,
        productsInCart: [],
      });
    } catch (error) {
      throw new Error("Error al finalizar la compra");
    }
  },
  getSpecialDate: async () => {
    const thisState = get();
    try {
      const date = await getSpecialDate();
      await set({
        ...thisState,
        specialDate: date,
      });
    } catch (error) {
      throw new Error("Error al obtener la fecha especial");
    }
  },
  generateSpecialDate: async (name: string) => {
    const thisState = get();
    try {
      const date = await genrateSpecialDate({
        startDate: new Date().toLocaleString(),
        name,
      });
      await set({
        ...thisState,
        specialDate: date,
      });
    } catch (error) {
      throw new Error("Error al generar la fecha especial");
    }
  }
}));
