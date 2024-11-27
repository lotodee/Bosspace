import * as React from "react";
const Eshop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#09153D" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M21 22H3" />
      <path strokeLinecap="round" d="M19 22v-7M5 22v-7" opacity={0.5} />
      <path
        strokeLinejoin="round"
        d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"
      />
    </g>
  </svg>
);
export default Eshop;