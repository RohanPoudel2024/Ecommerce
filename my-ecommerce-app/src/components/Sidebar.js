import React from 'react';
import './Sidebar.css';

function Sidebar({ categories }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories (See All)</h2>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            {category.icon} {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;