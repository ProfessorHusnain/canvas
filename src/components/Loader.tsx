import React from "react";

const smallSize = [
  "animate-div-small animate-div-small-size",
  "animate-div-small animate-div-small-size -delay-400",
  "animate-div-small animate-div-small-size -delay-800",
  "animate-div-small animate-div-small-size -delay-1200",
  "animate-div-small animate-div-small-size -delay-1600",
];
const largeSize = [
  "animate-div animate-div-large-size",
  "animate-div animate-div-large-size -delay-400",
  "animate-div animate-div-large-size -delay-800",
  "animate-div animate-div-large-size -delay-1200",
  "animate-div animate-div-large-size -delay-1600",
];

function Loader({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <div className="loader relative w-100 h-100 top-0 -left-14">
      {size === "small"
        ? smallSize.map((item, index) => (
            <div key={index} className={`${item} loader-color`} />
          ))
        : largeSize.map((item, index) => (
            <div key={index} className={`${item} loader-color`} />
          ))}
    </div>
  );
}

export default Loader;
