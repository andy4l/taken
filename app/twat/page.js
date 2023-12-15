"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [twat, setTwat] = useState();

  useEffect(() => {
    fetch("/api/twat")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTwat(JSON.stringify(data));
      });
  }, []);

  console.log(twat);

  return twat ? { twat } : <div>loading...</div>;
};

export default page;
