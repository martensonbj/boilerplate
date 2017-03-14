import React from 'react';
import './header-style';

const Header = ({data}) => {
  return (
    <div className="Header">
      <h1>SWAPI-Box</h1>
      <p>{data.text}
      <span>{data.film}</span>
      <span>{data.releaseDate}</span>
    </p>
    </div>
  );
}

export default Header;
