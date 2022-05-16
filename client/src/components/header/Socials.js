import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import useCommon from "../useCommon";
import { Box, IconButton } from "@mui/material";

const Socials = () => {
  const { palette } = useCommon();
  const linkedUrl = process.env.REACT_APP_LINKEDIN_URL;
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const instaUrl = process.env.REACT_APP_INSTA_URL;

  //Functions
  const handleClick = (event) => {
    const { id } = event?.currentTarget;
    const link =
      id === "linked" ? linkedUrl : id === "github" ? githubUrl : instaUrl;
    window.open(link);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: palette?.primary?.main,
      }}
    >
      <Box
        sx={{
          alignSelf: "center",
          border: 0,
          borderRight: 1,
          height: 20,
          width: 0,
        }}
      ></Box>
      <IconButton
        id="linked"
        color="primary"
        component="span"
        size="small"
        onClick={handleClick}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        id="github"
        color="primary"
        component="span"
        onClick={handleClick}
        size="small"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        id="insta"
        color="primary"
        component="span"
        onClick={handleClick}
        size={"small"}
      >
        <InstagramIcon />
      </IconButton>
      <Box
        sx={{
          alignSelf: "center",
          border: 0,
          borderRight: 1,
          height: 30,
          width: 0,
        }}
      ></Box>
    </Box>
  );
};

export default Socials;
