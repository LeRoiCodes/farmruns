import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="md:w-[248px] h-screen hidden bg-green-20 md:flex flex-col overflow-y-scroll unwanted_scroll">
      <div className="flex px-2">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="../assets/farmruns-logo.svg"
            alt="farm runs logo"
            className="w-[28px]"
          />
          <span className="font-nanum text-[32px] font-normal hidden md:block">
            Farmruns
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
