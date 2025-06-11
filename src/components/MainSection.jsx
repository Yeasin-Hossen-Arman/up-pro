import React from "react";

const MainSection = () => {
  return (
    <div>
      <div class="bg-cyan-50 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex flex-col sm:flex-row py-16">
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Be on
              <span class="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div class="flex mt-8">
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>

          <div class="w-full sm:w-1/3 lg:w-2/5 relative mt-10 sm:mt-0 px-4 sm:px-0">
            <img
              src="src\assets\hero-img.png"
              class="w-40 sm:w-full mx-auto"
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
