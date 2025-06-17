import React from "react";
import { assets } from "../assets/assets";

export default function Steps() {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl pb-1 md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-8 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-gradient-to-r from-[#8b4d44] to-[#b48076] border drop-shadow-md p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl text-white font-medium">Upload image</p>
            <p className="text-sm text-neutral-300 mt-1">This is a demo text, will replace it later. <br /> This is a demo..</p>
          </div>
        </div>
         <div className="flex items-start gap-4 bg-gradient-to-t from-[#8b4d44] to-[#b48076] border drop-shadow-md p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-7" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium text-white">Remove background</p>
            <p className="text-sm text-neutral-300 mt-1">This is a demo text, will replace it later. <br /> This is a demo..</p>
          </div>
        </div>
         <div className="flex items-start gap-4 bg-gradient-to-l from-[#8b4d44] to-[#b48076] border drop-shadow-md p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium text-white">Download image</p>
            <p className="text-sm text-neutral-300 mt-1">This is a demo text, will replace it later. <br /> This is a demo..</p>
          </div>
        </div>
      </div>
    </div>
  );
}
