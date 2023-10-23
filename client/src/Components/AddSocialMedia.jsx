import React, { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { socialIcons } from "../Constants/IconList";
import { UserDataContext } from "../Provider/UserDataProvider";
import { socialMedia } from "../Constants/SocialMedia";

const AddSocialMedia = ({ setAddSocialMediaOpen }) => {
  const {
    socialLinksInProvider,
    setSocialLinksInProvider,
    themeColorInProvider,
    setThemeColorInProvider,
  } = useContext(UserDataContext);
  const [socialLinks, setSocialLinks] = useState({
    ...socialLinksInProvider,
  });
  const handleInputChange = (e) => {
    setSocialLinks((prev) => ({
      ...socialLinks,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(socialLinks);
    setSocialLinksInProvider((prev) => ({
      ...socialLinks,
    }));

    setAddSocialMediaOpen((prev) => !prev);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full grid place-items-center">
      <div className="relative bg-white w-[90%] max-w-xl shadow-2xl rounded-2xl p-5 pt-14">
        <FaXmark
          className="xmarkIcon"
          style={{ color: themeColorInProvider }}
          onClick={() => setAddSocialMediaOpen((prev) => !prev)}
        />
        <div>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <ul className="w-full flex flex-col gap-2 max-h-[400px] overflow-auto py-4 px-2">
              {socialMedia.map((item) => (
                <li
                  className="w-full flex gap-3 justify-center items-center"
                  key={item}
                >
                  <span
                    className="w-10 h-10 rounded-full border-2 grid place-items-center text-2xl text-white flex-shrink-0 cursor-pointer"
                    style={{ background: themeColorInProvider }}
                  >
                    {socialIcons[item]}
                  </span>
                  <input
                    type="text"
                    name={item}
                    value={socialLinks[item]}
                    onChange={handleInputChange}
                    className="input1 text-left"
                    style={{ borderColor: themeColorInProvider }}
                  />
                </li>
              ))}
            </ul>
            <button
              type="submit"
              className="button1"
              style={{ background: themeColorInProvider }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSocialMedia;
