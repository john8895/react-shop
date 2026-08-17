import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Search, Plus } from "lucide-react";
import Footer from "../components/Footer";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 搜尋的 state
  const [category, setCategory] = useState("所有分類"); // 分類的 state
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) // 把HTTP回應轉陣列或物件
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <div className="bg-charcoal text-white px-6 py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-amber-light mb-4 font-medium">Summer Collection 2026</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">探索風格的起點</h1>
        <p className="text-cream/50 font-light max-w-md mx-auto mb-8">從日常穿搭到精品配件，找到屬於你的獨特品味</p>
        <a href="#products" className="inline-block px-8 py-3 border border-amber-light text-amber-light text-sm rounded-full hover:bg-amber-light hover:text-charcoal transition-all duration-300 tracking-widest uppercase font-medium">
          立即選購
        </a>
        <div className="mt-10 animate-bounce">
          <a href="#products" className="text-cream/30 hover:text-cream/60 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </a>
        </div>
      </div>

      <div id="products" className="max-w-5xl mx-auto px-6 py-10">
        {/* 頁面標題 */}
        <h2 className="font-display text-3xl font-bold text-charcoal mb-2">精選商品</h2>
        <p className="text-charcoal-light/60 text-sm mb-8 font-light">探索我們的商品系列</p>

        {/* 篩選 + 搜尋 */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <div className="flex-1 min-w-[200px] relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/30" />
            <input
              type="text"
              placeholder="搜尋商品名稱..."
              className="w-full pl-10 pr-4 py-2.5 border border-charcoal/10 rounded-lg text-sm bg-white/80 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all placeholder:text-charcoal/30"
            value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2.5 border border-charcoal/10 rounded-lg text-sm bg-white/80 focus:outline-none focus:border-amber transition-all"
          >
            <option>所有分類</option>
            <option>electronics</option>
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>women's clothing</option>
          </select>
        </div>

        {/* 商品卡片網格 */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .filter((product) =>
                category === "所有分類" || product.category === category
            )
            .map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="group border border-charcoal/5 rounded-xl overflow-hidden hover:shadow-xl cursor-pointer bg-white transition-all duration-300 hover:-translate-y-1">
                  <div className="h-52 bg-cream-dark flex items-center justify-center p-6">
                    <img src={product.image} alt="" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] uppercase tracking-widest text-amber font-medium mb-2">
                      {product.category}
                    </div>
                    <div className="text-sm font-medium mb-3 truncate text-charcoal">
                      {product.title}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-display text-xl font-bold text-charcoal">
                        ${product.price}
                      </span>
                      <button
                        className="px-4 py-1.5 bg-charcoal text-white text-xs rounded-full hover:bg-amber transition-colors duration-200 tracking-wide"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        <Plus size={14} className="inline -mt-0.5" /> 加入
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsList;
