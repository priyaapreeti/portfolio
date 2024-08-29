import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="border p-[100px]" id="projects">
      <h3 className="p-2">Here's a glimpse of few projects i have done: </h3>
      <div className="flex justify-around ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
