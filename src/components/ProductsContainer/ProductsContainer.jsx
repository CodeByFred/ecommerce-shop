import { useState } from "react";
import { getProductsByCategory } from "../../api/productService.js";
import useQuery from "../../hooks/useQuery";
import Button from "../Button/Button";
import ProductWithTitle from "../ProductWithTitle/ProductWithTitle";
import classes from "./ProductsContainer.module.scss";
import { updateFavourite } from "../../api/productService";

const ProductsContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Books");

  function handleSelect(selectedButton) {
    setSelectedCategory(selectedButton);
  }

  const {
    reset,
    data: products,
    isLoading,
    isFail,
  } = useQuery({
    fetchFn: getProductsByCategory,
    args: [selectedCategory],
    dependencies: [selectedCategory],
  });

  const tabs = ["Books", "Toys", "Snacks", "Clothing", "Gift Cards"];

  return (
    <section className={classes.section}>
      <h2>Shop By Category</h2>
      <menu className={classes.menu}>
        {tabs.map((tab) => (
          <li key={tab}>
            <Button
              isSelected={selectedCategory === tab}
              onSelect={() => handleSelect(tab)}
            >
              {tab}
            </Button>
          </li>
        ))}
      </menu>
      <div className={classes.container}>
        {isLoading && <p>Loading...</p>}
        {isFail && <p>Something went wrong.</p>}
        {!isLoading && products?.length === 0 && <p>No products found.</p>}
        {products?.map((product) => (
          <ProductWithTitle
            key={product.id}
            product={product}
            onSelect={() => {
              updateFavourite(product.id, product.favourite);
              reset();
            }}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductsContainer;
