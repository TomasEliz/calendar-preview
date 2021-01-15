import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";

const Header = ({ basketModalHandler, year }) => {
  return (
    <header>
      <h1>Calendar {year}</h1>
      <RiShoppingBasketLine
        className="basket"
        onClick={(e) => basketModalHandler(e)}
      />
    </header>
  );
};

export default Header;
