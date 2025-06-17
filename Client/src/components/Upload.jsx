import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export default function Upload() {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="pb-16">
      <div className="text-center mb-24">
        <input onChange={e=>e.target.files[0]} type="file" accept="image/*" id="upload1" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-[#8b4d44] to-[#b48076] m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload1"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm font-medium">Upload your image</p>
        </label>
      </div>
    </div>
  );
}
