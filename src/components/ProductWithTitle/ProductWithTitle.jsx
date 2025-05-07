import classes from "./ProductWithTitle.module.scss";

const ProductWithTitle = ({ selectedTopic }) => {
  return (
    <div className={classes.content}>
      <div className={classes.image}>Image</div>
      <p>{selectedTopic}</p>
    </div>
  );
};
export default ProductWithTitle;
