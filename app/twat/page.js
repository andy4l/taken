"use client";
import "./Twat.css";
import lastwish from "../twat/images/lastwish.jpg";
import duality from "../twat/images/duality.jpg";
import vile from "../twat/images/vile.jpg";
import generalxur from "../twat/images/xur2.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [twat, setTwat] = useState();

  const [RaidStatus, setRaidStatus] = useState("");

  const [DungeonStatus, setDungeonStatus] = useState("");

  const [NightfallStatus, setNightfallStatus] = useState("");

  const [XurStatus, setXurStatus] = useState("");

  useEffect(() => {
    fetch("/api/twat/latestTwat")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTwat(data);
      });
  }, []);

  // Function to determine the Weekly Raid rotator based on data from bungie API
  const determineRaidStatus = (newData) => {
    TODO; //logic to determine the status based on newData
    // For example, check a specific variable in newData
    return newData && newData.status ? newData.status : "";
  };

  // Function to determine the Weekly Dungeon rotator based on data from bungie API
  const determineDungeonStatus = (newData) => {
    TODO; //logic to determine the status based on newData
    // For example, check a specific variable in newData
    return newData && newData.status ? newData.status : "";
  };

  // Function to determine the Nightfall weekly mission rotator based on data from bungie API
  const determineNightfallStatus = (newData) => {
    TODO; //logic to determine the status based on newData
    // For example, check a specific variable in newData
    return newData && newData.status ? newData.status : "";
  };

  // Function to determine Xur's location based on data from bungie API
  const determineXurStatus = (newData) => {
    TODO; //logic to determine the status based on newData
    // For example, check a specific variable in newData
    return newData && newData.status ? newData.status : "";
  };

  // console.log(twat);

  return twat ? (
    <div className="body">
      <div className="TwatContainer">
        <h1 className="TwatTitleBar">
          {twat.title?.toUpperCase()} - {formatDate(twat.date)}
        </h1>
        <br></br>
        <div className="TwatIntro">
          <h2>Eyes Up TAK☰N!</h2>
          <p>{twat.intro}</p>
        </div>
        <br></br>
        <div className="columnContainer">
          <div className="column">
            <div className="NextFeaturedRaid">
              <h2>NEXT WEEKS RAID</h2>
              <Image
                src={lastwish}
                width="300"
                height={"157"}
                alt={"Header Picture"}
                className="HeaderImage"
              />
              <p>{twat.nextFeaturedRaid}</p>
            </div>
          </div>
          <div className="column">
            <div className="NextFeaturedDungeon">
              <h2>NEXT FEATURED DUNGEON</h2>
              <Image
                src={duality}
                width="300"
                height={"157"}
                alt={"Header Picture"}
                className="HeaderImage"
              />
              <p>{twat.nextFeaturedDungeon}</p>
            </div>
          </div>
          <div className="column">
            <div className="NextFeaturedNightfall">
              <h2>NEXT FEATURED NIGHTFALL</h2>
              <Image
                src={vile}
                width="300"
                height={"157"}
                alt={"Header Picture"}
                className="HeaderImage"
              />
              <p>{twat.nextFeaturedNightfall}</p>
            </div>
          </div>
        </div>

        <div className="TwatFeaturedGuardian">
          <h2>GET TO KNOW: SassafrasT</h2>
          <p>
            {twat.featuredGuardian.replace(new RegExp("\r?\n", "g"), "\n \n")}
          </p>
        </div>
        <br></br>
        <div className="columnContainer">
          <div className="column">
            <Image
              src={generalxur}
              width="600"
              height="auto"
              alt={"General image of Xur"}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default Page;
