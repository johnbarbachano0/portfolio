import { keyframes, Typography } from "@mui/material";
//animation
import styled from "@emotion/styled";

const textShadowPopBr = keyframes`
  0% {
    letter-spacing: 1px;
    text-shadow: 0 0 #aaa, 0 0 #aaa, 0 0 #aaa;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    letter-spacing: 5px;
    text-shadow: 1px 1px #aaa, 1.5px 1.5px #aaa, 2px 2px #aaa;
    -webkit-transform: translateX(-2px) translateY(0);
            transform: translateX(-2px) translateY(0);
  }
`;

const TitleText = styled(Typography)(({ theme }) => ({
  padding: 12,
  letterSpacing: 1,
  fontFamily: "Merriweather",
  color: theme?.palette?.primary?.main,
  animation: `${textShadowPopBr} 5s both`,
  animationDelay: "1s",
}));

export default TitleText;
