import React, { useState } from "react";
import ImageViewer from "./ImageViewer";
import useCommon from "../useCommon";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { styles } from "./Styles";
//icons
import { FaFigma } from "react-icons/fa";
import BurstModeSharpIcon from "@mui/icons-material/BurstModeSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const CustomCard = ({ data }) => {
  const { description, figma, image, name, github, site, tag, type, tech } =
    data;
  const { isDark, isMid, isLarge } = useCommon();
  const [show, setShow] = useState(false);

  const common = {
    backgroundImage: isDark
      ? "linear-gradient(180deg, #00aeff, #a68eff)"
      : "linear-gradient(0deg, #000428 , #004e92)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // functions
  const handleToggle = () => setShow((prev) => !prev);

  //returns
  if (show) {
    return <ImageViewer open={show} onClose={handleToggle} data={data} />;
  }

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        my: 5,
        mt: 0,
        width: isMid ? "100%" : "50%",
        // maxHeight: 500,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundImage: isDark
                ? "radial-gradient(circle, rgba(166,142,255,1) 37%, rgba(0,174,255,.75) 100%)"
                : " radial-gradient(circle, rgba(0,4,40,1) 27%, rgba(0,78,146,.25) 100%)",
            }}
          >
            {name?.charAt()}
          </Avatar>
        }
        disableTypography={true}
        title={
          <Typography
            sx={{
              ...common,
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
        }
        subheader={
          <Typography sx={{ fontSize: 10, textAlign: "left" }}>
            {description}
          </Typography>
        }
      />

      <CardContent sx={styles.card}>
        {tag?.map((item, i) => (
          <Chip
            key={i}
            label={item}
            color="primary"
            sx={{
              m: 0.2,
              fontSize: 10,
              fontWeight: "bold",
              opacity: 0.9,
              transition: "1s",
              "&:hover": {
                opacity: 1,
                fontSize: 11,
              },
            }}
          />
        ))}
      </CardContent>

      <CardContent sx={styles.imageCont}>
        {image?.map((item, i) => {
          if (isMid && i > 1) return null;
          if (isLarge && i > 2) return null;
          if (type === "mobile" && i > 3) return null;
          if (type === "web" && i > 0) return null;
          return <img key={i} src={item} alt="" style={styles.image} />;
        })}
      </CardContent>

      <CardContent sx={{ ...styles.card, flexDirection: "column" }}>
        <Typography
          sx={{
            ...common,
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Technologies
        </Typography>
        <Box
          sx={{
            display: "flex",

            flexWrap: "wrap",
          }}
        >
          {tech?.map((item, i) => (
            <Chip
              key={i}
              label={item}
              color="primary"
              sx={{
                padding: 0,
                m: 0.2,
                fontSize: 10,
                fontWeight: "bold",
                opacity: 0.9,
                transition: "1s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {site && (
            <Button
              size="small"
              href={site}
              target="_blank"
              startIcon={<WebIcon />}
            >
              Site
            </Button>
          )}
          {github && (
            <Button
              size="small"
              href={github}
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          )}
          {figma && (
            <Button
              size="small"
              href={figma}
              target="_blank"
              startIcon={<FaFigma />}
            >
              Figma
            </Button>
          )}
        </Box>

        <Button
          size="small"
          startIcon={<BurstModeSharpIcon />}
          onClick={handleToggle}
        >
          More Images...
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
