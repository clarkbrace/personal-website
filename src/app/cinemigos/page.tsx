import React from "react";
import MainNavigation from "@/components/MainNavigation";
import Link from "next/link";
import Image from "next/image";

const cinemigos = () => {
  return (
    <>
      <MainNavigation />
      <div className={`flex justify-center font-lexandDeca`}>
        <div className="flex max-w-4xl ">
          <div className="flex flex-col text-lg">
            <h1 className="w-full text-center text-6xl font-bold p-4">
              Cinemigos
            </h1>
            <div className="flex items-stretch pt-5">
              <div className="flex flex-nowrap">
                <p className="w-3/4 pr-4 ">
                  Cinemigos is a movie discovery social media platform I
                  co-created with Jack Bodine for our senior year capstone
                  project. Cinemigos presents users with endless movies to swipe
                  through and allows you to connect with friends over common
                  movie interests.
                  <br />
                  <br />
                  Created primarily for the iOS App Store, Cinemigos was written
                  in Swift and uses SwiftUI for its user interface. Cinemigos
                  uses{" "}
                  <a
                    href="https://www.themoviedb.org"
                    target="_blank"
                    className="text-blue-500"
                  >
                    The Movie Database
                  </a>{" "}
                  as its primary data source but also draws additional
                  information from the{" "}
                  <a
                    href="https://www.justwatch.com/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Just Watch API
                  </a>{" "}
                  to allow users to see where they can watch the movies they are
                  swiping through. Account creation and user data storage is
                  also supported with Cinemigos. After a user creates an
                  account, their data is added to a{" "}
                  <a
                    href="https://firebase.google.com"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Firebase
                  </a>{" "}
                  database which allows data to sync between devices.
                </p>
                <video
                  loop
                  className="border-black rounded-xl border-2 h-96"
                  autoPlay
                  muted
                >
                  <source
                    src="/cinemigos/SwipingDemo.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
            <div className="flex flex-nowrap w-full">
              <Image
                width={160}
                height={160} // To make sure next can render without explicit width
                src="/cinemigos/cinemigosIcon.webp"
                alt=""
                className="rounded-[30px] h-40 w-40"
              />
              <p className="p-3">
                The database also allows for users to connect and view each
                other&apos;s movie preferences. Additionally, users can create
                groups which allow many people to see the overlap in their movie
                preferences. Cinemigos also fully supports user account recovery
                with password changes as well as account deletion.
              </p>
            </div>
            <div>
              <p className="">
                The full report on the process of creating Cinemigos can be
                found{" "}
                <Link href="/cinemigospaper" className="text-blue-500">
                  Here
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="pt-10 justify-center w-full text-center">
                Also feel free to download Cinemigos on the app store today!
              </p>
              <div className="flex justify-center">
                <div>
                  <a
                    href="https://apps.apple.com/us/app/cinemigos/id1668502454"
                    target="_blank"
                    className="w-full p-3"
                  >
                    <Image
                      width={64}
                      height={32}
                      src="/icons/Download_on_the_App_Store_Badge.svg"
                      alt=""
                      className="w-64 hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cinemigos;
