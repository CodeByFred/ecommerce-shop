import classes from "./CartTotal.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartTotal = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2);
  const subTotal = (total * 0.9).toFixed(2);
  const salesTax = (total * 0.1).toFixed(2);

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <p>Subtotal:</p>
        <p>${subTotal}</p>
      </div>
      <div className={classes.row}>
        <p>Sales Tax:</p>
        <p>${salesTax}</p>
      </div>
      <div className={classes.row}>
        <p>Shipping:</p>
        <p>Free</p>
      </div>
      <div className={classes.row}>
        <p>Total:</p>
        <p>
          <strong>${total}</strong>
        </p>
      </div>
    </div>
  );
};
export default CartTotal;
