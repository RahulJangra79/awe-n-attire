import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import OurProducts from "./components/OurProducts";
import Cart from "./components/Cart";
import ShopMen from "./components/ShopMen";
import ShopWomen from "./components/ShopWomen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<AboutUs />}></Route>

          <Route path="/login" element={<LoginSignup />}></Route>

          <Route path="/allproducts" element={<OurProducts />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/men" element={<ShopMen />}></Route>

          <Route path="/women" element={<ShopWomen />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;