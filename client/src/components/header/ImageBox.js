import { Box, keyframes } from "@mui/material";
//animation
import styled from "@emotion/styled";
import animate from "../Animate";

//.jello-vertical
const borderChange = keyframes`
    0% {
        border-top-left-radius: 90px;
        border-top-right-radius: 90px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 60px;
    }
    15% {
        border-top-left-radius: 70px;
        border-top-right-radius: 70px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 40px;
    }
    30% {
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    45% {
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    60% {
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    75% {
        border-top-left-radius: 70px;
        border-top-right-radius: 70px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 40px;
    }
    100% {
        border-top-left-radius: 90px;
        border-top-right-radius: 90px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 60px;
    }
`;

const ImageBox = styled(Box)(() => ({
  padding: 40,
  paddingBottom: 0,
  background: "#018eff",
  animation: `${borderChange} 10s ease-in infinite,
    ${animate} 10s ease-in-out infinite alternate both`,
}));

export default ImageBox;
