import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedRadio, setSelectedRadio] = useState("dairy");

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

        <div className="flex flex-col">
          <input
            type="radio"
            name="category"
            id="diary"
            className="hidden"
            value="diary"
            checked={isRadioSelected("diary")}
            onChange={() => setSelectedRadio("diary")}
          />
          <div>
            <label
              htmlFor="diary"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("diary") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Diary
            </label>
          </div>

          <input
            type="radio"
            name="role"
            id="consumer"
            className="hidden"
            value="consumer"
            checked={isRadioSelected("consumer")}
            onChange={() => setSelectedRadio("consumer")}
          />
          <div>
          <label
              htmlFor="consumer"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("consumer") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Consumer
            </label>
          </div>

          <input
            type="radio"
            name="role"
            id="farmer"
            className="hidden"
            value="farmer"
            checked={isRadioSelected("farmer")}
            onChange={() => setSelectedRadio("farmer")}
          />

          <div>
          <label
              htmlFor="farmer"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("farmer") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Farmer
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
