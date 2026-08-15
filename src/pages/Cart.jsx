import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          購物車（3 件商品）
        </h2>

        <div className="bg-white rounded-lg p-6">
          {/* 商品項目 1 */}
          <div className="flex gap-4 py-4 border-b border-gray-100 items-center">
            <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs shrink-0">
              圖
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-1">Fjallraven Backpack</div>
              <div className="text-blue-600 font-semibold">$109.95</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">−</button>
              <span className="font-semibold min-w-[24px] text-center">2</span>
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">+</button>
            </div>
            <button className="px-3.5 py-1.5 bg-red-50 text-red-600 text-sm rounded-md hover:bg-red-100">
              刪除
            </button>
          </div>

          {/* 商品項目 2 */}
          <div className="flex gap-4 py-4 border-b border-gray-100 items-center">
            <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs shrink-0">
              圖
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-1">Mens Casual T-Shirts</div>
              <div className="text-blue-600 font-semibold">$22.30</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">−</button>
              <span className="font-semibold min-w-[24px] text-center">1</span>
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">+</button>
            </div>
            <button className="px-3.5 py-1.5 bg-red-50 text-red-600 text-sm rounded-md hover:bg-red-100">
              刪除
            </button>
          </div>

          {/* 商品項目 3 */}
          <div className="flex gap-4 py-4 border-b border-gray-100 items-center">
            <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs shrink-0">
              圖
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-1">Gold Petite Micropave</div>
              <div className="text-blue-600 font-semibold">$168.00</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">−</button>
              <span className="font-semibold min-w-[24px] text-center">1</span>
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">+</button>
            </div>
            <button className="px-3.5 py-1.5 bg-red-50 text-red-600 text-sm rounded-md hover:bg-red-100">
              刪除
            </button>
          </div>

          {/* 總計 */}
          <div className="mt-6 p-5 bg-slate-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>小計（4 件）</span>
              <span>$410.20</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>運費</span>
              <span>免運</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t-2 border-slate-200 pt-3 mt-3">
              <span>總計</span>
              <span>$410.20</span>
            </div>
          </div>

          <button className="w-full mt-4 px-8 py-3.5 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700">
            結帳（示意）
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
