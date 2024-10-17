import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DesktopDefaultPageFormat = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex-grow max-w-7xl mx-5">{children}</div>
    </div>
  );
};

export default DesktopDefaultPageFormat;
