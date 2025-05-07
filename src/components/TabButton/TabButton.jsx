import classes from "./TabButton.module.scss";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? classes.active : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};
export default TabButton;
