"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import DescriptionIcon from "@mui/icons-material/Description";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { usePathname } from "next/navigation";
const SideBar = () => {
  const currentPath = usePathname();
  return (
    <div className="w-full mt-10">
      <ul className="w-full text-lg">
        <Link href={"/"}>
          <li
            className={`py-4 group ${
              currentPath === "/" && `bg-gray-300`
            } hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <HomeIcon className="text-[20px] group-hover:text-white" />{" "}
            <h5 className="ml-4">Home</h5>
          </li>
        </Link>
        <Link href={"/EmployeeList"}>
          <li
            className={`py-4 group ${
              currentPath === "/EmployeeList" && `bg-gray-300`
            } hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <InfoIcon className="text-[20px] group-hover:text-white" />{" "}
            <h5 className="ml-4">EmployeeList</h5>
          </li>
        </Link>
        {/* <Link href={"/"}>
          <li
            className={`py-4 group ${
              currentPath === "/" && `bg-gray-300`
            } hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <CollectionsIcon className="text-[20px] group-hover:text-white" />{" "}
            <h5 className="ml-4">Gallery</h5>
          </li>
        </Link>
      
        <Link href={"/"}>
          <li
            className={`py-4 group ${
              currentPath === "/" && `bg-gray-300`
            } hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <DescriptionIcon className="text-[20px] group-hover:text-white" />{" "}
            <h5 className="ml-4">Documents</h5>
          </li>
        </Link>
        <Link href={"/"}>
          <li
            className={`py-4 group ${
              currentPath === "/" && `bg-gray-300`
            }  hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <CelebrationIcon className="text-[20px] group-hover:text-white " />{" "}
            <h5 className="ml-4">Events</h5>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default SideBar;
