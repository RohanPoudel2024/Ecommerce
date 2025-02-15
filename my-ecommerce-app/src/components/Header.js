import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const sliderRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsSliderOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSliderOpen) {
      document.querySelector('.sidebar').classList.add('open');
    } else {
      document.querySelector('.sidebar').classList.remove('open');
    }
  }, [isSliderOpen]);

  return (
    <>
      <div className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <i className="fa fa-store"></i> TPOP
          </Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-box"
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="profile-container">
            <i className="fa fa-user profile-icon"></i>
            <a href="/login">Login</a> | <a href="/signup">Signup</a>
            <div className="cart-container">
              <i className="fa fa-shopping-cart"></i>
              <span>Rs0.00 (0 Items)</span>
            </div>
          </div>
          <button className="menu-button" onClick={toggleSlider}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>

      {isSmallScreen && (
        <div className="mobile-header">
          <Link to="/" className="logo">
            <i className="fa fa-store"></i>
          </Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <button className="menu-button" onClick={toggleSlider}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      )}

      {isSliderOpen && (
        <>
          <div className="backdrop" onClick={toggleSlider}></div>
          <div className="sidebar" ref={sliderRef} onKeyDown={handleKeyDown}>
            <button className="close-button" onClick={toggleSlider}>
              &times;
            </button>
            <div className="sidebar-content">
              <Link to="/login" onClick={toggleSlider}>Login</Link>
              <Link to="/signup" onClick={toggleSlider}>Signup</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;