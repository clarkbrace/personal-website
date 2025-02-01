import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const DesktopDefaultPageFormat = ({ children, className = "" }: Props) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div className="flex-grow max-w-7xl mx-5 py-10 text-[#FFF5EE]">{children}</div>
    </div>
  );
};

export default DesktopDefaultPageFormat;
