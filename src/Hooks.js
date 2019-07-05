import React, { useState } from 'react';

export function useOpenFood() {
  const [openFood, setOpenFood] = useState();
  return {
    openFood,
    setOpenFood
  };
}

export function useOrders() {
  const [orders, setOrders] = useState([]);
  return {
    orders,
    setOrders
  };
}
