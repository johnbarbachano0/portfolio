import { keyframes, Box } from "@mui/material";
//animation
import styled from "@emotion/styled";

const flipIn = keyframes`
  0% {
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

const flipOut = keyframes`
  0% {
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    opacity: 0;
  }
`;

const AnimatedBox = styled(Box)(({ entry, ...props }) => {
  return {
    animation: entry
      ? `${flipIn} 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`
      : `${flipOut} 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
    ...props?.styles,
  };
});

export default AnimatedBox;
