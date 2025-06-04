import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const data = [
  {
    image: "https://solarsaver.vercel.app/assets/step-img2-CTlT3U4s.webp",
    stepNum: "01",
    comment:
      "Our team will conduct a comprehensive site assessment to evaluate your roof's condition, orientation, and shading. We use this data to create a customized solar panel layout that maximizes energy production.",
  },
  {
    image: "https://solarsaver.vercel.app/assets/step-img1-BlunsBST.webp",
    stepNum: "02",
    comment:
      "We handle all necessary permits and approvals required for your solar installation. This includes coordinating with local authorities and your utility company to ensure everything is in compliance with regulations.",
  },
  {
    image: "https://solarsaver.vercel.app/assets/step-img3-BuLfzWbM.webp",
    stepNum: "03",
    comment:
      "Our certified installers will set up your solar system efficiently and safely. Once installed, we conduct thorough testing to ensure optimal performance. After final inspection and approval, your system is activated, and you start generating clean energy.",
  },
];

export default function CommentSlider() {
  const [index, setIndex] = useState(0);

  const nextItem = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevItem = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const { image, stepNum, comment } = data[index];

  return (
    <div className="flex flex-col lg:mx-20 md:mx-10 sm:mx-5 items-center  mt-30">
      <div className="flex lg:justify-between  md:flex-row sm:flex-col flex-col  rounded-2xl ">
        {/* Left - Text */}
        <div className="md:w-1/1 w-full p-6 flex flex-col justify-center">
          <div className="flex items-baseline space-x-2 mb-4">
            <span className="heding text-white text-6xl">STEP</span>
            <span className="heding text-amber-500 text-8xl">{stepNum}</span>
          </div>
          <p className="text-stone-50 text-lg leading-relaxed">{comment}</p>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/1 w-full p-4 flex items-center justify-center ">
          <img
            src={image}
            alt="Step"
            className="rounded-lg w-full h-auto object-cover max-h-[300px] shadow-xl overflow-hidden"
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={prevItem}
          className="p-3 text-amber-500 transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextItem}
          className="p-3 text-amber-500 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
