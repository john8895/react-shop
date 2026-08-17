import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Footer from "../components/Footer";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-2">購物車</h1>
        <p className="text-charcoal-light/60 text-sm mb-8 font-light">
          {cart.length > 0 ? `${cart.length} 件商品` : "目前沒有商品"}
        </p>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-charcoal/5">
            <ShoppingBag size={48} className="mx-auto mb-4 text-charcoal/15" strokeWidth={1} />
            <p className="text-charcoal/30 font-light mb-6">你的購物車是空的</p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-charcoal text-white text-sm rounded-full hover:bg-amber transition-colors duration-200 tracking-wide"
            >
              去逛逛
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 border border-charcoal/5 shadow-sm">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 py-5 border-b border-charcoal/5 items-center last:border-b-0"
              >
                <div className="w-20 h-20 bg-cream-dark rounded-xl flex items-center justify-center shrink-0 p-2">
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm mb-1 truncate text-charcoal">{item.title}</div>
                  <div className="font-display text-lg font-bold text-charcoal">${item.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-cream-dark hover:border-charcoal/20 transition-all text-charcoal/60"
                    onClick={() => {
                      if (item.quantity === 1) {
                        removeFromCart(item.id);
                      } else {
                        updateQuantity(item.id, item.quantity - 1);
                      }
                    }}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium min-w-[28px] text-center text-charcoal">
                    {item.quantity}
                  </span>
                  <button
                    className="w-8 h-8 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-cream-dark hover:border-charcoal/20 transition-all text-charcoal/60"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  className="px-4 py-1.5 text-red-soft/70 text-xs hover:text-red-soft hover:bg-red-soft/5 rounded-full transition-all tracking-wide"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={14} className="inline -mt-0.5 mr-1" />刪除
                </button>
              </div>
            ))}

            {/* 總計 */}
            <div className="mt-6 p-6 bg-cream rounded-xl">
              <div className="flex justify-between mb-2 text-sm text-charcoal/60">
                <span>小計（{totalQuantity} 件）</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm text-charcoal/60">
                <span>運費</span>
                <span className="text-amber">免運</span>
              </div>
              <div className="flex justify-between font-display text-2xl font-bold border-t border-charcoal/10 pt-4 mt-4 text-charcoal">
                <span>總計</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-5 px-8 py-4 bg-charcoal text-white text-sm rounded-full hover:bg-amber transition-colors duration-200 tracking-widest uppercase font-medium">
              結帳（示意）
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
