import { HashRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <HashRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </HashRouter>
    </>
  );
}

export default App;
