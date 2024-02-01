// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { CiHome } from "react-icons/ci";
// import { PiNotebookDuotone, PiShoppingCart } from "react-icons/pi";
// import { LiaTruckMonsterSolid } from "react-icons/lia";
// import { GoHeart } from "react-icons/go";
// import { RiSettings3Line } from "react-icons/ri";
// import { MdPowerSettingsNew } from "react-icons/md";
// import { HiOutlineBriefcase } from "react-icons/hi";

const links = [
  {
    title: "Home",
    link: "/dashboard",
    icon: <CiHome />,
  },
  {
    title: "My Blog",
    link: "/blog",
    icon: <PiNotebookDuotone />,
  },
  {
    title: "Farmers Hub",
    link: "/farmers-hub",
    icon: <LiaTruckMonsterSolid />,
  },
  {
    title: "Shop",
    link: "/shop",
    icon: <PiShoppingCart />,
  },
  {
    title: "Order History",
    link: "/order",
    icon: <HiOutlineBriefcase />,
  },
  {
    title: "Favourites",
    link: "/favourites",
    icon: <GoHeart />,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <RiSettings3Line />,
  },
];

const Sidebar = () => {
  return (
    <aside className="md:w-[248px] h-screen hidden bg-green-20 md:flex flex-col overflow-y-scroll unwanted_scroll">
      <div className="flex px-2">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="./assets/farmruns-logo.svg"
            alt="farm runs logo"
            className="w-[28px]"
          />
          <span className="font-nanum text-[32px] font-normal hidden md:block">
            Farmruns
          </span>
        </Link>
      </div>

      <ul className="flex flex-col gap-2 px-2 md:pr-0 md:pl-4 font-oswald">
        {links.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.link}
              className="gap-4 flex px-4 py-2 items-center rounded-[10px] text-[24px] hover:bg-gray-300"
            >
              {nav.icon}
              <span className="text-sm hidden md:block">{nav.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="px-2 md:pl-4 z-10">
          <button className="w-full gap-4 flex px-4 md:pr-0 py-2 items-center rounded-[10px] text-[24px] hover:bg-gray-300">
            <MdPowerSettingsNew />
            <span className="text-sm hidden md:block font-oswald">Logout</span>
          </button>
        </div>
        <div className="relative mt-[120px] hidden md:block">
          <img
            src="./assets/support.png"
            alt="customer support "
            className="absolute -top-[130px] inset-0"
          />
          <div className="text-center customer_box mx-auto flex justify-center items-center">
            <p className="font-oswald">
              Customer Support
              <br />
              24/7
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

// export default Sidebar;
