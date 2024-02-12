import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ handleFilterChange }) => {
  const [selectedRadio, setSelectedRadio] = useState("all");

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
            id="all"
            className="hidden"
            value="all"
            checked={isRadioSelected("all")}
            onChange={() => setSelectedRadio("all")}
            onClick={() => handleFilterChange("all")}
          />
          <div>
            <label
              htmlFor="all"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("all") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              All
            </label>
          </div>
          <input
            type="radio"
            name="category"
            id="diary"
            className="hidden"
            value="diary"
            checked={isRadioSelected("diary")}
            onChange={() => setSelectedRadio("diary")}
            onClick={() => handleFilterChange("diary")}
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
            name="category"
            id="proteins"
            className="hidden"
            value="proteins"
            checked={isRadioSelected("proteins")}
            onChange={() => setSelectedRadio("proteins")}
            onClick={() => handleFilterChange("proteins")}
          />
          <div>
            <label
              htmlFor="proteins"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("proteins") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Proteins
            </label>
          </div>

          <input
            type="radio"
            name="category"
            id="vegetables"
            className="hidden"
            value="vegetables"
            checked={isRadioSelected("vegetables")}
            onChange={() => setSelectedRadio("vegetables")}
            onClick={() => handleFilterChange("vegetables")}
          />

          <div>
            <label
              htmlFor="vegetables"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("vegetables") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Vegetables
            </label>
          </div>
          <input
            type="radio"
            name="category"
            id="carbohydrates"
            className="hidden"
            value="carbohydrates"
            checked={isRadioSelected("carbohydrates")}
            onChange={() => setSelectedRadio("carbohydrates")}
            onClick={() => handleFilterChange("carbohydrates")}
          />

          <div>
            <label
              htmlFor="carbohydrates"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("carbohydrates") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Carbohydrates
            </label>
          </div>
          <input
            type="radio"
            name="category"
            id="fruits"
            className="hidden"
            value="fruits"
            checked={isRadioSelected("fruits")}
            onChange={() => setSelectedRadio("fruits")}
            onClick={() => handleFilterChange("fruits")}
          />

          <div>
            <label
              htmlFor="fruits"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("fruits") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Fruits
            </label>
          </div>
          <input
            type="radio"
            name="category"
            id="spices"
            className="hidden"
            value="spices"
            checked={isRadioSelected("spices")}
            onChange={() => setSelectedRadio("spices")}
            onClick={() => handleFilterChange("spices")}
          />

          <div>
            <label
              htmlFor="spices"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("spices") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Spices
            </label>
          </div>
          <input
            type="radio"
            name="category"
            id="herbs"
            className="hidden"
            value="herbs"
            checked={isRadioSelected("herbs")}
            onChange={() => setSelectedRadio("herbs")}
            onClick={() => handleFilterChange("herbs")}
          />

          <div>
            <label
              htmlFor="herbs"
              className="flex items-center gap-2 p-2 sm:p-[14px] font-oswald text-sm cursor-pointer"
            >
              <div className="bg-white flex justify-center items-center w-5 h-5 rounded">
                {isRadioSelected("herbs") && (
                  <div className="w-[16px] h-[16px] rounded bg-green-10"></div>
                )}
              </div>
              Herbs
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
