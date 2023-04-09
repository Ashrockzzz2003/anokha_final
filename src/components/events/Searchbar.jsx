import React, { useState } from "react";

const Searchbar = ({ keyword, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const barStyle = {
    width: "80%",
    boxShadow: "0 16px 64px 0 rgba(255, 255, 255, .05)",
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    border: "2px solid #beb7a4ff",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    background: isClicked ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)",
    padding: "14px 20px",
    margin: "10px auto",
    display: "block",
    textAlign: "center",
    transition: "0.3s",
    color: isClicked ? "black" : "white",
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <input
      style={barStyle}
      key="search-bar"
      value={keyword}
      placeholder="Search Here"
      className="text-babyPowder"
      onClick={handleClick}
      onBlur={handleBlur}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Searchbar;
