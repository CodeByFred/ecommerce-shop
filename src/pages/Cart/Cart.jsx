import classes from "./Cart.module.scss";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import CartItem from "../../components/CartItem/CartItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, clearCart } = useContext(CartContext);
  const cartQuantity = items.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <Title>My Shopping Cart</Title>
      {cartQuantity > 0 ? (
        <div className={classes.row}>
          <Subtitle>{cartQuantity} Total Item(s)</Subtitle>
          <Button variant="active" onSelect={() => clearCart()}>
            Clear Cart
          </Button>
        </div>
      ) : (
        ""
      )}
      {cartQuantity > 0 ? (
        items.map((item, index) => <CartItem key={index} item={item} />)
      ) : (
        <Subtitle>No items in cart</Subtitle>
      )}
      {cartQuantity > 0 ? <CartTotal /> : ""}
      <div>{cartQuantity > 0 ? <Button variant="action">Pay Now</Button> : ""}</div>
    </>
  );
};
export default Cart;
