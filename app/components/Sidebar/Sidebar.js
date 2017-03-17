import React from 'react';
import './sidebar-style';

const Sidebar = ({data}) => {
  return (
    <div className="Sidebar">
      <p>{data.text}</p>

      <div className="sidebar-details">
        <p className="sidebar-title">{data.film}</p>
        <p className="sidebar-date">{data.releaseDate}</p>
      </div>
    </div>
  );
}

export default Sidebar;
