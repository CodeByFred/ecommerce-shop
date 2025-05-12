import classes from "./Carousel.module.scss";
import useQuery from "../../hooks/useQuery";
import { useState } from "react";
import { getFeaturedProducts } from "../../api/getProducts";

const Carousel = () => {
  const {
    data: products,
    isLoading,
    isFail,
  } = useQuery({
    fetchFn: getFeaturedProducts,
    dependencies: [],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) return <p>Loading featured products...</p>;
  if (isFail || !products || products.length === 0) return <p>No featured products.</p>;

  return (
    <div className={classes.carousel}>
      <div
        className={classes.track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div className={classes.slide} key={product.id}>
            <img className={classes.image} src={product.img_url} alt={product.name} />
          </div>
        ))}
      </div>

      {products.length > 1 && (
        <>
          <button onClick={handlePrev} className={`${classes.nav} ${classes.left}`}>
            &lt;
          </button>
          <button onClick={handleNext} className={`${classes.nav} ${classes.right}`}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
