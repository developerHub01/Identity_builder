import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="bg-slate-900 w-full min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-[50vmin] bg-slate-900 text-white font-black">404</h1>
        <p className="text-base bg-slate-900 text-white pb-4">
          Page Not Found
        </p>
        <Link className="bg-white py-2 px-5 text-slate-900 shadow-xl">
          Move To hom page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
