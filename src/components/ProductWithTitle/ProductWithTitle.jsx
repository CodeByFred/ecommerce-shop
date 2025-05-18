import classes from "./ProductWithTitle.module.scss";
import { Link } from "react-router";

const ProductWithTitle = ({ product, onSelect }) => {
  return (
    <div className={classes.content}>
      <span
        className={`${classes.outline} ${product.favourite ? classes.heart : ""} `}
        onClick={onSelect}
      >
        &hearts;
      </span>

      <Link to={`/product/${product.id}`} className={classes.link}>
        <div className={classes.image_container}>
          <img className={classes.image} src={product.img_url} alt={product.name} />
        </div>

        <div className={classes.title}>
          <p>{product.name}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProductWithTitle;
