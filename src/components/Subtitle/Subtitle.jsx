import classes from "./Subtitle.module.scss";

const Subtitle = ({ children }) => {
  return <h4 className={classes.subheading}>{children}</h4>;
};

export default Subtitle;
