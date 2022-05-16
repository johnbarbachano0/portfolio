import { Box } from "@mui/material";
import styled from "@emotion/styled";
import animate from "../Animate";

const CustomBox = styled(Box)(({ ...props }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  animation: `${animate} 5s ease-in-out infinite alternate both`,
  ...props?.styles,
}));

export default CustomBox;
