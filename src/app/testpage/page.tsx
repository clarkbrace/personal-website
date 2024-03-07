"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";

const testpage = () => {
  const num = useRef(0);
  const [comp, setComp] = useState(retComp());

  function retComp() {
    // num.current += 1;
    console.log("Clicked");
    return <div>{num.current}</div>;
  }

  return (
    <>
      {comp}
      <button className="bg-white" onMouseUp={() => setComp(retComp())}>
        Click Me
      </button>
    </>
  );
};

export default testpage;
