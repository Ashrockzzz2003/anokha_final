import React from "react";

const Searchbar = ({ keyword, onChange }) => {
  // Define the style for the search bar
  const barStyle = {
    width: "80%",
    boxShadow: "0 16px 64px 0 rgba(255, 255, 255, .05)",
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    border: "2px solid #beb7a4ff",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    background: "rgba(0,0,0,0)",
    padding: "14px 20px",
    margin: "10px auto",
    display: "block",
    textAlign: "center",
    transition: "0.3s",

    // Add styles for the :focus pseudo-class to add a black border and highlight effect on click
    ':focus': {
      border: '2px solid black',
      outline: 'none',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      background: 'rgba(255, 255, 255, 0.5)',
    }
  };

  return (
    // Render the search bar as an input element with the defined style
    <input
      style={barStyle}
      key="search-bar"
      value={keyword}
      placeholder="Search Here"
      className="text-babyPowder"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Searchbar;
