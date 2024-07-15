import { Product } from '../screens/HomeScreen';
import Button from './Button';
import ShopCartCard from './ShopCartCard';

interface Props {
  products: Product[];
}

const ShopCartList = ({ products }: Props) => {
  return (
    <div className='cart_bar'>
      <div className='cart_bar_list'>
        {products.map((product: Product) => <ShopCartCard product={product} />)}
      </div>
      <div className='button_container'>
        <Button />
      </div>
    </div>
  );
};

export default ShopCartList;
