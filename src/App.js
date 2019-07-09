import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';
import { FoodDialog } from './components/FoodDialog';
import { Order } from './components/Order';
import {
  useOpenFood,
  useOrders,
  useTitle,
  useAuthentication,
  useOrderDialog
} from './Hooks';
import { OrderDialog } from './components/OrderDialog';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
