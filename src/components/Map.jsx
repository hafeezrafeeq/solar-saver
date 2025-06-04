import React, { useState } from "react";

const ImageSwitcher = () => {
  const [selectedImage, setSelectedImage] = useState("img1"); // Default is Full Install

  const Img1 = "https://solarsaver.vercel.app/assets/map-img1-DR_uFjwz.webp";
  const Img2 = "https://solarsaver.vercel.app/assets/map-img2-CzFhrCce.webp";

  return (
    <>


      <div className="flex flex-col items-center space-y-4 mx-20 ">
        
      <h1 className="heding  lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-amber-500 text-center ">WE'VE<i className="not-italic text-stone-50"> GOT YOU COVERED</i></h1>
      <p className="text-center text-stone-50 lg:text-1xl md:text-xl sm:text-2xl text-lg mt-4 w-1/1 text-center ">Solar Saver uses the highest quality solar panels and inverters. Trust our cutting-edge technology for superior performance and durability.</p>
      
        <div className="flex space-x-4 border-2 border-amber-500 p-1 my-20 rounded-lg">
          <button
            onClick={() => setSelectedImage("img1")}
            className={`px-4 py-2 rounded ${selectedImage === "img1" ? "bg-amber-500 text-white" : "text-amber-500"
              }`}
          >
            Full Install
          </button>
          <button
            onClick={() => setSelectedImage("img2")}
            className={`px-4 py-2 rounded ${selectedImage === "img2" ? "bg-amber-500 text-white" : "text-amber-500"
              }`}
          >
            Map
          </button>
        </div>

        <img
          src={selectedImage === "img1" ? Img1 : Img2}
          alt="Selected"
          className="w-300 h-auto rounded shadow-lg"
        />
      </div>
    </>
  );
};

export default ImageSwitcher;
