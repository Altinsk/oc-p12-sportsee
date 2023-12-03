import * as React from "react";

function IconSwimming(props) {
  return (
    <svg
      fill="none"
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M17 9 A1 1 0 0 1 16 10 A1 1 0 0 1 15 9 A1 1 0 0 1 17 9 z" />
      <path d="M6 11l4-2 3.5 3-1.5 2M3 16.75A2.4 2.4 0 004 17a2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 001-.25" />
    </svg>
  );
}

export default IconSwimming;
