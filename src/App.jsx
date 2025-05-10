import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Overlay from "./components/Overlay/Overlay";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
// import { getAllProducts } from "./api/getProducts";

function App() {
  // getAllProducts();

  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Overlay>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Overlay>
      </main>
    </BrowserRouter>
  );
}

export default App;
