# 電商商品頁 SPEC

> 目標：第二個作品，展示 useContext + React Router + CRUD + 篩選排序
> 資料來源：[FakeStoreAPI](https://fakestoreapi.com/)（免費、不用 key、20 筆商品）

## 架構

```
首頁（商品列表） /          →  商品詳情 /product/:id  →  購物車 /cart
       ↑____________________useContext（購物車狀態）___________________↑
```

## 三頁功能

| 頁面 | 路由 | 功能 | 練到什麼 |
|------|------|------|----------|
| 商品列表 | `/` | 拉 API 顯示商品卡片、分類篩選、關鍵字搜尋 | useEffect + fetch、filter、map |
| 商品詳情 | `/product/:id` | 大圖 + 描述 + 加入購物車按鈕 | useParams、動態路由 |
| 購物車 | `/cart` | 已加商品列表、改數量、刪除、算總價 | useContext 讀寫、CRUD |

## 共享狀態（CartContext）

```
CartContext 提供：
- cart[]          → 購物車內容
- addToCart()     → 加入商品
- removeFromCart() → 刪除商品
- updateQuantity() → 改數量
```

## 建議順序（每步都能看到東西）

1. 裝 React Router + Tailwind → 空殼三頁能切換
2. 首頁拉 API 顯示商品卡片（跟空氣品質地圖同模式）
3. 建 CartContext，做「加入購物車」按鈕
4. 購物車頁：顯示內容 + 改數量 + 刪除 + 總價
5. 商品詳情頁（useParams 拉單筆）
6. 首頁加篩選 + 搜尋
7. 部署 GitHub Pages

## 技術棧

- Vite + React（JavaScript + SWC）
- React Router
- useContext
- Tailwind CSS
- GitHub Pages（gh-pages）
