import classes from "./DecrementIncrement.module.scss";
import Button from "../../components/Button/Button";

const DecrementIncrement = () => {
  return (
    <div className={classes.container}>
      <Button>-</Button>
      <p>1</p>
      <Button>+</Button>
    </div>
  );
};
export default DecrementIncrement;
