import classes from "./Button.module.scss";

const Button = ({ children, onSelect, isSelected, variant = "transparent" }) => {
  return (
    <button
      onClick={onSelect}
      className={`${classes.button} ${classes[variant]} ${
        isSelected ? classes.active : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
