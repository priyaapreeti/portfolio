import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className=" h-screen place-content-center" id="projects">
      <h3 className="text-center text-xl">
        Here's a glimpse of few projects i have done:
      </h3>
      <div className="md:flex md:justify-center">
        <Card title={"twitter"} />
        <Card title={"jira"} />
        <Card title={"chat-app"} />
      </div>
    </div>
  );
};

export default Projects;
