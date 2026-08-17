import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { ShoppingBag, Store } from "lucide-react";

function Navbar() {
  const { cart } = useContext(CartContext)

  return (
    <nav className="bg-charcoal text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-wide text-amber-light hover:text-white transition-colors">
        <Store size={22} strokeWidth={1.5} />
        AhanStore
      </Link>
      <div className="flex gap-6 items-center text-sm font-light tracking-wide">
        <Link to="/" className="text-cream/80 hover:text-white transition-colors">
          商品
        </Link>
        <Link to="/cart" className="text-cream/80 hover:text-white transition-colors">
          購物車
        </Link>
        <Link to="/cart" className="relative ml-2 hover:scale-110 transition-transform">
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-amber text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
