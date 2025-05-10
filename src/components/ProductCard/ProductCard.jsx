import { useState } from "react";
import Button from "../Button/Button";
import classes from "./ProductCard.module.scss";
import Subtitle from "../Subtitle/Subtitle";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const variant = product.variants[selectedVariant];

  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img className={classes.img} src={product.img_url} alt={product.name} />
      </div>

      <div className={classes.card}>
        <h2>{product.name}</h2>

        <div>
          <Subtitle>Product Description</Subtitle>
          <p>{product.description}</p>
        </div>

        <div>
          <Subtitle>Variant</Subtitle>
          <div className={`${classes.variants} ${classes.row}`}>
            {product.variants.map((v, index) => (
              <Button
                key={v.type}
                variant="outline"
                isSelected={selectedVariant === index}
                onSelect={() => setSelectedVariant(index)}
              >
                {v.type}
              </Button>
            ))}
          </div>
        </div>

        <div className={`${classes.quantity} ${classes.row}`}>
          <Subtitle>Quantity in Stock:</Subtitle>
          <p>
            <span>{variant.quantity}</span>
          </p>
        </div>

        <div className={classes.row}>
          <p>
            <span>${variant.price}</span>
          </p>
          <Button variant="action">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
