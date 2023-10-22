import React from "react";
import { Link, useParams } from "react-router-dom";
import { socialIcons } from "../Constants/IconList";
import { AiFillEdit } from "react-icons/ai";
import WorksWrapper from "../Components/WorksWrapper";
import SocialMediaWrapper from "../Components/SocialMediaWrapper";

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
  const { email } = useParams();
  return (
    <section className="profileSection">
      <div className="profileWrapper">
        <figure className="profileFigure">
          <div className="profileImgWrapper">
            <img src={profileImg} alt="" className="imgFull" />
          </div>
          <figcaption className="flex flex-col justify-center items-center text-center gap-4">
            <h2 className="profileName">Author Name</h2>
            <WorksWrapper works={works} />
            <p className="profileBio">{userBio}</p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <div className="flex gap-2 justify-center items-center text-base border-2 rounded-full p-1">
                <div className="w-10 h-10 rounded-full border-2 grid place-items-center text-2xl text-white bg-slate-900">
                  {socialIcons.email}
                </div>
                {emailAddress}
              </div>
              <div className="flex gap-2 justify-center items-center text-base border-2 rounded-full p-1">
                <div className="w-10 h-10 rounded-full border-2 grid place-items-center text-2xl text-white bg-slate-900">
                  {socialIcons.whatsapp}
                </div>
                {whatsappNum}
              </div>
            </div>
          </figcaption>
        </figure>
        <SocialMediaWrapper socialMedia={socialMedia} />
      </div>

      <button className="profileEdit">
        <AiFillEdit className="text-slate-900" />
      </button>
    </section>
  );
};

export default Profile;
