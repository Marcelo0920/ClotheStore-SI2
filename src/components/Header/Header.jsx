import React from "react";
import TopBar from "./TopBar.jsx";
import MiddleInner from "./MiddleInner.jsx";
import HeaderInner from "./HeaderInner.jsx";

const Header = () => {
  return (
    <header className="header shop">
      <TopBar />
      <MiddleInner />
      <HeaderInner />
    </header>
  );
};

export default Header;
