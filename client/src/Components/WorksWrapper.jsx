import React from "react";
import { UserDataContext } from "../Provider/UserDataProvider";
import { useContext } from "react";

const WorksWrapper = ({ works }) => {
  const { themeColorInProvider, setThemeColorInProvider } =
    useContext(UserDataContext);
  return (
    <ul className="w-full flex flex-wrap gap-2 justify-center items-center">
      {works.map((item, i) => (
        <li
          key={i}
          className="px-3 py-2 rounded-full text-white bg-slate-900 shadow-xl text-base select-none cursor-pointer"
          style={{ background: themeColorInProvider }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default WorksWrapper;
