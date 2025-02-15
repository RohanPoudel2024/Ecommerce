import React, { useEffect, useState } from 'react';
import './MainContent.css';

function MainContent({ categories }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/1100x455?text=Image+1',
    'https://via.placeholder.com/1100x455?text=Image+2',
    'https://via.placeholder.com/1100x455?text=Image+3',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="main-content">
      {/* Slidable Category Icons */}
      <div className="category-icons">
        {categories.map((category, index) => (
          <div key={index} className="category-icon">
            <div className="icon-placeholder">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
        {/* Slider Button */}
        <button className="slider-button">➡️</button>
      </div>
    </main>
  );
}

export default MainContent;