import Navbar from "@/app/components/interactive/Navbar/Navbar";
import React from "react";
import StandardLayout from "../layout";
import Image from "next/image";
import HeaderPicture from "@/app/twat/images/oryx3.jpg";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
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
      <div className="BlurbContainer">
        <h1>About Us</h1>
        <p>Welcome to TAK≡N! We are a day 1 and active clan!</p>
      </div>
      <div className="AdminContainer">
        <h2>Admins</h2>
        {["Admin1", "Admin2", "Admin3"].map((admin, index) => (
          <div key={index} className="AdminCard">
            <Image
              src={`/path/to/${admin}.jpg`}
              alt={`${admin} Picture`}
              width={200}
              height={200}
              unoptimized
            />
            <h3>{admin}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet semper lorem.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
