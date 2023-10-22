import React, { useContext, useState } from "react";
import { FormDataContext } from "../Provider/FormDataProvider";
import LoginSignUpForm from "../Components/LoginSignUpForm";

const SignUpPage = () => {
  const { formDataState } = useContext(FormDataContext);
  console.log(formDataState);
  // const [signUpData, setSignUpData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleInputChange = (e) => {
  //   setSignUpData((prev) => ({
  //     ...signUpData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(signUpData);
  // };
  return (
    <LoginSignUpForm
      formBtnText="Signup"
      redirectText="Login your account?"
      redirectLink="/login"
    />
    // <section className="w-full min-h-screen grid place-items-center bg-slate-900">
    //   <div className="w-[90%] max-w-md shadow-2xl rounded-xl px-5 py-8 bg-white flex flex-col gap-5 justify-center items-center text-center">
    //     <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
    //       <h2 className="text-4xl text-slate-900 pb-3 font-semibold uppercase">
    //         Login
    //       </h2>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email..."
    //         className="text-center rounded-md p-2 border-2 border-slate-900 text-lg text-slate-700 outline-none"
    //         value={signUpData.email}
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password..."
    //         className="text-center rounded-md p-2 border-2 border-slate-900 text-lg text-slate-700 outline-none"
    //         value={signUpData.password}
    //         onChange={handleInputChange}
    //         required
    //       />
    //       <button
    //         type="submit"
    //         className="bg-slate-900 text-white rounded-md p-2 border-2 border-slate-900 text-lg"
    //       >
    //         Signup
    //       </button>
    //     </form>
    //     <Link to="/signup" className="underline text-slate-900 text-xl">
    //       Login your account?{" "}
    //     </Link>
    //     <button className="flex gap-2 justify-center items-center border-2 border-slate-900 py-2 px-3 text-lg capitalize rounded-md hover:scale-110 duration-75">
    //       <span className="text-2xl">{socialIcons.google}</span>
    //       Signup With Google
    //     </button>
    //   </div>
    // </section>
  );
};

export default SignUpPage;
