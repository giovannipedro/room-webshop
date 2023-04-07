import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Hompage from "./components/pages/Hompage";
import ProductPage from "./components/ProductPage";
import React, { Component } from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} exact />
          <Route
            path="/products/:name/:productId"
            element={<ProductPage />}
            exact
          />
          <Route path="/shop" element={<ProductList />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
