"use client";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import user from "@/public/svg/user.svg";
import hamburger from "@/public/svg/hamburger.svg";
import Image from "next/image";
import Drawer from "./Drower";

// import Drawer from "./drawer/Drawer";
const NaveBar = () => {
  const router = useRouter();
  const openProfile = () => {
    const profile = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (profile) {
      profile.showModal();
    }
  };
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("username")
    router.replace("/auth");
  };
  return (
    <nav className="h-[70px] bg-blue  flex items-center gap-3 justify-between lg:justify-end px-[3%]">
      <div className="flex lg:hidden">
        <label htmlFor="my-drawer">
          <Image src={hamburger} alt="hamburger" width={40} />
          <Drawer/>
        </label>
      </div>
      <div>
        <h2 className="text-white text-xl ">{Cookies.get('username') ? Cookies.get('username') : "user name"} </h2>
      </div>
      <div
        onClick={openProfile}
        className="w-10 h-10 rounded-full relative bg-black "
      >
        <Image src={user} alt="user" />
      </div>
      
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white  w-fit p-3 absolute right-[2%] top-[60px]">
          <div className="flex items-center">
            <h4 className="font-semibold mr-1">Logout</h4>
            <div onClick={logout} className="cursor-pointer">
              <LogoutIcon className="text-gray-500" />
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
};

export default NaveBar;
