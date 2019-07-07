import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';
import { FoodDialog } from './components/FoodDialog';
import { Order } from './components/Order';
import { useOpenFood, useOrders, useTitle, useAuthentication } from './Hooks';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
