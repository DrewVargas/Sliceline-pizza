import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from './FoodGrid';
import { pizzaRed } from './../styles/colors';
import { Title } from './../styles/title';
import { formatPrice } from './../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity, useToppings } from './../Hooks';
import { Toppings } from './Toppings';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 14px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  background-color: ${pizzaRed};
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

const pricePerTopping = 0.5;

export const getPrice = order => {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
};

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.Quantity);
  const closeDialog = () => {
    setOpenFood();
  };
  const toppings = useToppings(openFood.toppings);

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    closeDialog();
  };

  const hasToppings = food => {
    return food.section.includes('Pizza');
  };

  return (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3>Would you like toppings</h3>
              <Toppings {...toppings} />
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
}
