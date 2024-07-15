export const getAllProducts = async () => {
  try {
    const fetchProducts = await fetch(`http://localhost:8090/api/product/all`);
    return await fetchProducts.json();
  } catch (error) {
    throw new Error("Error at fetch date.");
  }
};
