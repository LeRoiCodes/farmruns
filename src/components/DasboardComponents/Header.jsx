import React from "react";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { PiShoppingCart } from "react-icons/pi";
import { BiStore } from "react-icons/bi";

const Header = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
      <div className="bg-white flex justify-center w-[48px] items-center sm:hidden rounded-[10px]">
        <CgSearch className="text-2xl text-[#919191]" />
      </div>

      <div className="bg-white hidden sm:flex gap-1 items-center rounded-[10px] col-span-2 py-[10px] px-5">
        <CgSearch className="text-2xl text-[#919191]" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search.."
          className="transparent font-oswald w-full p-1"
        />
      </div>
      <div className="flex justify-end">
        <nav className="flex items-center gap-3">
          <Link to="/shop" className="p-3 bg-white rounded-full">
            <PiShoppingCart className="text-2xl text-black" />
          </Link>
          <Link to="/shop" className="p-3 bg-white rounded-full">
            <BiStore className="text-2xl text-black" />
          </Link>
          <button className="flex justify-center items-center h-[48px] w-[48px] rounded-full overflow-hidden">
            <img
              src="../assets/profile-pic.png"
              alt="user profile"
              className="w-full h-full"
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
