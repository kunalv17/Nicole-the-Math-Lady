import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  EnvelopeIcon,
  Square2StackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { AiFillHeart } from "react-icons/ai";
import { BsDribbble, BsDiscord, BsMessenger, BsLinkedin } from "react-icons/bs";
import { GiBoxingGlove } from "react-icons/gi";
import { FaCoffee, FaBicycle, FaTelegramPlane } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-between">
      <div className="mx-6 mt-8 flex justify-between items-center">
        <div>
          <ArrowLeftIcon className="w-4 h-4 stroke-[2.5]" />
        </div>
        <div className="text-2xl font-bold">Profile</div>
        <div className="flex items-center justify-center w-12 h-12 bg-[#232323] rounded-full">
          <PencilIcon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-center mb-8 ">
          <div className="h-48 w-48 bg-gradient-to-br from-gray-400/50 via-gray-400/30 to-white/30 rounded-[30px]"></div>
          <div className="absolute h-24 w-24 bg-gradient-to-br from-gray-300 via-gray-300 to-white rounded-[20px] -left-5 rotate-12 z-[-1]" />
          <div className="absolute h-24 w-24 bg-gradient-to-br from-gray-300 via-gray-300 to-white rounded-[20px] -right-5 -rotate-12 z-[-1]" />
        </div>
        <div className="text-black flex flex-col justify-center text-center">
          <div className="text-3xl flex justify-center items-center gap-2">
            <span className="font-extrabold">Ley, </span> 25{" "}
            <span className="bg-[#6156e0] text-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4" />
            </span>
          </div>
          <p className="font-bold text-sm">Banten, Indonesia</p>
        </div>
        <div className="flex justify-evenly mt-12">
          <div>
            <FaTelegramPlane className="h-6 w-6 text-[#27a4e1]" />
          </div>
          <div>
            <BsDiscord className="h-6 w-6 text-[#5966f4]" />
          </div>
          <div>
            <BsMessenger className="h-6 w-6 text-[#27a4e1]" />
          </div>
          <div>
            <BsLinkedin className="h-6 w-6 text-[#0c62b8]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mx-6 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Interests</div>
            <p className="text-[#8c8a94] text-xs">Edit</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2  mb-4">
            <div className="rounded-full text-sm text-[#e34984] flex bg-[#e3498430] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <BsDribbble className="h-4 w-4" />
              </span>{" "}
              Dribble
            </div>
            <div className="rounded-full text-sm text-[#e25b53] flex bg-[#e25b5330] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <GiBoxingGlove className="h-4 w-4" />
              </span>{" "}
              Boxing
            </div>
            <div className="rounded-full text-sm text-[#b88727] flex bg-[#b8872730] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <FaCoffee className="h-4 w-4" />
              </span>{" "}
              Coffee
            </div>
            <div className="rounded-full text-sm text-[#6558d3] flex bg-[#6558d330] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <IoMusicalNotes className="h-4 w-4" />
              </span>{" "}
              Music
            </div>
            <div className="rounded-full text-sm text-[#b92b64] flex bg-[#b92b6430] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <MdDesignServices className="h-4 w-4" />
              </span>{" "}
              Design
            </div>
            <div className="rounded-full text-sm text-[#d2645e] flex bg-[#d2645e30] font-semibold items-center gap-2 px-2 py-1">
              <span>
                <FaBicycle className="h-5 w-5" />
              </span>{" "}
              Cycling
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full my-4">
          <div>
            <Square2StackIcon className="h-8 w-8 text-[#8c8a94]" />
          </div>
          <div>
            <EnvelopeIcon className="h-8 w-8 text-[#8c8a94]" />
          </div>
          <div>
            <AiFillHeart className="h-8 w-8 text-[#8c8a94]" />
          </div>
          <Link href={"/"}>
            <div>
              <UserIcon className="h-8 w-8 text-[#8c8a94]" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
