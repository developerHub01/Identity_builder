import React from "react";
import { Link } from "react-router-dom";
import { socialIcons } from "../Constants/IconList";

const SocialMediaWrapper = ({ socialMedia }) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center items-center">
      {socialMedia.map((item, i) => (
        <li key={item.id}>
          <Link
            to={item.link}
            target="_blank"
            className="w-12 h-12 grid place-items-center text-2xl bg-slate-900 text-white rounded-full shadow-xl hover:scale-125 duration-75"
          >
            {socialIcons[item.icon.toLowerCase()]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaWrapper;
