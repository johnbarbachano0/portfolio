import React from "react";
import CustomCard from "./CustomCard";
import useCommon from "../useCommon";
import { Box, Card, CardContent, Typography } from "@mui/material";

const OuterCard = ({ data, title, icon }) => {
  const { isDark, isMid } = useCommon();

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        width: isMid ? "98%" : "48%",
        my: "1%",
      }}
    >
      <CardContent
        sx={{ py: 0.5, background: "linear-gradient(45deg, #00aeff, #a68eff)" }}
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
            py: 0.5,
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
