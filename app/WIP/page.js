// pages/WIP.js
//"use client";
import React from "react";
import Image from "next/image";
import HeaderPicture from "@/app/twat/images/oryx3.jpg";
import "./wip.css";

const WIP = () => {
  return (
    <div classname="WIPContainer">
      <div className="HeaderBar">
        <div>TAK☰N</div>
      </div>
      <div className="HeaderPictureContainer">
        <Image
          src={HeaderPicture}
          alt={"Header Picture"}
          width={400}
          className="HeaderImage"
          unoptimized
        />
        <div className="centered">
          TAK≡N Clan site under construction... Please check back soon...
        </div>
      </div>
    </div>
  );
};

export default WIP;
