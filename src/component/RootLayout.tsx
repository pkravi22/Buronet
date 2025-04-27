// RootLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"; // import your SideBar component

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 lg:ml-60">
        {" "}
        {/* margin-left for sidebar width */}
        <Outlet /> {/* This will render nested routed components */}
      </main>
    </div>
  );
};

export default RootLayout;
