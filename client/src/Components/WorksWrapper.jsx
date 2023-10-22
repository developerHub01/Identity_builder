import React from "react";

const WorksWrapper = ({ works }) => {
  return (
    <ul className="w-full flex flex-wrap gap-2 justify-center items-center">
      {works.map((item, i) => (
        <li
          key={i}
          className="px-3 py-2 rounded-full text-white bg-slate-900 shadow-xl text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default WorksWrapper;
