import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Result() {
  const { resultImage, image,navigate } = useContext(AppContext);

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-gradient-to-t from-[#edd7d5] to-[#ffd1d1] rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              className="rounded-md border"
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className={`rounded-md border border-gray-300 h-full ${!resultImage ? "w-[95%]" : "" } relative bg-layer overflow-hidden`}>
              <img src={resultImage ? resultImage : ""} alt="" />
              {!resultImage && image && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="border-4 border-[#8b4d44] rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {resultImage && (
          <div className="flex items-center justify-center sm:justify-end flex-wrap gap-4 mt-6">
            <button onClick={()=> navigate('/')} className="px-8 py-2.5 text-[#904f42] text-sm border border-[#904f42] rounded-full hover:scale-105 transition-all duration-700">
              Try another image
            </button>
            <a
              href={resultImage}
              download
              className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-[#3e0e07] to-[#B85042] rounded-full hover:scale-105 transition-all duration-700"
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
