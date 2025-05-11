import classes from "./Carousel.module.scss";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={classes.carousel}>
      <div
        className={classes.track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className={classes.slide} key={index}>
            <img className={classes.image} src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className={`${classes.nav} ${classes.left}`}>
        &lt;
      </button>
      <button onClick={handleNext} className={`${classes.nav} ${classes.right}`}>
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
