import { useState } from "react";
import Button from "../Button/Button";
import classes from "./ProductCard.module.scss";
import image1 from "../../assets/image1.jpg";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";

const ProductCard = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  function handleSelect(selectedButton) {
    setSelectedVariant(selectedButton);
  }

  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img src={image1} alt="image1" />
      </div>

      <div className={classes.card}>
        <Title>Bat-Dad</Title>

        <div>
          <Subtitle>Product Description</Subtitle>
          <p>Wears a robe, holds a remote, and never sleeps...</p>
        </div>

        <div>
          <Subtitle>Variant</Subtitle>

          <div className={`${classes.variants} ${classes.row}`}>
            <Button
              //   variant="outline"
              isSelected={selectedVariant === "Figurine"}
              onSelect={() => handleSelect("Figurine")}
            >
              Figurine
            </Button>
            <Button
              //   variant="outline"
              isSelected={selectedVariant === "Remote Included Edition"}
              onSelect={() => handleSelect("Remote Included Edition")}
            >
              Remote Included Edition
            </Button>
          </div>
        </div>

        <div className={`${classes.quantity} ${classes.row}`}>
          <Subtitle>Quantity in Stock:</Subtitle>
          <p>
            <span>25</span>
          </p>
        </div>

        <div className={classes.row}>
          <p>
            <span>$19.99</span>
          </p>
          <Button variant="action">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
