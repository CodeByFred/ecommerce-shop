import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Title>Not What You'd Expect</Title>
      <Subtitle>Because Normal Is Boring... (And Trademarked)</Subtitle>
      <Carousel />
      <ProductsContainer></ProductsContainer>
    </>
  );
};
export default Home;
