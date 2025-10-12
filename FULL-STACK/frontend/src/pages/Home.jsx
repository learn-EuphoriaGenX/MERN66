import React from "react";
import round from "../assets/roun.png";

import bycicle from "../assets/bycicle.png";
import car from "../assets/car.png";
import corporate from "../assets/corporate.png";
import desktop from "../assets/desktop.png";
import shoes from "../assets/shoes.png";
import Button from "../components/Button";
import CategoryItems from "../components/CategoryItems";

function Home() {



  return (
    <div>
      <div className="relative min-h-[600px] pt-20 flex items-center justify-between px-40 overflow-hidden ">
        {/* ===== Background Shape ===== */}
        <img
          src={round}
          alt="background-shape"
          className="absolute top-[-190px] right-[-190px] w-[700px] z-10 select-none pointer-events-none"
        />

        {/* ===== Text Section ===== */}
        <div className="max-w-xl z-20 mt-20">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            World Top{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Selling,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Products & Property
            </span>
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            facilisis ultricies habitant eget volutpat at aenean in dolor.
          </p>

          {/* ===== Search Bar ===== */}
          <div className="mt-6 bg-white rounded-xl shadow-md p-2 flex items-center w-[320px]">
            <input
              type="text"
              placeholder="e.g. wordpress"
              className="flex-1 px-4 py-2 text-gray-700 rounded-full focus:outline-none"
            />
            <Button text={"Search"} />
          </div>
        </div>

        {/* ===== Floating Icons ===== */}
        <div className="relative w-[500px] h-[500px] z-10">
          <div className="bg-white inline-block rounded-lg px-3 py-2 shadow-md absolute top-[80px] left-[60px] animate-float">
            <img src={corporate} alt="corporate" className="w-16" />
          </div>

          <div className="bg-white inline-block rounded-lg px-3 py-2 shadow-md absolute top-[50px] right-[90px] animate-float-slow">
            <img src={shoes} alt="shoes" className="w-16" />
          </div>

          <div className="bg-white inline-block rounded-lg px-3 py-2 shadow-md absolute bottom-[100px] left-[30px] animate-float">
            <img src={bycicle} alt="bicycle" className="w-16" />
          </div>

          <div className="bg-white inline-block rounded-lg px-3 py-2 shadow-md absolute bottom-[150px] right-[120px] animate-float-slow">
            <img src={car} alt="car" className="w-16" />
          </div>

          <div className="bg-white inline-block rounded-lg px-3 py-2 shadow-md absolute top-[200px] right-[180px] animate-float">
            <img src={desktop} alt="desktop" className="w-16" />
          </div>
        </div>
      </div>
      <CategoryItems />
    </div>
  );
}

export default Home;
