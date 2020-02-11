import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
        opacity: 0;
      }
  100% {
        visibility: visible;
        opacity: 1;
  }
`;

export const bounce1 = keyframes`

    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    60% {
        opacity: 1;
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`;

export const bounce2 = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    60% {
        opacity: 1;
        transform: translateX(20px);
    }

    100% {
        transform: translateX(0);
    }
`;
