import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/register.css";

function Register() {
  const navigate = useNavigate()

  const [selectedRadio, setSelectedRadio] = useState("creator");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const isRadioSelected = (value) => selectedRadio === value;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://food-tech12.onrender.com/api/auth/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          username: userName,
          mobile: mobile,
          password: password,
          role: selectedRadio,
        }),
      });

      if (response.ok) {
        console.log('Signup successful');
        navigate("/login")
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }

    console.log({
      firstname: firstName,
      lastname: lastName,
      email: email,
      username: userName,
      mobile: mobile,
      password: password,
      role: selectedRadio,
    });

    setEmail("");
    setUserName("");
    setFirstName("");
    setLastName("");
    setMobile("");
    setPassword("");
    setSelectedRadio("creator");
  };

  return (
    <section className="w-screen relative">
      <div className="h-screen w-screen flex justify-between">
        <div className="w-full h-full overflow-y-scroll max-sm:px-[20px] max-lg:px-[80px] lg:ml-[90px] no-scrollbar py-[30px]">
          <Link to="/" className="flex gap-[20px] items-center max-w-[180px]">
            <img
              src="./assets/farmruns-logo.svg"
              alt="farm runs logo"
              className="w-[50px]"
            />
            <span className="font-nanum text-[32px] font-normal">Farmruns</span>
          </Link>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-lg:items-center max-sm:h-full"
          >
            <h1 className="font-oswald text-[32px] my-5">
              Create a new account
            </h1>
            <div className="flex flex-col gap-[21px] w-full lg:max-w-[600px]">
              <div className="w-full flex gap-3">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-3 py-1 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-3 py-1 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-1 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
              />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="px-3 py-1 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
              />
              <div className="w-full flex gap-3">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="px-3 py-1 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-1 sm:p-3 bg-input-bg rounded-[10px] sm:rounded-[16px] w-full text-sm placeholder:color-placeholder font-oswald font-light outline-none"
                />
              </div>
              <h2 className="font-oswald">Sign up as</h2>
              <div className="flex justify-between items-center">
                <input
                  type="radio"
                  name="role"
                  id="creator"
                  className="hidden"
                  value="creator"
                  checked={isRadioSelected("creator")}
                  onChange={() => setSelectedRadio("creator")}
                />
                <label
                  htmlFor="creator"
                  className="flex items-center gap-2 p-2 sm:p-[14px] radio_button font-oswald text-sm cursor-pointer"
                >
                  <img
                    src={
                      isRadioSelected("creator")
                        ? "./assets/farmruns-logo-white.svg"
                        : "./assets/farmruns-logo.svg"
                    }
                    alt="farmruns logo icon"
                    className="w-[15px]"
                  />
                  Creator
                </label>

                <input
                  type="radio"
                  name="role"
                  id="consumer"
                  className="hidden"
                  value="consumer"
                  checked={isRadioSelected("consumer")}
                  onChange={() => setSelectedRadio("consumer")}
                />
                <label
                  htmlFor="consumer"
                  className="flex items-center gap-2 p-2 sm:p-[14px] radio_button font-oswald text-sm cursor-pointer"
                >
                  <img
                    src={
                      isRadioSelected("consumer")
                        ? "./assets/farmruns-logo-white.svg"
                        : "./assets/farmruns-logo.svg"
                    }
                    alt="farmruns logo icon"
                    className="w-[15px]"
                  />
                  Consumer
                </label>

                <input
                  type="radio"
                  name="role"
                  id="farmer"
                  className="hidden"
                  value="farmer"
                  checked={isRadioSelected("farmer")}
                  onChange={() => setSelectedRadio("farmer")}
                />

                <label
                  htmlFor="farmer"
                  className="flex items-center gap-2 p-2 sm:p-[14px] radio_button font-oswald text-sm cursor-pointer"
                >
                  <img
                    src={
                      isRadioSelected("farmer")
                        ? "./assets/farmruns-logo-white.svg"
                        : "./assets/farmruns-logo.svg"
                    }
                    alt="farmruns logo icon"
                    className="w-[15px]"
                  />
                  Farmer
                </label>
              </div>
              <button
                type="submit"
                className="mx-auto w-[100px] sm:w-[200px] py-[4px] sm:py-[8px] text-white font-oswald bg-green-10 border-[0.5px] border-solid border-green-10 rounded-[8px] sm:rounded-[16px]"
              >
                Register
              </button>
              <button className="flex gap-[20px] justify-center items-center mx-auto w-[100px] sm:w-[200px] py-[4px] sm:py-[8px] text-black font-oswald border-[0.5px] border-solid border-black rounded-[8px] sm:rounded-[16px]">
                <img
                  src="./assets/google-icon.svg"
                  alt="google icon"
                  className="h-[24px] sm:h-[15px]"
                />
                <span className="sm:block hidden">Sign up with Google </span>
              </button>

              <div className="flex justify-between items-center">
                <p className="font-oswald text-sm">Already have an account?</p>
                <span className="font-oswald text-sm">
                  <Link to="/login" className="text-green-10">
                    Login
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

export default Register;
