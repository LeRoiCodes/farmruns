import React from "react";
import Sidebar from "../DasboardComponents/Sidebar";
import { Outlet } from "react-router-dom";
import BottomBar from "../DasboardComponents/BottomBar";

const RootLayout = () => {
  return (
    <section className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
      <BottomBar />
    </section>
  );
};

export default RootLayout;
