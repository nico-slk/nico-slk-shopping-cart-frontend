
export const createCart = async (body: unknown) => {
  try {
    const fetchCart = await fetch(`localhost:8090/api/cart/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await fetchCart.json();
  } catch (error) {
    throw new Error("Error at create cart.");
  }
};
