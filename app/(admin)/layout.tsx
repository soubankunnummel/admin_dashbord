import React from "react";
import NaveBar from "./components/NaveBar";
import SideBar from "./components/SideBar";
 

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" h-full lg:h-screen text-black flex flex-col">
      <NaveBar />
      <div className="flex h-full overflow-hidden">
        <div className=" hidden flex-initial w-[15%] lg:flex items-start justify-center h-full shadow-2xl">
          <SideBar />
        </div>
        <div className="flex-1 bg-gray-200 overflow-scroll lg:overflow-x-hidden h-full p-4">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

