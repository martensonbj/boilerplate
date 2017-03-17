import React from 'react';

const Button = ({handleClick, type, active}) => {
  // const style = active ? { backgroundColor: "#fff" } : { backgroundColor: "rgba(23, 33, 43, 0.75)" }
  const buttonStyle = `${type} category-button `
  return (
    <button
      // style={ style }
      className={ buttonStyle }
      onClick={() => handleClick(type)}
    >
      {type}
    </button>
  )
}

export default Button;
