import Image from "next/image";
import { PiPlanetLight } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { BsMicrosoft } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";

export default function Sidebar() {
  return (
    <aside className="w-56 border-r border-divider p-4 hidden md:block">
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="w-10 h-10 mb-6"
        width={40}
        height={40}
      />
      <nav className="space-y-4 text-sm text-gray-300">
        <h3 className="hover:text-white cursor-pointer flex items-center gap-2 font-normal">
          <PiPlanetLight />
          Home
        </h3>
        <h3 className="hover:text-white cursor-pointer flex items-center gap-2 font-normal">
          <FaPaperPlane />
          Discover
        </h3>
        <h3 className="mt-6 text-xs text-gray-500 uppercase">Your Stuff</h3>
        <h3 className="hover:text-white cursor-pointer flex items-center gap-2 font-normal">
          <TiThMenuOutline />
          My Queue
        </h3>
        <h3 className="hover:text-white cursor-pointer flex items-center gap-2 font-normal">
          <BsMicrosoft />
          My Podcasts
        </h3>
        <h3 className="hover:text-white cursor-pointer flex items-center gap-2 font-normal">
          <TfiTime />
          Recents
        </h3>
      </nav>
    </aside>
  );
}
