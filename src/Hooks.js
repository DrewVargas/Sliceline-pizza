import { useState, useEffect } from 'react';

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

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `What's for dinner?`
          : `[${orders.length}] items in your order!`;
    }
  });
}

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  function onChange(e) {
    if (!(+e.target.value >= 1 && +e.target.value <= 20)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  }

  return {
    value,
    setValue,
    onChange
  };
}
