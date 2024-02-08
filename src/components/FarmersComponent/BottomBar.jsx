import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { PiNotebookDuotone } from "react-icons/pi";
import { MdOutlineDiscount } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSettings3Line } from "react-icons/ri";
import { MdPowerSettingsNew } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";

const links = [
  {
    title: "Home",
    link: "/dashboard",
    icon: <CiHome />,
  },
  {
    title: "My Listings",
    link: "/dashboard/customer-blog",
    icon: <PiNotebookDuotone />,
  },
  {
    title: "Order History",
    link: "/order",
    icon: <HiOutlineBriefcase />,
  },
  {
    title: "Discount Codes",
    link: "/discount",
    icon: <MdOutlineDiscount />,
  },
  {
    title: "Shipping",
    link: "/shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Settings",
    link: "/settings",
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
