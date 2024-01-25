import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="w-screen relative">
      <div className="h-screen w-screen flex justify-between">
        <div className="w-full max-sm:px-[20px] max-lg:px-[80px] lg:ml-[90px]">
          <Link
            to="/"
            className="flex gap-[20px] items-center max-w-[180px] mt-[40px]"
          >
            <img
              src="./assets/farmruns-logo.svg"
              alt="farm runs logo"
              className="w-[50px]"
            />
            <span className="font-nanum text-[32px] font-normal">Farmruns</span>
          </Link>

          <form className="flex flex-col w-full max-lg:items-center">
            <h1 className="font-oswald text-[32px] my-5">
              Sign in to your account
            </h1>
            <div className="flex flex-col gap-[21px] w-full lg:max-w-[600px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="px-3 py-2 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm sm:text-lg placeholder:color-placeholder font-oswald font-light outline-none"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="px-3 py-2 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm sm:text-lg placeholder:color-placeholder font-oswald font-light outline-none"
              />
              <button
                type="submit"
                className="mx-auto w-[100px] sm:w-[200px] py-[4px] sm:py-[8px] text-white font-oswald bg-green-10 border-[0.5px] border-solid border-green-10 rounded-[8px] sm:rounded-[16px]"
              >
                Login
              </button>
              <button className="flex gap-[20px] justify-center items-center mx-auto w-[100px] sm:w-[200px] py-[4px] sm:py-[8px] text-black font-oswald border-[0.5px] border-solid border-black rounded-[8px] sm:rounded-[16px]">
                <img
                  src="./assets/google-icon.svg"
                  alt="google icon"
                  className="h-[24px] sm:h-[15px]"
                />
                <span className="sm:block hidden">Sign in with Google </span>
              </button>

              <div className="flex justify-between items-center">
                <Link to="" className="font-oswald text-sm">
                  Forgot Password
                </Link>
                <span className="font-oswald text-sm">
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-green-10">
                    Sign Up
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
        <img
          src="./assets/fruit-basket.png"
          alt="fruit basket"
          className="h-full hidden lg:block"
        />
      </div>
      <img
        src="./assets/bg-semicircle.png"
        alt="side background diagram"
        className="h-full inset-0 fixed hidden lg:block left-auto -z-10 !"
      />
    </section>
  );
}

export default Login;