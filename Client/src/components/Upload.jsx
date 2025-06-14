import React from "react";
import { assets } from "../assets/assets";

export default function Upload() {
  return (
    <div className="pb-16">
      <div className="text-center mb-24">
        <input type="file" name="" id="upload1" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor=""
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
    </div>
  );
}
