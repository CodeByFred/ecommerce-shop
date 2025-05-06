import classes from "./Title.module.scss";

const Title = ({ children }) => {
  return <h1 className={classes.heading}>{children}</h1>;
};

export default Title;
