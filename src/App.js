import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';
import { FoodDialog } from './components/FoodDialog';
import { Order } from './components/Order';
import { useOpenFood, useOrders, useTitle } from './Hooks';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
