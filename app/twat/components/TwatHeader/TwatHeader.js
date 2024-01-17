import React from "react";
// import HeaderPicture from "../../images/headerpic.jpeg"
import HeaderPicture from "../../images/oryx4.jpg";
import Image from "next/image";

import "./TwatHeader.css";

const TwatHeader = () => {
  return (
    <div className="TwatHeaderContainer">
      <div className="HeaderBar">
        <div>TAK≡N | This Week at TAK☰N</div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">About Us</a>
          </li>
          <li>
            <a href="#contact">TWAT</a>
          </li>
          <li>
            <a href="#about">Clan Members</a>
          </li>
          <li>
            <a href="#store">Store</a>
          </li>
        </ul>
      </div>
      <div className="HeaderPictureContainer">
        <Image
          src={HeaderPicture}
          alt={"Header Picture"}
          width={400}
          className="HeaderImage"
          unoptimized
        />
      </div>
    </div>
  );
};

export default TwatHeader;
