import React from "react";

const GameIllustration = ({ numberOfErrors }) => {
  return (
    <section className="illustration">
      <svg
        alt="Preview"
        title="Preview"
        className="Preview"
        width="560"
        height="560"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* rod bottom - horca pie */}

        <rect y="145" width="160" height="15" fill="#C4C4C4" />
        <rect x="150" y="6" width="10" height="139" fill="#C4C4C4" />

        {/* rod top and rope - horca cabeza y cuerda */}

        {numberOfErrors > 0 && (
          <>
            <path d="M35 0H160V6H35V0Z" fill="#C4C4C4" />
            <line
              x1="36.8706"
              y1="3.41904"
              x2="150.606"
              y2="67.0335"
              stroke="#C4C4C4"
            />
            <line x1="35.5" y1="4" x2="35.5" y2="33" stroke="#C4C4C4" />
          </>
        )}

        {/* head and neck - cabeza y cuello */}

        {numberOfErrors > 1 && (
          <>
            <circle cx="26" cy="51" r="16" fill="#C4C4C4" />
            <rect x="33" y="31" width="6" height="2" fill="#C4C4C4" />
            <rect x="33" y="33" width="7" height="2" fill="#C4C4C4" />
            <rect x="35" y="35" width="5" height="2" fill="#C4C4C4" />
            <rect x="37" y="37" width="5" height="2" fill="#C4C4C4" />
            <path
              d="M33 69C33 70.1046 31.2091 71 29 71C26.7909 71 25 70.1046 25 69C25 67.8954 26.7909 67 29 67C31.2091 67 33 67.8954 33 69Z"
              fill="#C4C4C4"
            />
          </>
        )}

        {/* core - cuerpo */}

        {numberOfErrors > 2 && (
          <>
            <path
              d="M19 77C19 73.6863 21.6863 71 25 71H33C36.3137 71 39 73.6863 39 77V106C39 109.314 36.3137 112 33 112H25C21.6863 112 19 109.314 19 106V77Z"
              fill="#C4C4C4"
            />
          </>
        )}

        {/* arms - brazos */}
        {numberOfErrors > 3 && (
          <>
            <rect
              x="32.7711"
              y="83.0328"
              width="5.78313"
              height="23.1325"
              rx="2.89157"
              transform="rotate(-43.7163 32.7711 83.0328)"
              fill="#C4C4C4"
            />
            <rect
              x="20.2341"
              y="79.0361"
              width="5.78313"
              height="23.1325"
              rx="2.89157"
              transform="rotate(32.777 20.2341 79.0361)"
              fill="#C4C4C4"
            />
          </>
        )}

        {/* legs - piernas */}

        {numberOfErrors > 4 && (
          <>
            <rect
              x="30.8434"
              y="106.859"
              width="5.78313"
              height="30.7432"
              rx="2.89157"
              transform="rotate(-8.30138 30.8434 106.859)"
              fill="#C4C4C4"
            />
            <rect
              x="21.7536"
              y="106.024"
              width="5.78313"
              height="30.7432"
              rx="2.89157"
              transform="rotate(4.62037 21.7536 106.024)"
              fill="#C4C4C4"
            />
          </>
        )}
      </svg>
    </section>
  );
};
export default GameIllustration;
