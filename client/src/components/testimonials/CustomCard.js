import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import useWindowDimensions from "../useWindowDimensions";
import useCommon from "../useCommon";
import { Card, CardContent, Typography } from "@mui/material";
import { items } from "../../helpers/roles";

const CustomCard = ({ name, data, pos }) => {
  const { isMobile, isDark, palette } = useCommon();
  const { height } = useWindowDimensions();
  const position = items?.find((item) => item?.id === pos)?.label;
  return (
    <Card
      sx={{
        backgroundColor: palette.primary.main,
        color: isDark ? "black" : "white",
        width: "100%",
        m: 0,
        border: "none",
        borderColor: "transparent",
        borderRadius: 0,
        pt: isMobile ? 1 : 5,
        pb: isMobile ? 4 : 5,
        px: isMobile ? 2.5 : 10,
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={"merri"}
          sx={{
            textAlign: "justify",
            fontSize: 15,
            py: 3,
            px: 1,
            height: 0.5 * height,
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "inline-block",
              width: 10,
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: 10,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundImage: "linear-gradient(0deg, #00aeff, #a68eff)",
              borderRadius: 10,
            },
          }}
        >
          <FormatQuoteRoundedIcon
            sx={{
              transform: "rotate(180deg)",
              fontSize: 16,
            }}
          />
          {data}
          <FormatQuoteRoundedIcon sx={{ fontSize: 16 }} />
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={"merri"}
          sx={{
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
            backgroundImage: isDark
              ? "linear-gradient(0deg, #000428 , #004e92)"
              : "linear-gradient(180deg, #00aeff, #a68eff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {name}
        </Typography>
        <Typography variant={"merri"} sx={{ fontSize: 8, textAlign: "center" }}>
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
