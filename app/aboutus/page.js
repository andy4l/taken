"use client";
import { Inter } from "next/font/google";
import Button from "../components/interactive/Button/Button";
import react from "react";
import Navbar from "@/app/components/interactive/Navbar/Navbar";
import "./AboutUs.css";

import React from "react";

const AboutUs = () => {
  return (
    <div className="body">
      <div className="AboutUsContainer">
        <Navbar />
        <br></br>
        <h2>WORK IN PROGRESS</h2>
      </div>
    </div>
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
