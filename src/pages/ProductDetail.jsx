import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null); // 單筆資料預設null

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json()) // HTTP回應→轉物件
      .then((data) => {
        // 正式處理
        setProductDetail(data);
        console.log(data);
      });
  }, []);

  if (!productDetail) return <div>Loading...</div>; // 第一次渲染時，資料還沒有 fetch 回來，資料沒到，就先不渲染

  //  取整 → 用 5 - ★ = 補滿 ☆
  const stars =
    "★".repeat(Math.round(productDetail.rating.rate)) +
    "☆".repeat(5 - Math.round(productDetail.rating.rate));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/"
          className="inline-block mb-5 text-gray-500 text-sm hover:text-blue-600"
        >
          ← 回商品列表
        </Link>

        <div className="flex gap-8 flex-wrap bg-white p-6 rounded-lg">
          {/* 商品大圖 */}
          <div className="flex-1 min-w-[280px] h-[400px] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 p-4">
            <img
              src={productDetail.image}
              alt=""
              className="max-h-full object-contain"
            />
          </div>

          {/* 商品資訊 */}
          <div className="flex-1 min-w-[280px]">
            <div className="text-gray-500 text-sm uppercase tracking-wide mb-4">
              {productDetail.category}
            </div>
            <h1 className="text-2xl font-bold mb-2">{productDetail.title}</h1>
            <div className="text-amber-500 text-sm mb-6">
              {stars} {productDetail.rating.rate} / 5（{productDetail.rating.count} 則評價）
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              ${productDetail.price}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              {productDetail.description}
            </p>
            <button className="px-8 py-3.5 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
