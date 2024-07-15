import { Product } from '../screens/HomeScreen';

interface Props {
  product: Product;
}


const ShopCartCard = ({ product }: Props) => {
  return (
    <div key={product.id} className='shop_card'>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
};

export default ShopCartCard;
