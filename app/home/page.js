import React from "react";
//import "./homepage.css";
import HeaderPicture from "@/app/twat/images/oryx4.jpg";
import Navbar from "@/app/components/interactive/Navbar/Navbar";
import StandardLayout from "../layout";
import Image from "next/image";

const Home = () => {
  return (
    <div className="HomepageContainer">
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

export default Home;
