import Navbar from "@/app/components/interactive/Navbar/Navbar";
import "./AboutUs.css";
import React from "react";
import StandardLayout from "../layout";

const AboutUs = () => {
  return (
    <StandardLayout>
      <div className="body">
        <div className="AboutUsContainer">
          <h2>WORK IN PROGRESS</h2>
        </div>
      </div>
    </StandardLayout>
  );
};

export default AboutUs;

/*

const AboutUs = () => {
  return (
    <div>
      <Button
        title={"Test"}
        onClick={() => {
          alert("test");
        }}
      />
      <Button
        title={"Test2"}
        onClick={() => {
          alert("test2");
        }}
      />
    </div>
  );
};

export default AboutUs;
*/
