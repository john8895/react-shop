import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 寫三個函式：
  // addToCart(product) — 加入商品（如果已存在，數量 +1）
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  // removeFromCart(id) — 刪除商品
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); // 回傳不是要刪的那一筆，等於把它過濾掉了。
  };
  // updateQuantity(id, quantity) — 改數量
  // 用map找是否要改的那筆，是的話，就把新的存入，否則就不動
    const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
