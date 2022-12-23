import { keyframes } from 'styled-components';

export const fadeInLeft = keyframes`
  0% {
    transform: translateZ(-1400px) translateX(-1000px);
    opacity: 0;
  }
  
  100% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }

  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }

  33% {
   transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

export const puff = keyframes`
  0% {
    transform: translateZ(1400px) translateX(1000px);
    filter: blur(4px);
    opacity: 0;
  }

  100% {
    transform: translateZ(0) translateX(0);
    filter: blur(0px);
    opacity: 1;
  }
`;
