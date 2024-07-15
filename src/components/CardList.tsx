import { Product } from '../screens/HomeScreen';
import Card from './Card';

interface Props {
  products: Product[];
}

const CardList = ({ products }: Props) => {
  return (
    <div className='card_list'>
      {products.map((product: Product) => <Card product={product} />)}
    </div>
  );
};

export default CardList;
