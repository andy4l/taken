"use client";
import Button from "../components/interactive/Button/Button";

const page = () => {
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

export default page;
