import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="HeaderBar">
      <div>TAK☰N</div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <Link href="/aboutus">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <a href="/twat">TWAT</a>
        </li>
        <li>
          <a href="/members">Clan Members</a>
        </li>
        <li>
          <a href="/store">Store</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
