import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";
import { styles } from "./Styles";
import useCommon from "../useCommon";
import animate from "../Animate";

const CustomCard = (props) => {
  const { isMobile } = useCommon();
  return (
    <Card
      sx={{
        m: 1,
        backgroundImage: "linear-gradient(0deg, #018eff,#00aeff)",
        animation: `${animate} 5s ease-in-out infinite alternate both`,
      }}
    >
      <CardContent
        sx={[styles.container, { flexDirection: isMobile ? "row" : "column" }]}
      >
        <Box
          sx={{
            flexDirection: "column",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Icon sx={{ my: 0.5 }}>{props.icon}</Icon>
          <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>{props.desc}</Typography>
        </Box>
        <Button
          variant="text"
          size="small"
          sx={{ my: 0.5, flex: 1 }}
          href={props.link}
          target={props?.type === "ext" ? "_blank" : "_self"}
          rel="noreferrer"
        >
          Send a message
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
