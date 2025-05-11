import classes from "./CartTotal.module.scss";

const CartTotal = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <p>Subtotal:</p>
        <p>$10.99</p>
      </div>
      <div className={classes.row}>
        <p>Sales Tax:</p>
        <p>$10.99</p>
      </div>
      <div className={classes.row}>
        <p>Shipping:</p>
        <p>Free</p>
      </div>
      <div className={classes.row}>
        <p>Total:</p>
        <p>
          <strong>$10.99</strong>
        </p>
      </div>
    </div>
  );
};
export default CartTotal;
