"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";

const testpage = () => {
  return (
    <div className="flex">
      <p className="flex-grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit justo nec justo
        dictum, nec sollicitudin odio porta.
      </p>
      <img
        src="Bug2.jpg"
        alt="placeholder"
        className="flex-none object-cover"
        style={{ height: 'auto' }}
      />
    </div>
  );
};

export default testpage;
