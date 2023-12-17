"use client";
import React from "react";
import "./NewTwat.css";

const Page = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    console.log(event.target.date.value);

    const date = event.target.date.value;
    const intro = event.target.intro.value;
    const featuredRaid = event.target.featuredRaid.value;
    const featuredNightfall = event.target.featuredNightfall.value;
    const featuredGuardian = event.target.featuredGuardian.value;

    console.log(date, intro, featuredRaid, featuredNightfall, featuredGuardian);

    fetch("/api/twat", {
      method: "POST",
      body: JSON.stringify({
        date,
        intro,
        featuredRaid,
        featuredNightfall,
        featuredGuardian,
      }),
    });

    console.log("Twat has been saved");
  };

  return (
    <div className="NewTwatContainer">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="InputContainer">
          <label className="Label" htmlFor="date">
            Date
          </label>
          <input
            className="Input"
            id="date"
            name="date"
            type="date"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <label className="Label" htmlFor="title">
            Title
          </label>
          <input
            className="Input"
            id="title"
            name="title"
            type="text"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <label className="Label" htmlFor="intro">
            Into
          </label>
          <input
            className="Input"
            id="intro"
            name="into"
            type="text"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <label className="Label" htmlFor="featuredRaid">
            Featured Raid
          </label>
          <input
            className="Input"
            id="featuredRaid"
            name="featuredRaid"
            type="text"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <label className="Label" htmlFor="featuredNightfall">
            Featured NIghtfall
          </label>
          <input
            className="Input"
            id="featuredNightfall"
            name="featuredNightfall"
            type="text"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <label className="Label" htmlFor="featuredGuardian">
            Featured Guardian
          </label>
          <input
            className="Input"
            id="featuredGuardian"
            name="featuredGuardian"
            type="text"
            required={true}
          />
        </div>

        <div className="InputContainer">
          <button className="Submit" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
