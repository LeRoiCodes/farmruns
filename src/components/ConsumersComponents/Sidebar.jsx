import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [selectedRadio, setSelectedRadio] = useState("creator");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const isRadioSelected = (value) => selectedRadio === value;

  return (
    <aside className="min-[930px]:w-[248px] h-screen hidden bg-green-20 md:flex flex-col overflow-y-scroll unwanted_scroll">
      <div className="flex px-2">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="../assets/farmruns-logo.svg"
            alt="farm runs logo"
            className="w-[28px]"
          />
          <span className="font-nanum text-[32px] font-normal hidden min-[930px]:block">
            Farmruns
          </span>
        </Link>
      </div>
      <div>
        <h2 className="font-oswald">Category</h2>

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
      </div>
    </aside>
  );
};

export default Sidebar;
