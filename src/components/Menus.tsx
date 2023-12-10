import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Menus: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 flex">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Menus;
