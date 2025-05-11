import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import CartItem from "../../components/CartItem/CartItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import Button from "../../components/Button/Button";

const Cart = () => {
  return (
    <>
      <Title>My Shopping Cart</Title>
      <Subtitle>1 Item(s)</Subtitle>
      <CartItem />
      <CartTotal />
      <Button variant="action">Pay Now</Button>
    </>
  );
};
export default Cart;
