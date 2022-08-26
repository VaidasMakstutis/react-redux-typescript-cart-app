import React from "react";
import { addItem, deleteItem } from "../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/types";

const Cart = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  return (
    <div className="text-center mt-4">
      <h2 className="mb-4">Number of items in Cart: {state.numOfItems}</h2>
      <button className="btn btn-primary mx-2" onClick={() => dispatch(addItem())}>
        Add item to Cart
      </button>
      <button className="btn btn-danger" disabled={state.numOfItems > 0 ? false : true} onClick={() => dispatch(deleteItem())}>
        Delete item from Cart
      </button>
    </div>
  );
};

export default Cart;
