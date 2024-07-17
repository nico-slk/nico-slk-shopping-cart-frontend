import { useEffect } from 'react';
import Button from '../components/Button';
import CardList from '../components/CardList';
import ShopCartList from '../components/ShopCartList';
import { useStore } from '../store';

export interface Product {
  id: string,
  name: string,
  price: number,
  image: string;
}

const HomeScreen = () => {
  const { userDataFetch, specialDate, setUserFetch, generateSpecialDate } = useStore();

  useEffect(() => {
    setUserFetch(userDataFetch?.username || 'common');
  }, [userDataFetch?.username]);


  return (
    <div className='home'>
      <p>{specialDate && specialDate.name}</p>
      <div className='buttons_title_container'>
        <h1>Welcome: {userDataFetch?.username}</h1>
        <div className='buttons_users'>
          <Button
            fn={() => setUserFetch('common')}
            class_name='global_button config'
            value="Common User"
          />
          <Button
            fn={() => setUserFetch('vip')}
            class_name='global_button config'
            value="VIP User"
          />
          <Button
            fn={() => generateSpecialDate('Dia especial')}
            class_name='global_button config'
            value="Special Day"
          />
        </div>
      </div>
      <div className='home_container'>
        <div className='home_card-list_container'>
          <CardList />
        </div>
        <ShopCartList />
      </div>
    </div>
  );
};

export default HomeScreen;
