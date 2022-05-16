import { keyframes, Typography } from "@mui/material";
//animation
import styled from "@emotion/styled";

const textChange = (color) => keyframes`
0% {
  letter-spacing: 1px;
  color: "black";
  }
100% {
  letter-spacing: 3px;
  color: ${color};
}
`;

const RoleText = styled(Typography)(({ textcolor, ...props }) => ({
  fontFamily: "Merriweather",
  animation: `${textChange(textcolor)} 1s both`,
  animationDelay: "1s",
  fontWeight: "bold",
  ...props?.styles,
}));

export default RoleText;
