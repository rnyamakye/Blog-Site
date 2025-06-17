import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto md:mx-0 py-16 md:py-5 px-2 md:px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
