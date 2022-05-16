import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import useCommon from "../useCommon";

const CustomCard = ({ label, icon, ...props }) => {
  const { isDark, isLarge, palette } = useCommon();
  return (
    <Card
      sx={{
        backgroundColor: palette.primary.main,
        color: isDark ? "black" : "white",
        minWidth: isLarge ? "48%" : "32%",
        maxWidth: isLarge ? "48%" : "32%",
        my: 0.25,
        mx: 0.1,
        opacity: 0.8,
        transition: "1s",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <CardHeader
        avatar={icon}
        title={label}
        sx={{
          py: 0.5,
          background: isDark
            ? "linear-gradient(45deg, #000428 , #004e92)"
            : "linear-gradient(0deg, #018eff,#00aeff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "left",
        }}
      />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CustomCard;
