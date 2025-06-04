import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const data = [
  {
    image: "https://solarsaver.vercel.app/assets/joh-doe-CpqoclS1.webp",
    stepNum: ",,",
    comment: "rommy",
    heding:
      "Solar Saver exceeded my expectations in every way. From the initial consultation to the final installation, their team was professional and efficient. The whole process was seamless. Highly recommend!",
  },
  {
    image: "https://solarsaver.vercel.app/assets/review-img2-1sDgRqsh.webp",
    stepNum: ",,",
    comment: "jony",
    heding:
      "Choosing Solar Saver was one of the best decisions. The installation was quick and hassle-free, and their customer service was top-notch. I appreciate the transparency and the significant savings on my energy costs. Fantastic experience!",
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

  const { image, stepNum, heding, comment } = data[index];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-start lg:gap-20 md:gap-15 sm:gap-0 max-w-7xl mx-auto mt-20 p-4">
      {/* Image */}
      <img
        src={image}
        alt="Step"
        className="rounded-lg w-1/1  lg:w-1/2 md:w-1/3 sm:w-1/3  h-auto object-cover shadow-xl"
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 fle flex-col justify-center text-center md:text-left">
        {/* Step Number */}
        <div className="flex items-baseline justify-center md:justify-start space-x-2 ">
          <span className="heding text-amber-500 text-8xl">{stepNum}</span>
        </div>

        {/* Heading */}
        <span className="heding text-white  lg:text-6xl  md:text-3xl sm:text-2xl text-2xl">
          {heding}
        </span>

        {/* Comment */}
        <p className="text-amber-500 text-lg leading-relaxed">
          @<span className="text-stone-50">{comment}</span>
        </p>

        {/* Arrows */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <button
            onClick={prevItem}
            className="p-3 text-amber-500 hover:text-amber-600 transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextItem}
            className="p-3 text-amber-500 hover:text-amber-600 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
