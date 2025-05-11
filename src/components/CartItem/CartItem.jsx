import classes from "./CartItem.module.scss";
import image from "../../assets/image2.jpg";
import DecrementIncrement from "../DecrementIncrement/DecrementIncrement";

const CartItem = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image_container}>
        <img className={classes.image} src={image} alt="" />
      </div>
      <div className={classes.product_details}>
        <p>
          <strong>Duke Skywalker</strong>
        </p>
        <p>Variant</p>
        <div className={classes.price_quantity}>
          <DecrementIncrement />
          <p>
            <strong>$10.99</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
