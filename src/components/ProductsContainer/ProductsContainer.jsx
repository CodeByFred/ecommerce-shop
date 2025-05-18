import { useState } from "react";
import { getProductsByCategory } from "../../api/productService.js";
import useQuery from "../../hooks/useQuery";
import Button from "../Button/Button";
import ProductWithTitle from "../ProductWithTitle/ProductWithTitle";
import "./ProductsContainer.module.scss";

const ProductsContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Books");

  function handleSelect(selectedButton) {
    setSelectedCategory(selectedButton);
  }

  const {
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
    <section>
      <h2>Shop By Category</h2>
      <menu>
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
      <div>
        {isLoading && <p>Loading...</p>}
        {isFail && <p>Something went wrong.</p>}
        {!isLoading && products?.length === 0 && <p>No products found.</p>}
        {products?.map((product) => (
          <ProductWithTitle key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default ProductsContainer;
