import React, { forwardRef } from "react";
import { Box } from "@mui/system";
import useCommon from "./useCommon";

const Container = forwardRef((props, ref) => {
  const { isDark, isMobile } = useCommon();

  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: isDark ? "none" : `url(${props.image})`,
        width: "100%",
      }}
      ref={ref}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 10,
          px: 2,
          bgcolor: isDark ? "none" : "rgba(255, 255, 255, .5)",
          ...props.style,
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ...props.styleCont,
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
});

export default Container;
