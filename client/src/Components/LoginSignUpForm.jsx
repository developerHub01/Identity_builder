import React, { useContext, useState } from "react";
import { FormDataContext } from "../Provider/FormDataProvider";
import { Link } from "react-router-dom";
import { socialIcons } from "../Constants/IconList";

const LoginSignUpForm = ({ formBtnText, redirectText, redirectLink }) => {
  const { formDataState, setFormDataState } = useContext(FormDataContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDataState((prev) => formData);
  };
  return (
    <section className="w-full min-h-screen grid place-items-center bg-slate-900">
      <div className="w-[90%] max-w-md shadow-2xl rounded-xl px-5 py-8 bg-white flex flex-col gap-5 justify-center items-center text-center">
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <h2 className="text-4xl text-slate-900 pb-3 font-semibold uppercase">
            {formBtnText}
          </h2>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="text-center rounded-md p-2 border-2 border-slate-900 text-lg text-slate-700 outline-none"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="text-center rounded-md p-2 border-2 border-slate-900 text-lg text-slate-700 outline-none"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-slate-900 text-white rounded-md p-2 border-2 border-slate-900 text-lg"
          >
            {formBtnText}
          </button>
        </form>
        <Link to={redirectLink} className="underline text-slate-900 text-xl">
          {redirectText}
        </Link>
        <button className="flex gap-2 justify-center items-center border-2 border-slate-900 py-2 px-3 text-lg capitalize rounded-md hover:scale-110 duration-75">
          <span className="text-2xl">{socialIcons.google}</span>
          {formBtnText} With Google
        </button>
      </div>
    </section>
  );
};

export default LoginSignUpForm;
