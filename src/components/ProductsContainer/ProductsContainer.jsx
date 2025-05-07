import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import ProductWithTitle from "../ProductWithTitle/ProductWithTitle";
import "./ProductsContainer.module.scss";

const ProductsContainer = () => {
  const [selectedTopic, setSelectedTopic] = useState("books");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section>
      <h2>Shop By Category</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "books"}
          onSelect={() => handleSelect("books")}
        >
          Books
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "toys"}
          onSelect={() => handleSelect("toys")}
        >
          Toys
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "snacks"}
          onSelect={() => handleSelect("snacks")}
        >
          Snacks
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "clothing"}
          onSelect={() => handleSelect("clothing")}
        >
          Clothing
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "gift"}
          onSelect={() => handleSelect("gift")}
        >
          Gift Cards
        </TabButton>
      </menu>
      <div>
        <ProductWithTitle selectedTopic={selectedTopic} />
        <ProductWithTitle selectedTopic={selectedTopic} />
        <ProductWithTitle selectedTopic={selectedTopic} />
        <ProductWithTitle selectedTopic={selectedTopic} />
        <ProductWithTitle selectedTopic={selectedTopic} />
      </div>
    </section>
  );
};
export default ProductsContainer;
