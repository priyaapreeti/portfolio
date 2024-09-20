import React from "react";

const Card = ({ title }) => {
  return (
    <div className="p-4">
      <div className="border p-2 h-30 w-64 bg-green-400 rounded-xl">
        <div className=" p-8 cursor-pointer flex flex-col justify-center items-center ">
          <img src="" alt="project-img" className="border " />
          <p className="font-bold ">{title}</p>
          <p>desc</p>
          <button className="">link</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
