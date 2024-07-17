import { useEffect, useState } from 'react';
import { Product } from '../screens/HomeScreen';
import { useStore } from '../store';
import Card from './Card';



const CardList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { productList, setProductsList, addProductToCart } = useStore();

  useEffect(() => {
    setProductsList();
    setProducts(productList);
  }, [productList.length]);

  return (
    <div className='card_list'>
      {products.map((product: Product) => <Card product={product} addProductToCart={addProductToCart} key={product.id} />)}
    </div>
  );
};

export default CardList;
