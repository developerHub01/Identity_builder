import React, { useContext, useState } from "react";
import AddSocialMedia from "../Components/AddSocialMedia";
import { UserDataContext } from "../Provider/UserDataProvider";
import { BsFillCameraFill } from "react-icons/bs";
import { BsFillBrushFill } from "react-icons/bs";
import PickColor from "../Components/PickColor";

const EditPage = () => {
  const {
    userDataInProvider,
    setUserDataInProvider,
    themeColorInProvider,
    setThemeColorInProvider,
  } = useContext(UserDataContext);
  const [addSocialMediaOpen, setAddSocialMediaOpen] = useState(false);
  const [addThemeColorOpen, setThemeColorOpen] = useState(false);
  const [profileData, setProfileData] = useState(userDataInProvider);
  const handleInputChange = (e) => {
    setProfileData((prev) => ({
      ...profileData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    setUserDataInProvider((prev) => ({
      ...profileData,
    }));
  };
  return (
    <section
      className="min-h-screen w-full py-5 grid place-items-center"
      style={{ background: themeColorInProvider }}
    >
      <div className="flex flex-col gap-4 justify-center items-center w-[90%] max-w-2xl bg-white p-5 rounded-2xl shadow-2xl text-center">
        <h1
          className="text-3xl font-semibold"
          style={{ color: themeColorInProvider }}
        >
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name ..."
            className="input1"
            onChange={handleInputChange}
            value={profileData.name}
            style={{ borderColor: themeColorInProvider }}
          />
          <input
            type="text"
            name="works"
            placeholder="Works separated by , ..."
            className="input1"
            onChange={handleInputChange}
            value={profileData.works}
            style={{ borderColor: themeColorInProvider }}
          />
          <textarea
            name="bio"
            placeholder="Add your bio..."
            className="input1 min-h-[100px]"
            onChange={handleInputChange}
            value={profileData.bio}
            style={{ borderColor: themeColorInProvider }}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number..."
            min={0}
            className="input1"
            onChange={handleInputChange}
            value={profileData.phoneNumber}
            style={{ borderColor: themeColorInProvider }}
          />
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            className="hidden"
          />
          <div className="w-full flex gap-2 justify-center items-center">
            <label
              htmlFor="profilePic"
              className="button1"
              style={{ background: themeColorInProvider }}
            >
              <BsFillCameraFill className="text-2xl" />
              <span className="hidden sm:block">Add Profile Pic</span>
            </label>
            <button
              type="button"
              className="button1"
              style={{ background: themeColorInProvider }}
              onClick={() => setThemeColorOpen((prev) => !prev)}
            >
              <BsFillBrushFill className="text-2xl" />
              <span className="hidden sm:block">Theme Color</span>
            </button>
          </div>
          <button
            type="button"
            className="button1"
            style={{ background: themeColorInProvider }}
            onClick={() => setAddSocialMediaOpen((prev) => !prev)}
          >
            add social media
          </button>
          <button
            type="submit"
            className="button1"
            style={{ background: themeColorInProvider }}
          >
            Update
          </button>
        </form>
      </div>

      {addThemeColorOpen && <PickColor setThemeColorOpen={setThemeColorOpen} />}

      {addSocialMediaOpen && (
        <AddSocialMedia setAddSocialMediaOpen={setAddSocialMediaOpen} />
      )}
    </section>
  );
};

export default EditPage;
