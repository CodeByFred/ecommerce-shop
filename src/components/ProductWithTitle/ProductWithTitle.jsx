import classes from "./ProductWithTitle.module.scss";
import { Link } from "react-router";

const ProductWithTitle = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className={classes.link}>
      <div className={classes.content}>
        <div className={classes.image_container}>
          <img className={classes.image} src={product.img_url} alt={product.name} />
        </div>
        <div className={classes.title}>
          <p>{product.name}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProductWithTitle;
