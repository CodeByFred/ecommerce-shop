import classes from "./Carousel.module.scss";
import useQuery from "../../hooks/useQuery";
import freeShippingImg from "../../assets/freeShipping.jpg";
import { useState } from "react";
import { getFeaturedProducts } from "../../api/productService.js";
import { Link } from "react-router";

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

  const defaultImg = {
    id: "",
    img_url: freeShippingImg,
    name: "default banner",
  };

  if (isLoading) return <p>Loading featured products...</p>;
  if (isFail || !products || products.length === 0) return <p>No featured products.</p>;

  const slides = [defaultImg, ...products];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className={classes.carousel}>
      <div
        className={classes.track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((product) => (
          <div className={classes.slide} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img className={classes.image} src={product.img_url} alt={product.name} />
            </Link>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
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
