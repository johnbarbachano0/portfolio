import React from "react";
import useCommon from "../useCommon";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { keyframes } from "@mui/material";

const vibrate = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const CustomCard = ({ title, level }) => {
  const { isDark, palette, isLarge } = useCommon();

  const dispayLvl =
    level === 1 ? "Basic" : level === 2 ? "Intermediate" : "Advanced";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        my: 0.25,
        mx: isLarge ? "1%" : ".5%",
        p: 0.5,
        backgroundColor: palette.primary.main,
        borderRadius: 10,
        minWidth: isLarge ? "48%" : "32%",
        maxWidth: "32%",
        flex: isLarge ? 12 : 4,
        color:
          level === 1
            ? isDark
              ? "#EA5C2B"
              : "#FFCD38"
            : level === 2
            ? "#0AA1DD"
            : isDark
            ? "#0B4619"
            : "#6BCB77",
        "&:hover": {
          animation: `${vibrate} 0.25s linear 1 both`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CodeIcon
          fontSize="small"
          sx={{
            alignSelf: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 11,
          flexDirection: "column",
          px: 0.5,
          textAlign: "left",
        }}
      >
        <Typography sx={{ fontSize: 10, fontWeight: "bold" }} noWrap={false}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 8,
            fontStyle: "oblique",
          }}
        >
          {dispayLvl}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
