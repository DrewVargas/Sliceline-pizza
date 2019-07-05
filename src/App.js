import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';
import { FoodDialog } from './components/FoodDialog';

function App() {
  const [openFood, setOpenFood] = useState('');

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
