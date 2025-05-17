import classes from "./DecrementIncrement.module.scss";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const DecrementIncrement = ({ itemKey }) => {
  const { items, updateItem } = useContext(CartContext);
  const item = items.find((item) => item.key === itemKey);
  const quantity = item?.quantity ?? 0;

  const decrement = () => {
    updateItem(itemKey, -1);
  };

  function increment() {
    updateItem(itemKey, 1);
  }

  return (
    <div className={classes.container}>
      <Button onSelect={decrement}>-</Button>
      <p>{quantity}</p>
      <Button onSelect={increment}>+</Button>
    </div>
  );
};
export default DecrementIncrement;
