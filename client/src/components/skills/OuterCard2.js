import React from "react";
import CustomCard from "./CustomCard";
import useCommon from "../useCommon";
import { Box, Card, CardContent, Typography } from "@mui/material";
//animation
import animate from "../Animate";

const OuterCard = ({ data, title, icon }) => {
  const { isDark, isMobile } = useCommon();

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        width: isMobile ? "100%" : "50%",
        my: 5,
        mt: 0,
      }}
    >
      <CardContent
        sx={{
          py: 1,
          animation: `${animate} 5s ease-in-out infinite alternate both`,
        }}
      >
        <Typography variant="body2" align="center">
          {icon}
          {title}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
            py: 1,
          }}
        >
          {data?.map((item, i) => (
            <CustomCard key={i} title={item.title} level={item.level} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default OuterCard;
