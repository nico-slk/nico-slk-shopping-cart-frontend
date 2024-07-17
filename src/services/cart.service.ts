import { ToBuy } from '../utils/util';

export const createCart = async (body: ToBuy) => {
  try {
    const fetchCart = await fetch(`http://localhost:8090/api/cart/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await fetchCart.json();
  } catch (error) {
    throw new Error("Error at create cart." + error);
  }
};
