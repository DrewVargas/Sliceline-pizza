export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export const foodItems = [
  {
    name: 'Rectangle Pizza',
    img: '../img/rectangle-pizza.jpg',
    section: 'Pizza',
    price: 12
  },
  {
    name: 'Egg Pizza',
    img: '../img/egg-pizza.jpg',
    section: 'Specialty Pizza',
    price: 15
  },
  {
    name: 'Calzone',
    img: '../img/calzone.jpg',
    section: 'Calzone',
    price: 8
  },
  {
    name: 'Lattace Pizza',
    img: '../img/lattace-pizza.jpg',
    section: 'Specialty Pizza',
    price: 15
  },
  {
    name: 'Small Rectangle Pizza',
    img: '../img/rect-pizza.jpg',
    section: 'Pizza',
    price: 10
  },
  {
    name: 'Pepper Pizza',
    img: '../img/pepper-pizza.jpg',
    section: 'Specialty Pizza',
    price: 10
  },
  {
    name: 'Tiny Pizza',
    img: '../img/tiny-pizza.jpg',
    section: 'Pizza',
    price: 8
  },
  {
    name: 'Stuffed Pizza',
    img: '../img/stuffed-pizza.jpg',
    section: 'Specialty Pizza',
    price: 12
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
