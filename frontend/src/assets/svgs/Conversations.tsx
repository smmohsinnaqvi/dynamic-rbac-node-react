import React from "react";

const Conversations = ({ stroke = "#7D7D7D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.3333L2.86667 10.7333C1.31733 8.442 1.916 5.48533 4.26667 3.81733C6.61733 2.15 9.99333 2.28666 12.1633 4.13733C14.3333 5.98866 14.6267 8.98133 12.8493 11.138C11.072 13.2947 7.77267 13.948 5.13333 12.6667L2 13.3333Z"
        stroke={stroke}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Conversations;
