import React from "react";
import { Link } from "react-router-dom";
import { socialIcons } from "../Constants/IconList";
import { useContext } from "react";
import { UserDataContext } from "../Provider/UserDataProvider";

const SocialMediaWrapper = ({ socialMedia }) => {
  const { themeColorInProvider, setThemeColorInProvider } =
    useContext(UserDataContext);
  return (
    <ul className="flex flex-wrap gap-3 justify-center items-center">
      {socialMedia.map((item, i) => (
        <li key={item.id}>
          <Link
            to={item.link}
            target="_blank"
            className="w-12 h-12 grid place-items-center text-2xl text-white rounded-full shadow-xl hover:scale-125 duration-100"
            style={{ background: themeColorInProvider }}
          >
            {socialIcons[item.icon.toLowerCase()]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaWrapper;
