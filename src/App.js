import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
