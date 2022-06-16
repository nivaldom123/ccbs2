import React from "react";

/**
 * Pulse Dot Component
 * @returns
 */

interface PulseDotProp {
  accentColor?: string;
  size?: number;
  style?: React.CSSProperties;
}
const PulseDot = (props: PulseDotProp) => {
  const { accentColor = "#62bd19", size = 30 } = props;
  return (
    <div className="ring-container" {...props}>
      <div className="ringring"></div>
      <div className="circle"></div>
      {/* @ts-ignore */}
      <style>
        {`
          .ring-container {
            min-height:${size}px;
            min-width: ${size}px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .circle {
            width: ${size / 2}px;
            height: ${size / 2}px;
            background-color: ${accentColor};
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .ringring {
            border: 3px solid ${accentColor};
            -webkit-border-radius: 30px;
            height: 100%;
            width: 100%;
            position: absolute;
            -webkit-animation: pulsate 1s ease-out;
            -webkit-animation-iteration-count: infinite;
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          @-webkit-keyframes pulsate {
            0% {
              -webkit-transform:translate(-50%,-50%) scale(0.1, 0.1);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              -webkit-transform:translate(-50%,-50%) scale(1.2, 1.2);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
export default PulseDot;
