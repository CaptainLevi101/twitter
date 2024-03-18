import Image from "next/image";

import { FaTwitter } from "react-icons/fa";
import React from "react";

import { MdOutlineHome } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoBookmarksOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHashtag } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode;
}
const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <MdOutlineHome />
  },
  {
    title: "Explore",
    icon: <CiHashtag />
  },
  {
    title: "Notifications",
    icon: <IoIosNotificationsOutline/>
  },
  {
    title: "Messages",
    icon: <TiMessages />
  },
  {
    title: "Bookmarks",
    icon: <IoBookmarksOutline />
  },
  {
    title: "Profile",
    icon: <CgProfile />
  },

]

export default function Home() {
  return (
    <div >
    <div className="grid grid-cols-12 h-screen width:90vw px-8">
      <div className="col-span-3 pt-8 px-4">
        <div className="text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-1 cursor-pointer transition-all hover:text-white">
          <FaTwitter />
        </div>
        <div className="mt-4 text-2xl font-semibold pr-4">
        <ul>
          {sideBarMenuItems.map((item)=><li key={item.title} 
          className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full cursor-pointer p-2 w-fit hover:text-white">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </li>)}
        </ul>
        <button className="bg-[#1d9bf0] p-4 rounded-full w-full mt-5">
          Tweet
        </button>
        </div>
      </div>
      <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="col-span-3"></div>
    </div>
    </div>
  );
}
