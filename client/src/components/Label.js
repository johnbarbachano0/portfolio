import React from "react";
import { Typography, SvgIcon } from "@mui/material";
import useCommon from "../components/useCommon";

const Label = ({ label, data, icon }) => {
  const { isDark } = useCommon();
  return (
    <Typography align="justify">
      <SvgIcon
        sx={{
          color: isDark ? "#00aeff" : "#004e92",
          fontSize: 16,
          position: "relative",
          top: 2,
          mr: 0.25,
        }}
      >
        {icon}
      </SvgIcon>
      <Typography
        component="span"
        variant="body2"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          backgroundImage: isDark
            ? "linear-gradient(0deg, #018eff,#00aeff)"
            : "linear-gradient(0deg, #000428 , #004e92)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {label}:{" "}
      </Typography>
      <Typography component="span" variant="body2">
        {data}
      </Typography>
    </Typography>
  );
};

export default Label;
