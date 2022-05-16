import React from "react";
import useCommon from "./useCommon";
import { Alert } from "@mui/material";

const CustomAlert = ({ type, message }) => {
  const { isMobile } = useCommon();

  return (
    <Alert
      severity={type}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 10,
        margin: isMobile ? 0 : 3,
        width: isMobile ? "100%" : "30%",
      }}
    >
      {message}
    </Alert>
  );
};

export default CustomAlert;
