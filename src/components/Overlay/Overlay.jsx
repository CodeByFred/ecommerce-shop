import classes from "./Overlay.module.scss";

const Overlay = ({ children }) => {
  return <div className={classes.overlay}>{children}</div>;
};

export default Overlay;
