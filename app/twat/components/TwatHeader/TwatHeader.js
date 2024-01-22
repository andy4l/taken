import React from "react";
// import HeaderPicture from "../../images/headerpic.jpeg"
import HeaderPicture from "../../images/oryx4.jpg";
import Image from "next/image";
import Navbar from "@/app/components/interactive/Navbar/Navbar";

import "./TwatHeader.css";

const TwatHeader = () => {
  return (
    <div className="TwatHeaderContainer">
      <Navbar />
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
