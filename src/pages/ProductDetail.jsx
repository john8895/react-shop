import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null); // 單筆資料預設null
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json()) // HTTP回應→轉物件
      .then((data) => {
        // 正式處理
        setProductDetail(data);
      });
  }, []);

  if (!productDetail) return <div className="min-h-screen bg-cream flex items-center justify-center text-charcoal/40 font-light">Loading...</div>;

  //  取整 → 用 5 - ★ = 補滿 ☆
  const stars =
    "★".repeat(Math.round(productDetail.rating.rate)) +
    "☆".repeat(5 - Math.round(productDetail.rating.rate));

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-block mb-8 text-charcoal/40 text-sm hover:text-amber transition-colors font-light tracking-wide"
        >
          <ArrowLeft size={14} className="inline -mt-0.5 mr-1" />回商品列表
        </Link>

        <div className="flex gap-12 flex-wrap bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5">
          {/* 商品大圖 */}
          <div className="flex-1 min-w-[280px] h-[420px] bg-cream-dark rounded-xl flex items-center justify-center p-8">
            <img
              src={productDetail.image}
              alt=""
              className="max-h-full object-contain"
            />
          </div>

          {/* 商品資訊 */}
          <div className="flex-1 min-w-[280px] py-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber font-medium mb-4">
              {productDetail.category}
            </div>
            <h1 className="font-display text-3xl font-bold mb-4 text-charcoal leading-tight">{productDetail.title}</h1>
            <div className="text-amber-light text-sm mb-6">
              {stars} <span className="text-charcoal/40 ml-1">{productDetail.rating.rate} / 5（{productDetail.rating.count} 則評價）</span>
            </div>
            <div className="font-display text-4xl font-bold text-charcoal mb-6">
              ${productDetail.price}
            </div>
            <p className="text-charcoal-light/70 leading-relaxed mb-8 text-sm font-light">
              {productDetail.description}
            </p>
            <button
              className="px-10 py-3.5 bg-charcoal text-white text-sm rounded-full hover:bg-amber transition-colors duration-200 tracking-widest uppercase font-medium"
              onClick={()=> addToCart(productDetail)}
            >
              <ShoppingCart size={16} className="inline -mt-0.5 mr-2" />加入購物車
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
