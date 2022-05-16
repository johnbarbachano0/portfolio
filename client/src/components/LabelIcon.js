import React from "react";
import { Typography, SvgIcon } from "@mui/material";
import useCommon from "../components/useCommon";

const LabelIcon = ({ icon, data, ...props }) => {
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
        {...props}
      >
        {icon}
      </SvgIcon>
      <Typography component="span" variant="body2">
        {data}
      </Typography>
    </Typography>
  );
};

export default LabelIcon;
