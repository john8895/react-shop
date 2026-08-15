import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-slate-800 text-white px-6 py-3.5 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">FakeStore</Link>
      <div className="flex gap-5 text-sm">
        <Link
          to="/"
          className={location.pathname === "/" ? "text-white" : "text-slate-400 hover:text-white"}
        >
          商品
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "text-white" : "text-slate-400 hover:text-white"}
        >
          購物車
        </Link>
      </div>
      <Link to="/cart" className="relative">
        🛒
        <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center">
          3
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
