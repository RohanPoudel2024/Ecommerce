import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Star, ShoppingCart, MessageSquare, Heart, Home, Store, User, Heart as WishlistIcon, Menu } from "lucide-react";
import './ProductPage.css';

const topSelling = [
  { id: 1, name: "Ethnic Motif Woven Design Saree", price: 1500 },
  { id: 2, name: "Abstract Printed Round Neck Kurta", price: 1000 },
  { id: 3, name: "Women Floral Printed Kurta", price: 10 },
];

export default function ProductPage() {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="product-page-container">Product not found.</div>;
  }

  return (
    <div className="product-page-container">
      {/* Header Line for Small Screens */}
      <div className="header-line">
        <div className="store-name">My eCommerce Store</div>
        <button className="menu-button">
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Main Layout */}
      <div className="product-page-grid">
        {/* Product Images */}
        <div className="product-images">
          <img src={selectedImage} alt="Product" className="main-image" />
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`thumbnail ${selectedImage === img ? "selected-thumbnail" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">Brand: <span>{product.brand}</span></p>

          {/* Rating, Wishlist, and Inquiry */}
          <div className="product-actions">
            <div className="rating">
              <Star className="star-icon" /> <span>(0 reviews)</span>
            </div>
            <button className="wishlist-button"><Heart className="icon" /> Add to Wishlist</button>
            <button className="inquiry-button">Product Inquiry</button>
          </div>

          {/* Price */}
          <p className="product-price">Rs {product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <button 
              className="quantity-button"
              onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
            >-</button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-button"
              onClick={() => setQuantity(q => (q < product.stock ? q + 1 : q))}
            >+</button>
          </div>

          {/* Total Price */}
          <p className="total-price">Total: Rs {(product.price * quantity).toFixed(2)}</p>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-button">
              <ShoppingCart className="icon" /> Add to Cart
            </button>
            <button className="buy-now-button">Buy Now</button>
          </div>

          <button className="message-seller-button">
            <MessageSquare className="icon" /> Message Seller
          </button>
        </div>

        {/* Sidebar: Top Selling Products */}
        <div className="top-selling-products">
          <h2 className="sidebar-title">Top Selling Products</h2>
          {topSelling.map((item) => (
            <div key={item.id} className="top-selling-item">
              <div className="top-selling-image"></div>
              <div>
                <p className="top-selling-name">{item.name}</p>
                <p className="top-selling-price">Rs {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Sections */}
      <div className="extra-sections">
        {/* Description */}
        <div className="description-section">
          <h3 className="section-title">Description</h3>
          <p className="section-content">No description available.</p>
        </div>

        {/* Reviews & Ratings */}
        <div className="reviews-section">
          <h3 className="section-title">Reviews & Ratings</h3>
          <div className="reviews-content">
            <p className="section-content">No reviews yet.</p>
            <button className="rate-product-button">
              Rate this Product
            </button>
          </div>
        </div>

        {/* FAQs / Product Queries */}
        <div className="faqs-section">
          <h3 className="section-title">Product Queries</h3>
          <p className="section-content">Login or Register to ask a question.</p>
        </div>
      </div>

      {/* Bottom Navigation Bar for Small Displays */}
      <div className="bottom-nav">
        <a href="/" className="nav-item">
          <Home className="nav-icon" />
          <span>Home</span>
        </a>
        <a href="/products" className="nav-item">
          <Store className="nav-icon" />
          <span>Store</span>
        </a>
        <a href="/cart" className="nav-item">
          <ShoppingCart className="nav-icon" />
          <span>Cart</span>
        </a>
        <a href="/wishlist" className="nav-item">
          <WishlistIcon className="nav-icon" />
          <span>Wishlist</span>
        </a>
        <a href="/account" className="nav-item">
          <User className="nav-icon" />
          <span>Account</span>
        </a>
      </div>

      {/* Sliding Login/Signup Button for Small Displays */}
      <div className="auth-buttons">
        <a href="/login" className="auth-button">Login</a>
        <a href="/signup" className="auth-button">Signup</a>
      </div>
    </div>
  );
}