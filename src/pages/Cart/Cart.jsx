import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import CartItem from "../../components/CartItem/CartItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);
  const cartQuantity = items.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <Title>My Shopping Cart</Title>
      {/* The total quantity of items in cart displayed below */}
      <Subtitle>{cartQuantity} Total Item(s)</Subtitle>
      {/* Each item BY VARIANT displayed on the page */}
      {cartQuantity > 0 ? (
        items.map((item, index) => <CartItem key={index} item={item} />)
      ) : (
        <p>No items in cart</p>
      )}
      {/* Details of the cost displayed below */}
      <CartTotal />
      <Button variant="action">Pay Now</Button>
    </>
  );
};
export default Cart;
