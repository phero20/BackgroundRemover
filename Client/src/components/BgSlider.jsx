import React, { useState } from "react";
import { assets } from "../assets/assets";
import bgLayer from "/bg_layer.png";

export default function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With High <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
      
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt="With background"
          className="w-full h-auto"
        />

       
        <img
          src={bgLayer}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Background layer"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

      
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Without background"
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-30 slider"
        />
      </div>
    </div>
  );
}