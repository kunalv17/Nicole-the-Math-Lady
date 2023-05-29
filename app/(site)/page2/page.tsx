import { TiLocation } from "react-icons/ti";
import { HiBell } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BsFillMicMuteFill } from "react-icons/bs";
import {
  Square2StackIcon,
  EnvelopeIcon,
  UserIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-between">
      <div className="mx-6 mt-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#b7b6b6] to-white w-10 h-10">
            <UserIcon className="h-6 w-6 text-[#8c8a94]/20" />
          </div>
          <div className=" text-lg">
            Hi, <span className="font-extrabold">Lay</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <TiLocation className="h-6 w-6 text-[#262626]" />
          </div>
          <div className="relative">
            <HiBell className="h-6 w-6 text-[#262626]" />
            <div className="h-2.5 w-2.5 border-2 border-white bg-[#7bbb37] rounded-full absolute top-0 right-0" />
          </div>
        </div>
      </div>
      <div className="relative mx-6">
        <div className="bg-[#f1c45f] h-[26rem] mt-8 rounded-[40px] flex flex-col justify-between">
          <div className="mt-6 flex flex-col gap-2">
            <div className="bg-white/20 p-3 rounded-full ml-6 w-fit">
              <VideoCameraIcon className="h-5 w-5 text-white" />
            </div>
            <div className="bg-white/20 p-3 rounded-full ml-6 w-fit">
              <SpeakerWaveIcon className="h-5 w-5 text-white" />
            </div>
            <div className="bg-white/20 p-3 rounded-full ml-6 w-fit">
              <BsFillMicMuteFill className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="text-white">
            <div className="text-3xl ml-6">
              <span className="font-extrabold">Jenny,</span> 25
            </div>
            <p className="ml-6 font-bold text-sm">Banten, Indonesia</p>
          </div>
          <div className="absolute from-[#f2b9ac] via-[#f2b9ac] to-[#262626]/20 bg-gradient-to-r w-[90%] h-[26rem] rounded-[40px] left-12 -top-1 rotate-12 z-[-1]" />
          <div className="absolute h-6 w-4 bg-[#f1c45f] -bottom-[9.5px] left-[76px] rounded-br-full border-white border-r-[10px] border-b-[10px] box-content" />
          <div className="absolute h-6 w-4 bg-[#f1c45f] -bottom-[9.5px] right-[74px] rounded-bl-full border-white border-l-[10px] border-b-[10px] box-content" />
          <div />
          <div></div>
          <div className="absolute -bottom-6 left-[calc(50%-44px)] bg-white h-[90px] w-[90px] rounded-full flex items-center justify-center">
            <div>
              <div className="bg-[#232323] rounded-full w-14 h-14 flex items-center justify-center">
                <PauseIcon className="w-6 h-6 text-white" />
                <div className="absolute flex items-center justify-center -m-6 overflow-hidden rounded-full -rotate-90">
                  <svg
                    className="w-32 h-32 transform translate-x-1 translate-y-1"
                    x-cloak
                    aria-hidden="true"
                  >
                    <circle
                      className="text-[#232323]"
                      strokeWidth="3"
                      strokeDasharray="200"
                      strokeDashoffset="80"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="33"
                      cx="60"
                      cy="60"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-6 bottom-6 w-12 h-1 bg-white rounded-full flex justify-end">
            <div className="w-1/2 h-1 bg-[#232323] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex mx-12 justify-between items-center">
          <div className="bg-[#fc7b72] p-3 rounded-full">
            <XMarkIcon className="h-8 w-8 text-white font-extrabold stroke-[3]" />
          </div>
          <div className="text-4xl">👋</div>
          <div className="bg-[#6256e5] p-3 rounded-full flex items-center justify-center">
            <AiFillHeart className="h-8 w-8 text-white font-extrabold" />
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
          <Link href={"/page3"}>
            <div>
              <UserIcon className="h-8 w-8 text-[#8c8a94]" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
