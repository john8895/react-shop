import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) // 把HTTP回應轉陣列或物件
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {/* 篩選 + 搜尋 */}
        <div className="flex gap-3 mb-5 flex-wrap">
          <input
            type="text"
            placeholder="搜尋商品名稱..."
            className="flex-1 min-w-[200px] px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm"
          />
          <select className="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
            <option>所有分類</option>
            <option>electronics</option>
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>women's clothing</option>
          </select>
        </div>

        {/* 商品卡片網格 */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md cursor-pointer bg-white">
                <div className="h-45 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                  <img src={product.image} alt="" width="100" />
                </div>
                <div className="p-3">
                  <div className="text-sm font-semibold mb-1 truncate">
                    {product.title}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {product.category}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-blue-600">
                      {product.price}
                    </span>
                    <button className="px-3.5 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      加入
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
