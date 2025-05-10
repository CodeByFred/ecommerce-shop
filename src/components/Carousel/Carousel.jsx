import classes from "./Carousel.module.scss";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Carousel = () => {
  return (
    <div>
      <img className={classes.carousel} src={image1} alt="image1" />
    </div>
  );
};
export default Carousel;
