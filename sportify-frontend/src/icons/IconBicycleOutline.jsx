import * as React from "react";

function IconBicycleOutline(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="red"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fill="none"
        stroke="red"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zM124 288a76 76 0 1076 76 76.24 76.24 0 00-76-76z"
      />
      <path
        fill="none"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 360v-86l-64-42 80-88 40 72h56"
      />
      <path d="M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z" />
    </svg>
  );
}

export default IconBicycleOutline;
