import React, { useState } from "react";
import MenuPage from "./pages/MenuPage";
import Header from "./components/Header";
import CartViewOffCanvas from "./components/CartViewOffCanvas";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  const [cartCounter, setCartCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const [orderToCart, setOrderToCart] = useState([]);

  const increment = () => {
    setCartCounter(cartCounter + 1);
  };
  const decrement = () => {
    setCartCounter(cartCounter - 1);
  };

  function addProduct(product) {
    let checkProductAlReadyExist = orderToCart.filter(
      (item) => item.id === product.id
    );
    if (!checkProductAlReadyExist.length) {
      setOrderToCart([...orderToCart, product]);

      increment();
    } else {
      let upDateProducts = orderToCart.map((item) => {
        if (item.id === checkProductAlReadyExist[0].id) {
          let newProduct = {
            ...item,
            quantity: product.quantity + item.quantity,
            price: product.price + item.price,
          };
          return newProduct;
        } else {
          return item;
        }
      });
      setOrderToCart(upDateProducts);
      console.log(upDateProducts);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header
          cartCounter={cartCounter}
          inputValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MenuPage increment={increment} searchValue={searchValue} />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetail addProduct={addProduct} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <ProductsOffCanvas
      
        
      ></ProductsOffCanvas> */}

      <Footer />
      <CartViewOffCanvas
        orderToCart={orderToCart}
        cartCounter={cartCounter}
        setOrderToCart={setOrderToCart}
        setCartCounter={setCartCounter}
        decrement={decrement}
      ></CartViewOffCanvas>
    </>
  );
}
