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

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  };
}

const toppingsList = [
  'Extra Cheese',
  'Pepperoni',
  'Sausage',
  'Onions',
  'Peppers',
  'Pineapple',
  'Ham',
  'Spinach',
  'Artichokes',
  'Mushrooms',
  'Anchovies'
];

function getDefaultToppings() {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }));
}

export function useChoice(defaultChoice) {
  const [value, setValue] = useState(defaultChoice);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange
  };
}
