import classes from "./CartItem.module.scss";
import DecrementIncrement from "../DecrementIncrement/DecrementIncrement";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

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
      <span onClick={() => removeItem(item.key)} className={classes.delete}>
        x
      </span>
    </div>
  );
};
export default CartItem;
