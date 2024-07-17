import { Product } from '../screens/HomeScreen';

export interface CartObj {
  bonif: number,
  isSpecialDate: boolean,
  total: number,
  products: Product[];
}

export interface ToBuy {
  date: string;
  bonification: number;
  totalSpended: number;
  userId: string;
  productList: Product[];
}

export const setCart = (products: Product[], status?: null | 'vip' | 'special date') => {
  const cartObj: CartObj = {
    bonif: 0,
    isSpecialDate: false,
    total: 0,
    products: []
  };

  cartObj.products = products;
  cartObj.total = products.reduce((acc, product) => acc + product.price, 0);

  if (products.length === 4) {
    cartObj.total = cartObj.total * 0.75;
    cartObj.bonif = 25;
  }

  if (products.length > 10) {
    if (!status) {
      cartObj.total = cartObj.total - 100;
      cartObj.bonif = 100;
    }

    if (status === 'special date') {
      cartObj.total = cartObj.total - 300;
      cartObj.bonif = 300;
    }

    if (status === 'vip') {

      const cheapSpensiveProduct = products.reduce((minProduct, currentProduct) => {
        return currentProduct.price < minProduct.price ? currentProduct : minProduct;
      }, products[0]);

      cartObj.total = cartObj.total - (cheapSpensiveProduct.price - 500);
      cartObj.bonif = (cheapSpensiveProduct.price - 500);
    }
  }

  return cartObj;

};

export const formatToBuy = (productFormated: CartObj, userId: string) => {

  const toBuyObj: ToBuy = {
    userId,
    date: new Date().toLocaleString(),
    bonification: productFormated.bonif,
    totalSpended: productFormated.total,
    productList: productFormated.products.map(prod => prod)
  };

  return toBuyObj;

};
