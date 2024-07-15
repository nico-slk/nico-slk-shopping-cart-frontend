import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import ShopCartList from '../components/ShopCartList';
import { getAllProducts } from '../services/products.service';

export interface Product {
  id: string,
  name: string,
  price: number,
}

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts()
      .then(prods => setProducts(prods))
      .catch(() => console.error('Error'));
  }, []);



  return (
    <div className='home'>
      <h1>HomeScreen</h1>
      <div className='home_container'>
        <div className='home_card-list_container'>
          <CardList products={products} />
        </div>
        <ShopCartList products={products} />
      </div>
    </div>
  );
};

export default HomeScreen;
