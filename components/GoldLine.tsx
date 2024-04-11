import React from "react";

export default function GoldLine({ className = "w-full" }) {
  return (
    <div
      className={`${className} h-1 mt-1.5 bg-gradient-to-r from-secondary from-70% to-secondary-600`}
    ></div>
  );
}
