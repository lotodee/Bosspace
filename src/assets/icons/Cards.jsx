const Cards = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#09153D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path strokeMiterlimit={10} d="M2 12.61h17" />
      <path d="M19 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73Z" />
      <path d="M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73Z" />
      <path strokeMiterlimit={10} d="M5.25 17.81h1.72M9.11 17.81h3.44" />
    </g>
  </svg>
);
export default Cards;
