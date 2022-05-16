import React from "react";
import { Typography } from "@mui/material";
import useCommon from "./useCommon";

const SectionTitle = (props) => {
  const { isDark } = useCommon();
  return (
    <Typography
      variant={"merri"}
      sx={{
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        backgroundImage: isDark
          ? "linear-gradient(180deg, #00aeff, #a68eff)"
          : "linear-gradient(0deg, #000428 , #004e92)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        p: 1,
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default SectionTitle;
