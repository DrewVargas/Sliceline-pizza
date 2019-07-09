import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton
} from './FoodDialog';

export function OrderDialog({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders
}) {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <h2>Your order is on the way!</h2>
          <p>look in your inbox for an email receipt of your order</p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog(false);
            }}
          >
            I'm still hungry
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <div />
  );
}
