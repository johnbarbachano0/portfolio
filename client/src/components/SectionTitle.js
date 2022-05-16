import { Typography, keyframes } from "@mui/material";
import useCommon from "./useCommon";

import styled from "@emotion/styled";

export const animate = ({ color1, color2 }) => keyframes`
  0% {
    background-image: linear-gradient(0deg, ${color1}, ${color1} , ${color2});
    background-clip: text;
    text-fill-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color;
  }
  25% {
    background-image: linear-gradient(0deg,  ${color1}, ${color2}, ${color2});
    background-clip: text;
    text-fill-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color;
  }
  50% {
    background-image: linear-gradient(0deg,  ${color2}, ${color2}, ${color2});
    background-clip: text;
    text-fill-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color;
  }
  75% {
    background: linear-gradient(0deg,  ${color2}, ${color2}, ${color1});
    background-clip: text;
    text-fill-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color;
  }
  100% {
    background: linear-gradient(0deg,  ${color2}, ${color1}, ${color1});
    background-clip: text;
    text-fill-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color;
  }
`;

const SectionTitle = styled(Typography)(({ theme, ...props }) => {
  const { isDark } = useCommon();
  return {
    fontFamily: "Merriweather",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: 1,
    animation: `${animate(
      isDark
        ? { color1: "#00aeff", color2: "#a68eff" }
        : { color1: "#000428", color2: "#004e92" }
    )} 5s ease-in-out infinite alternate both;`,
    ...props?.styles,
  };
});

export default SectionTitle;
