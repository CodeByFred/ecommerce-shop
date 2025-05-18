import classes from "./CartItem.module.scss";
import DecrementIncrement from "../DecrementIncrement/DecrementIncrement";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className={classes.wrapper}>
      <div className={classes.image_container}>
        <img className={classes.image} src={item.img_url} alt="" />
      </div>
      <div className={classes.product_details}>
        <p>
          <strong>{item.name}</strong>
        </p>
        <p>{item.variant}</p>
        <div className={classes.price_quantity}>
          <DecrementIncrement itemKey={item.key} />
          <p>
            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
