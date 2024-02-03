import React from "react";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { PiNotebookDuotone, PiShoppingCart } from "react-icons/pi";
import { LiaTruckMonsterSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { RiSettings3Line } from "react-icons/ri";
import { HiOutlineBriefcase } from "react-icons/hi";

const links = [
  {
    title: "Home",
    link: "/dashboard/home",
    icon: <CiHome />,
  },
  {
    title: "My Blog",
    link: "/dashboard/customer-blog",
    icon: <PiNotebookDuotone />,
  },
  {
    title: "Farmers Hub",
    link: "/dashboard/farmers-hub",
    icon: <LiaTruckMonsterSolid />,
  },
  {
    title: "Shop",
    link: "/dashboard/shop",
    icon: <PiShoppingCart />,
  },
  {
    title: "Order History",
    link: "/dashboard/order",
    icon: <HiOutlineBriefcase />,
  },
  {
    title: "Favourites",
    link: "/dashboard/favourites",
    icon: <GoHeart />,
  },
  {
    title: "Settings",
    link: "/dashboard/settings",
    icon: <RiSettings3Line />,
  },
];

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 w-screen md:hidden bg-green-20">
      <ul className="flex justify-around px-2 py-1 font-oswald">
        {links.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.link}
              className="gap-4 flex px-3 py-2 items-center rounded-[10px] text-[24px] hover:bg-white"
            >
              {nav.icon}
              <span className="text-sm hidden md:block">{nav.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
