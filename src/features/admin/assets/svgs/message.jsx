import React from "react";

const MessageIcon = ({color}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21.81C10.31 21.81 9.66 21.46 9.2 20.85L7.7 18.85C7.67 18.81 7.55 18.76 7.5 18.75H7C2.83 18.75 0.25 17.62 0.25 12V7C0.25 2.58 2.58 0.25 7 0.25H15C19.42 0.25 21.75 2.58 21.75 7V12C21.75 16.42 19.42 18.75 15 18.75H14.5C14.42 18.75 14.35 18.79 14.3 18.85L12.8 20.85C12.34 21.46 11.69 21.81 11 21.81ZM7 1.75C3.42 1.75 1.75 3.42 1.75 7V12C1.75 16.52 3.3 17.25 7 17.25H7.5C8.01 17.25 8.59 17.54 8.9 17.95L10.4 19.95C10.75 20.41 11.25 20.41 11.6 19.95L13.1 17.95C13.43 17.51 13.95 17.25 14.5 17.25H15C18.58 17.25 20.25 15.58 20.25 12V7C20.25 3.42 18.58 1.75 15 1.75H7Z"
        fill={color || "#292D32"}
      />
    </svg>
  );
};

export default MessageIcon;
