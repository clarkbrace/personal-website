"use client";
import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";
import React from "react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const testpage = () => {
  return (
    <>
      <DesktopDefaultPageFormat>
        <div className="border-black border-2 flex justify-center">
          <div className="border-black border-2 flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            bibendum pretium condimentum. In rhoncus ipsum enim, ultrices
            convallis nulla eleifend a. Maecenas ut lorem fringilla, elementum
            ligula a, lobortis augue. Pellentesque sem velit, suscipit id
            porttitor sed, feugiat eu erat. Phasellus et massa non risus aliquet
            congue vel vitae dui. Duis ultrices ex et nibh aliquam sollicitudin.
            Sed congue luctus ex vel lobortis. Suspendisse iaculis libero id
            hendrerit consequat. Aliquam id aliquet nulla. Nullam vehicula ut
            lectus ac efficitur. Curabitur nec libero vel nulla aliquet varius.
            Vestibulum facilisis, dui sit amet ultrices fringilla, libero felis
            feugiat massa, sit amet aliquet neque justo non libero. Proin vitae
            felis id ex ornare volutpat eu feugiat sapien. Cras egestas magna a
            orci vulputate, sed tempor risus elementum. Donec magna diam,
            rhoncus finibus dui sit amet, finibus maximus dui.
            <div className="aspect-square flex-grow">
              <Image
                src="/cinemigos/cinemigosIcon.webp"
                alt=""
                width={320}
                height={320}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </DesktopDefaultPageFormat>
    </>
  );
};

export default testpage;
