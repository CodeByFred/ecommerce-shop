import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Carousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import Overlay from "./components/Overlay/Overlay";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Overlay>
          <Title>Not What You'd Expect</Title>
          <Subtitle>Because Normal Is Boring... (And Trademarked)</Subtitle>
          <Carousel />
          <ProductsContainer></ProductsContainer>
        </Overlay>
      </main>
    </BrowserRouter>
  );
}

export default App;
