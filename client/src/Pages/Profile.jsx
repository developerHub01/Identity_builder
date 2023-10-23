import React from "react";
import { Link, useParams } from "react-router-dom";
import { socialIcons } from "../Constants/IconList";
import { AiFillEdit } from "react-icons/ai";
import WorksWrapper from "../Components/WorksWrapper";
import SocialMediaWrapper from "../Components/SocialMediaWrapper";
import { useContext } from "react";
import { UserDataContext } from "../Provider/UserDataProvider";

const profileImg =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D";

const userBio = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Voluptatem voluptas possimus facere quis ad fugiat, sed dolor
beatae minima corrupti aspernatur commodi explicabo aperiam
necessitatibus.`;

const emailAddress = "abc@gamil.com";
const whatsappNum = "01703374162";

const works = ["Youtuber", "Content Creator", "Developer", "Video Editor"];

const socialMedia = [
  {
    id: 1,
    icon: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: "instagram",
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: "twitter",
    link: "https://www.facebook.com/",
  },
  {
    id: 4,
    icon: "linkedin",
    link: "https://www.facebook.com/",
  },
  {
    id: 5,
    icon: "youtube",
    link: "https://www.facebook.com/",
  },
];

const Profile = () => {
  const { themeColorInProvider, setThemeColorInProvider } =
    useContext(UserDataContext);
  const { email } = useParams();
  return (
    <section
      className="profileSection"
      style={{ background: themeColorInProvider }}
    >
      <div className="profileWrapper">
        <figure className="profileFigure">
          <div
            className="profileImgWrapper"
            style={{ borderColor: themeColorInProvider }}
          >
            <img src={profileImg} alt="" className="imgFull" />
          </div>
          <figcaption className="flex flex-col justify-center items-center text-center gap-4">
            <h2 className="profileName" style={{ color: themeColorInProvider }}>
              Author Name
            </h2>
            <WorksWrapper works={works} />
            <p className="profileBio">{userBio}</p>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <div className="flex gap-2 justify-center items-center text-base border-2 rounded-full p-1 hover:scale-110 duration-75">
                <div
                  className="w-10 h-10 rounded-full border-2 grid place-items-center text-2xl text-white bg-slate-900"
                  style={{ background: themeColorInProvider }}
                >
                  {socialIcons.email}
                </div>
                {emailAddress}
              </div>
              <div className="flex gap-2 justify-center items-center text-base border-2 rounded-full p-1 hover:scale-110 duration-75">
                <div
                  className="w-10 h-10 rounded-full border-2 grid place-items-center text-2xl text-white bg-slate-900"
                  style={{ background: themeColorInProvider }}
                >
                  {socialIcons.whatsapp}
                </div>
                {whatsappNum}
              </div>
            </div>
          </figcaption>
        </figure>
        <SocialMediaWrapper socialMedia={socialMedia} />
      </div>

      <Link
        to="/edit"
        className="profileEdit"
        style={{ borderColor: themeColorInProvider }}
      >
        <AiFillEdit style={{ color: themeColorInProvider }} />
      </Link>
    </section>
  );
};

export default Profile;
