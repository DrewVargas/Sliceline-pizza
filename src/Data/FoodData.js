export const foodItems = [
  {
    name: 'Rectangle Pizza',
    img: '../img/rectangle-pizza.jpg',
    section: 'Pizza'
  },
  {
    name: 'Egg Pizza',
    img: '../img/egg-pizza.jpg',
    section: 'Specialty Pizza'
  },
  {
    name: 'Calzone',
    img: '../img/banner.jpg',
    section: 'Calzone'
  },
  {
    name: 'Lattace Pizza',
    img: '../img/lattace-pizza.jpg',
    section: 'Specialty Pizza'
  },
  {
    name: 'Small Rectangle Pizza',
    img: '../img/rect-pizza.jpg',
    section: 'Pizza'
  },
  {
    name: 'Pepper Pizza',
    img: '../img/pepper-pizza.jpg',
    section: 'Specialty Pizza'
  },
  {
    name: 'Tiny Pizza',
    img: '../img/tiny-pizza.jpg',
    section: 'Pizza'
  },
  {
    name: 'Stuffed Pizza',
    img: '../img/stuffed-pizza.jpg',
    section: 'Specialty Pizza'
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
