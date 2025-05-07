import "./App.scss";
import Carousel from "./components/Carousel/Carousel";
import Overlay from "./components/Overlay/Overlay";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";

function App() {
  return (
    <main>
      <Overlay>
        <Title>Not What You'd Expect</Title>
        <Subtitle>Because Normal Is Boring... (And Trademarked)</Subtitle>
        <Carousel />
        <ProductsContainer></ProductsContainer>
      </Overlay>
    </main>
  );
}

export default App;
