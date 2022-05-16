import { Box, keyframes } from "@mui/material";
//animation
import styled from "@emotion/styled";

//.jello-vertical
const animate = keyframes`
0% {
-webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
}
30% {
-webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
}
40% {
-webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
}
50% {
-webkit-transform: scale3d(0.85, 1.15, 1);
        transform: scale3d(0.85, 1.15, 1);
}
65% {
-webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
}
75% {
-webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
}
100% {
-webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
}
`;

const CustomBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 80,
  animation: `${animate} 1.5s ease-in 2s both`,
}));

export default CustomBox;
