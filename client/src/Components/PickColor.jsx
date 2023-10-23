import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { colorPicker } from "../Constants/ColorPlate";
import { UserDataContext } from "../Provider/UserDataProvider";

const PickColor = ({ setThemeColorOpen }) => {
  const { themeColorInProvider, setThemeColorInProvider } =
    useContext(UserDataContext);
  return (
    <div
      className="fixed top-0 left-0 w-full h-full grid place-items-center"
      style={{ background: themeColorInProvider }}
    >
      <div className="relative bg-white w-[90%] max-w-lg shadow-2xl rounded-2xl p-5 pt-10">
        <FaXmark
          className="xmarkIcon"
          onClick={() => setThemeColorOpen((prev) => !prev)}
        />
        <div>
          <form className="w-full flex flex-col justify-center items-center gap-4">
            <h2
              className="text-2xl font-semibold pb-4"
              style={{ color: themeColorInProvider }}
            >
              Choose Theme
            </h2>
            <div className="w-full grid gap-2 grid-cols-4">
              {colorPicker.map((item) => (
                <React.Fragment key={item.id}>
                  <input
                    type="radio"
                    name="themeColor"
                    id={item.id}
                    className="hidden"
                    onChange={(e) => {
                      setThemeColorInProvider((prev) => item.color);
                      console.log(item.color);
                    }}
                  />
                  <label
                    htmlFor={item.id}
                    className={`w-full h-full aspect-square rounded-md cursor-pointer duration-75 ${
                      item.color == themeColorInProvider
                        ? "scale-75"
                        : "scale-100 hover:shadow-lg hover:scale-90"
                    }`}
                    style={{ background: item.color }}
                  ></label>
                </React.Fragment>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickColor;
