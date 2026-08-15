import Navbar from "../components/Navbar";

function ProductDetail() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <a href="/" className="inline-block mb-5 text-gray-500 text-sm hover:text-blue-600">
          ← 回商品列表
        </a>

        <div className="flex gap-8 flex-wrap bg-white p-6 rounded-lg">
          {/* 商品大圖 */}
          <div className="flex-1 min-w-[280px] h-[400px] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            商品大圖
          </div>

          {/* 商品資訊 */}
          <div className="flex-1 min-w-[280px]">
            <div className="text-gray-500 text-sm uppercase tracking-wide mb-4">
              men's clothing
            </div>
            <h1 className="text-2xl font-bold mb-2">
              Fjallraven - Foldsack No. 1 Backpack
            </h1>
            <div className="text-amber-500 text-sm mb-6">
              ★★★★☆ 3.9 / 5（120 則評價）
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              $109.95
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your perfect pack for everyday use and walks in the forest.
              Stash your laptop (up to 15 inches) in the padded sleeve,
              your everyday items in the spacious main compartment.
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
