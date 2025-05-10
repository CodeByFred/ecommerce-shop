import classes from "./ProductWithTitle.module.scss";

const ProductWithTitle = ({ product }) => {
  return (
    <div className={classes.content}>
      <div className={classes.image_container}>
        <img className={classes.image} src={product.img_url} alt={product.name} />
      </div>
      <div className={classes.title}>
        <p>{product.name}</p>
      </div>
    </div>
  );
};
export default ProductWithTitle;
