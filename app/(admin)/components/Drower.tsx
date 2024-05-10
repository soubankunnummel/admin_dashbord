import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import DescriptionIcon from "@mui/icons-material/Description";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Link from "next/link";
const Drawer = () => {
  function closeDrawer() {
    const drawer: HTMLInputElement | null = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    drawer.checked = false;
  }
  return (
    <div className="drawer  z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4  w-60 min-h-full bg-base-200 text-base-content">
          <div className="w-full mt-10">
            <Link onClick={closeDrawer} href={"/"}>
              <div className="text-lg font-semibold my-4 pl-3 flex">
                <HomeIcon />
                <h4 className="ml-3">Home</h4>
              </div>
            </Link>
            <Link onClick={closeDrawer} href={"/EmployeeList"}>
              <div className="text-lg font-semibold my-4 pl-3 flex">
                <CelebrationIcon />
                <h4 className="ml-3">EmployeeList</h4>
              </div>
            </Link>
            {/* <Link onClick={closeDrawer} href={"/admin/about"}>
              <div className="text-lg font-semibold my-4 pl-3 flex">
                <InfoIcon />
                <h4 className="ml-3">About</h4>
              </div>
            </Link>
            <Link onClick={closeDrawer} href={"/admin/gallery"}>
              <div className="text-lg font-semibold my-4 pl-3 flex">
                <CollectionsIcon />
                <h4 className="ml-3">Gallery</h4>
              </div>
            </Link>
            <Link onClick={closeDrawer} href={"/admin/documents"}>
              <div className="text-lg font-semibold my-4 pl-3 flex">
                <DescriptionIcon />
                <h4 className="ml-3">Documents</h4>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
