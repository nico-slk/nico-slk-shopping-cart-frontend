import { Product } from '../screens/HomeScreen';

interface Props {
  product: Product;
  addProductToCart: (product: Product) => void;
}

const Card = ({ product, addProductToCart }: Props) => {

  return (
    <div className='card'>
      <h1>{product.name}</h1>
      <img src={product.image} alt="San Martin" className='shop_card_image' />
      <p>${product.price}</p>
      <button
        className='global_button card_add_product'
        onClick={() => addProductToCart(product)}
      >+</button>
    </div>
  );
};

export default Card;
