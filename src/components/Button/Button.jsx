import classes from "./Button.module.scss";

const Button = ({ children, onSelect, isSelected }) => {
  return (
    <button className={isSelected ? classes.active : undefined} onClick={onSelect}>
      {children}
    </button>
  );
};

export default Button;
