import React from "react";

const NavBarButton = ({ label, link }) => {
  return (
    <div>
      <a href={link}>{label}</a>
    </div>
  );
};

export default NavBarButton;
