"use client";
import "./Twat.css";
import { useEffect, useState } from "react";

const Page = () => {
  const [twat, setTwat] = useState();

  useEffect(() => {
    fetch("/api/twat/latestTwat")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTwat(data);
      });
  }, []);

  // console.log(twat);

  return twat ? (
    <div className="TwatContainer">
      <h1 className="TwatTitleBar">
        {twat.title?.toUpperCase()} - {formatDate(twat.date)}
      </h1>
      <div className="TwatIntro">
        <h2>INTRO</h2>
        <p>{twat.intro}</p>
      </div>
      <div className="TwatFeaturedRaid">
        <h2>FEATURED RAID</h2>
        <p>{twat.featuredRaid}</p>
      </div>
      <div className="TwatFeaturedNightfall">
        <h2>FEATURED NIGHTFALL</h2>
        <p>{twat.featuredNightfall}</p>
      </div>
      <div className="TwatFeaturedGuardian">
        <h2>FEATURED GUARDIAN</h2>
        <p>{twat.featuredGuardian}</p>
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
