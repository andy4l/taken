import Link from "next/link";
import React from "react";
import "./Navbar.css";
import NavBarButton from "./components/NavBarButton/NavBarButton";

const Navbar = () => {
  return (
    <div className="HeaderBar">
      <div>TAK☰N</div>
      <div className="NavBarButtons">
        <NavBarButton label="Home" link="/home" />
        <NavBarButton label="About Us" link="/aboutus" />
        <NavBarButton label="TWAT" link="/twat" />
        <NavBarButton label="Members" link="/members" />
        <NavBarButton label="Store" link="/store" />
      </div>
    </div>
  );
};

export default Navbar;
