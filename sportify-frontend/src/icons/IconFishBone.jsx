import * as React from "react";

function IconFishBone(props) {
  return (
    <svg
      fill="none"
      stroke="skyblue"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M16.69 7.44A6.973 6.973 0 0015 12a6.97 6.97 0 001.699 4.571m0-.004c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504a40.73 40.73 0 002.422 2.504A39.679 39.679 0 002 14.506M18 11v.01M4.422 12.005H15M7 10v4M11 8v8" />
    </svg>
  );
}

export default IconFishBone;
