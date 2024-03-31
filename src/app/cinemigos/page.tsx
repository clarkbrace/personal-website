import React from "react";
import MainNavigation from "@/components/MainNavigation";

const cinemigos = () => {
  return (
    <>
      <MainNavigation />
      <div className="flex">
        <div className="flex flex-nowrap">
          <div className="flex flex-col">
            <h1>Cinemigos</h1>
            <p className="w-3/4 p-5">
              Cinemigos is a movie discovery social media platform I co-created
              with Jack Bodine for our senior year capstone project. Cinemigos
              presents users with endless movies to swipe through and allows you
              to connect with friends over common movie interests.
            </p>
          </div>
          <video className="w-60 border-black rounded-xl border-2" autoPlay muted>
            <source src="/cinemigos/SwipingDemo.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  );
};

export default cinemigos;
