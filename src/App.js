import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';
import { FoodDialog } from './components/FoodDialog';
import { Order } from './components/Order';

function App() {
  const [openFood, setOpenFood] = useState('');

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
