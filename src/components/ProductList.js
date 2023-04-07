import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import hero1 from "../images/desktop-image-hero-1.jpg";
import "./ProductList.css";

import "./ProductPage.css";
const Products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 799.99,
    description:
      "This modern sofa provides a comfortable seating space for up to three people. The sleek design and neutral color options make it a great addition to any room.",
    photo:
      "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: 2,
    name: "Recliner Chair",
    price: 399.99,
    description:
      "This recliner chair is great for relaxing and lounging. It features adjustable reclining positions and plush cushioning for maximum comfort.",
    photo:
      "https://images.unsplash.com/photo-1551298698-66b830a4f11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
  },
  {
    id: 3,
    name: "Leather Sectional Sofa",
    price: 999.99,
    description:
      "This leather sectional sofa is perfect for larger living spaces. It is made of high-quality leather and features adjustable head rests for maximum comfort.",
    photo:
      "https://images.unsplash.com/photo-1540932428079-887d0d7a8fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 4,
    name: "Futon Sofa Bed",
    price: 499.99,
    description:
      "This futon sofa bed is perfect for small spaces. It easily converts from a sofa to a bed in seconds, and features a comfortable cushion for lounging.",
    photo:
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
  },
  {
    id: 5,
    name: "Couvoir Lampen",
    price: 699.99,
    description:
      "This loveseat is perfect for two people. It is made of high-quality fabric and features a contemporary design that will look great in any room.",
    photo:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    name: "Convertible Sofa Bed",
    price: 599.99,
    description:
      "This convertible sofa bed is perfect for small spaces. It easily converts from a sofa to a bed and features a comfortable cushion for lounging.",
    photo:
      "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
  },
  {
    id: 7,
    name: "Rocking Chair",
    price: 249.99,
    description:
      "This rocking chair is perfect for relaxing and lounging. It is made of high-quality wood and features a comfortable cushion for maximum comfort.",
    photo:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  }
];
const ProductListitems = Products.map((product) => (
  <div class="Product-List" key={product.id}>
    <img class="productList-image" src={product.photo} alt={product.name} />
    <div class="product-txt-block">
      <h2>{product.name}</h2>
      <span class="price">€ {product.price}</span>
      <Link class="shop-btn" to={`/products/${product.name}/${product.id}`}>
        Go to product
      </Link>
    </div>
  </div>
));

function ProductList() {
  return (
    <div>
      <div class="Products-container ">{ProductListitems}</div>
    </div>
  );
}

export default ProductList;
