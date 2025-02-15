import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Home, Store, ShoppingCart, User, Heart as WishlistIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './EcommerceLayout.css';
import { FaHome, FaTshirt, FaBlender, FaSpa, FaCouch, FaFemale, FaMale, FaLaptop, FaGift, FaMobileAlt } from 'react-icons/fa';

function EcommerceLayout() {
  const history = useHistory();

  const [categories] = useState([
    { name: "Home Appliances", icon: <FaHome /> },
    { name: "Fashion & Clothing", icon: <FaTshirt /> },
    { name: "Kitchen Appliances", icon: <FaBlender /> },
    { name: "Cosmetic & Beauty", icon: <FaSpa /> },
    { name: "Furniture & Sofas", icon: <FaCouch /> },
    { name: "Women's Fashion", icon: <FaFemale /> },
    { name: "Men's Fashion", icon: <FaMale /> },
    { name: "Computer & Laptop", icon: <FaLaptop /> },
    { name: "Flowers & Gift Items", icon: <FaGift /> },
    { name: "Mobiles & Accessories", icon: <FaMobileAlt /> },
  ]);

  const featuredProducts = [
    { id: 1, name: "Product 1", price: 100, images: ["/placeholder.png"] },
    { id: 2, name: "Product 2", price: 200, images: ["/placeholder.png"] },
    { id: 3, name: "Product 3", price: 300, images: ["/placeholder.png"] },
    { id: 4, name: "Product 4", price: 400, images: ["/placeholder.png"] },
    { id: 5, name: "Product 5", price: 500, images: ["/placeholder.png"] },
    { id: 6, name: "Product 6", price: 600, images: ["/placeholder.png"] },
    { id: 7, name: "Product 7", price: 700, images: ["/placeholder.png"] },
    { id: 8, name: "Product 8", price: 800, images: ["/placeholder.png"] },
  ];

  const bestSellingProducts = [
    { id: 1, name: "Product A", price: 150, images: ["/placeholder.png"] },
    { id: 2, name: "Product B", price: 250, images: ["/placeholder.png"] },
    { id: 3, name: "Product C", price: 350, images: ["/placeholder.png"] },
    { id: 4, name: "Product D", price: 450, images: ["/placeholder.png"] },
    { id: 5, name: "Product E", price: 550, images: ["/placeholder.png"] },
    { id: 6, name: "Product F", price: 650, images: ["/placeholder.png"] },
    { id: 7, name: "Product G", price: 750, images: ["/placeholder.png"] },
    { id: 8, name: "Product H", price: 850, images: ["/placeholder.png"] },
  ];

  const topSellingProducts = [
    { id: 1, name: "Product X", price: 120, images: ["/placeholder.png"] },
    { id: 2, name: "Product Y", price: 220, images: ["/placeholder.png"] },
    { id: 3, name: "Product Z", price: 320, images: ["/placeholder.png"] },
    { id: 4, name: "Product W", price: 420, images: ["/placeholder.png"] },
    { id: 5, name: "Product V", price: 520, images: ["/placeholder.png"] },
    { id: 6, name: "Product U", price: 620, images: ["/placeholder.png"] },
    { id: 7, name: "Product T", price: 720, images: ["/placeholder.png"] },
    { id: 8, name: "Product S", price: 820, images: ["/placeholder.png"] },
  ];

  const ProductSection = ({ title, products }) => {
    const [wishlist, setWishlist] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState(5);

    useEffect(() => {
      const updateVisibleProducts = () => {
        if (window.innerWidth <= 768) {
          setVisibleProducts(2);
        } else {
          setVisibleProducts(5);
        }
      };

      updateVisibleProducts();
      window.addEventListener('resize', updateVisibleProducts);

      return () => {
        window.removeEventListener('resize', updateVisibleProducts);
      };
    }, []);

    const toggleWishlist = (id) => {
      setWishlist((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    };

    const showPreviousProducts = () => {
      setStartIndex((prevIndex) => Math.max(prevIndex - visibleProducts, 0));
    };

    const showNextProducts = () => {
      setStartIndex((prevIndex) => Math.min(prevIndex + visibleProducts, products.length - visibleProducts));
    };

    const handleProductClick = (product) => {
      history.push({
        pathname: '/product',
        state: { product }
      });
    };

    return (
      <div className="product-section">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="nav-buttons">
            <button onClick={showPreviousProducts} disabled={startIndex === 0}><ChevronLeft /></button>
            <button onClick={showNextProducts} disabled={startIndex + visibleProducts >= products.length}><ChevronRight /></button>
          </div>
        </div>
        <div className="product-list">
          {products.slice(startIndex, startIndex + visibleProducts).map((product) => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
              <div className="product-image">
                <span>Image</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Rs{product.price.toFixed(2)}</p>
              <div className="product-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`wishlist-button ${
                    wishlist.includes(product.id) ? 'active' : ''
                  }`}
                >
                  <WishlistIcon />
                </button>
                <button className="add-to-cart-button" onClick={(e) => e.stopPropagation()}>
                  Add to cart <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="ecommerce-layout">
      <div className="banner-and-categories">
        <div className="categories-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              {category.icon}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <div className="banner">
          <img src="path/to/your/banner-image.jpg" alt="Banner" className="banner-image" />
        </div>
      </div>
      <div className="content">
        <Sidebar categories={categories} />
        <MainContent categories={categories} />
      </div>
      <ProductSection title="Featured Products" products={featuredProducts} />
      <ProductSection title="Best Selling" products={bestSellingProducts} />
      <ProductSection title="Top Selling" products={topSellingProducts} />

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

export default EcommerceLayout;