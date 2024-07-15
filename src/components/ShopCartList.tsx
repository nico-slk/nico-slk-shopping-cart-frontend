import { Product } from '../screens/HomeScreen';
import Button from './Button';
import Card from './Card';

interface Props {
  products: Product[];
}

const ShopCartList = ({ products }: Props) => {
  return (
    <div className='cart_bar'>
      {products.map((product: Product) => <Card product={product} />)}
      <Button />
    </div>
  );
};

export default ShopCartList;
