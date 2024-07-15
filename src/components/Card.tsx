import { Product } from '../screens/HomeScreen';

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  return (
    <div key={product.id} className='card'>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
};

export default Card;
