import { useEffect, useState } from 'react';
import { Product } from '../screens/HomeScreen';
import { useStore } from '../store';
import { CartObj, formatToBuy, setCart } from '../utils/util';
import Button from './Button';
import ShopCartCard from './ShopCartCard';

const ShopCartList = () => {
  const { productsInCart, userDataFetch, specialDate, removeProductFromCart, clearCart, finishBuy } = useStore();
  const [productCartFormated, setproductCartFormated] = useState<CartObj>();

  const handleBuy = () => {
    if (productCartFormated) {
      const formatCartToBuy = formatToBuy(productCartFormated, userDataFetch.id);
      finishBuy(formatCartToBuy);
    }
  };

  useEffect(() => {

    let status: null | 'vip' | 'special date' = null;

    if (userDataFetch.vip) {
      status = 'vip';
    }

    if (specialDate.name) {
      status = 'special date';
    }

    if (productsInCart) {
      setproductCartFormated(setCart(productsInCart, status));
    }

  }, [productsInCart, specialDate, userDataFetch]);


  return (
    <div className='cart_bar'>
      <div className='cart_bar_list'>
        {productCartFormated?.products.map((productObj: Product, index: number) => <ShopCartCard product={productObj} removeProductFromCart={removeProductFromCart} key={productObj.id + index} />)}
      </div>
      <div className='button_container'>
        <div className='bonif_container'>
          <p>Bonificacion:</p>
          {
            productsInCart.length === 4
              ? <p>-%{productCartFormated?.bonif || 0}</p>
              : <p>-${productCartFormated?.bonif || 0}</p>
          }
        </div>
        <div className='bonif_container'>
          <p>TOTAL: </p><p>-${productCartFormated?.total || 0}</p>
        </div>
        <Button
          fn={handleBuy}
          class_name='global_button finish'
          value='Comprar'
        />
        <button
          className='global_button clear'
          onClick={() => clearCart()}
        >Limpiar carrito</button>
      </div>
    </div>
  );
};

export default ShopCartList;
