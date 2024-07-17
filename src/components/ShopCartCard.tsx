import { Product } from '../screens/HomeScreen';

interface Props {
  product: Product;
  removeProductFromCart: (id: string) => void;
}


const ShopCartCard = ({ product, removeProductFromCart }: Props) => {

  return (
    <div className='shop_card'>
      <h1 className='shop_card_name'>{product.name}</h1>
      <img src={product.image} alt="San Martin" className='shop_card_image' />
      <p className='shop_card_price'>${product.price}</p>
      <button
        className='shop_card_button'
        onClick={() => removeProductFromCart(product.id)}
      >Delete</button>
    </div>
  );
};

export default ShopCartCard;
