import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import { styles } from "./Styles";
import animate from "../Animate";

import { keyframes } from "@mui/material";

const flipVerticalRight = keyframes`
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Tag = ({ icon, title, animateStart, delay, ...props }) => {
  return (
    <Box
      sx={{
        ...styles.container,
        borderRadius: 1.5,
        border: 2,
        borderColor: "#6FDFDF",
        minWidth: 80,
        backgroundColor: "#22577E",
        p: 1,
        m: 0.5,
        flexWrap: "wrap",
        animation: animateStart
          ? `${flipVerticalRight} 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) ${delay} both, ${animate} 5s ease-in-out infinite alternate both`
          : null,
      }}
    >
      <Icon>{icon}</Icon>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: "bold",
          transition: "1s",
          "&:hover": {
            letterSpacing: 1.5,
          },
        }}
      >
        {title}
      </Typography>
      <Typography>{props.children}</Typography>
    </Box>
  );
};

export default Tag;
