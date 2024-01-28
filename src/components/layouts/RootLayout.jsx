import React from "react";
import Sidebar from "../DasboardComponents/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </section>
  );
};

export default RootLayout;
