import {ArrowUpRightIcon} from "@heroicons/react/24/outline"
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className="h-full relative">
      <div className="flex flex-col justify-between h-full">
        <div className="mx-5 mt-8 font-semibold">
          <span className="font-extrabold text-lg">META</span>MATCH
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-center text-[#212121]">
              Find your{" "}
              <span className="text-[#f77d72]">
                first <br /> meta
              </span>{" "}
              matches.
            </h1>
            <p className="font-medium text-center mt-2 text-[#212121]">
              Join us and socialize with millions <br /> of meta humans
            </p>
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <div className="bg-[#232323] p-4 px-6 w-44 rounded-2xl text-sm font-bold text-white flex justify-between items-center">
                <p>Get Started</p>
                <div>
                  <ArrowUpRightIcon className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
              <span className="p-4 bg-gradient-to-r from-white to-gray-300 rounded-2xl">
                <BsApple className="text-[#232323] h-6 w-6" />
              </span>
              <Link href="/page2" className="flex ">

                <span className="p-4 bg-gradient-to-r from-white to-gray-300 rounded-2xl">
                  <FcGoogle className="text-[#232323] h-6 w-6" />
                </span>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4 mb-6 text-center">
              Already have an account?{" "}
              <span className="text-[#f77d72] font-bold cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute rounded-full bg-[#8aa5ee] w-28 h-28 top-24 left-4" />
      <div className="absolute rounded-full bg-[#8aeed5] w-28 h-28 top-4 right-4" />
      <div className="absolute rounded-full bg-[#f1c45f] w-28 h-28 top-52 -left-10" />
      <div className="absolute rounded-full bg-[#f1c45f] w-28 h-28 top-72 -right-10" />
      <div className="absolute rounded-full bg-[#e89986] w-36 h-36 top-[132px] -right-14" />
      <div className="absolute rounded-full bg-gradient-to-br from-[#b7b6b6] to-white w-20 h-20 top-28 left-[137px]" />
      <div className="absolute rounded-full bg-gradient-to-br from-[#b7b6b6] to-white w-40 h-40 top-52 left-20" />
    </main>
  );
}
