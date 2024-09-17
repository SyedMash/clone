"use client";
import ReactLenis from "lenis/react";

interface Props {
  children: React.ReactNode;
}

const Smooth = ({ children }: Props) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
export default Smooth
