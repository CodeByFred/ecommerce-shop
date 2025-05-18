import classes from "./Button.module.scss";

const Button = ({
  children,
  onSelect,
  isSelected,
  disabled = false,
  variant = "transparent",
}) => {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`${classes.button} ${classes[variant]} ${
        isSelected ? classes.active : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
