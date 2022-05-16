import React, { useRef, useEffect, useCallback } from "react";
import CopyrightTwoToneIcon from "@mui/icons-material/CopyrightTwoTone";
import Permalinks from "./Permalinks";
import useCommon from "../useCommon";
import useOnScreen from "../useOnScreen";
import { Box, Link, Typography } from "@mui/material";
import { setRef } from "../../features/RefStore";
import { setHideNav } from "../../features/RefStore";
import { styles } from "./Styles";
import { useDispatch } from "react-redux";
//icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CustomBox from "./CustomBox";

const Footer = () => {
  const { palette, isDark, isMobile } = useCommon();
  const dispatch = useDispatch();
  const navRef = useRef();
  const isFooterVisible = useOnScreen(navRef);
  const handleDispatch = useCallback(() => {
    dispatch(setRef({ footerRef: navRef?.current }));
  }, [dispatch]);

  const iconStyle = {
    mx: 1,
    "&:hover": {
      color: isDark ? palette?.primary?.dark : palette?.primary?.light,
    },
  };

  const linkedUrl = process.env.REACT_APP_LINKEDIN_URL;
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const instaUrl = process.env.REACT_APP_INSTA_URL;

  const copyDate = new Date().getFullYear();
  const link = `${process.env.REACT_APP_CLIENT}/testimonial`;

  //Functions
  const handleClick = (event) => {
    const { id } = event?.currentTarget;
    const link =
      id === "linked" ? linkedUrl : id === "github" ? githubUrl : instaUrl;
    window.open(link);
  };

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  useEffect(() => {
    dispatch(setHideNav(isFooterVisible));
  }, [dispatch, isFooterVisible]);

  return (
    <CustomBox
      ref={navRef}
      styles={{ paddingTop: 30, paddingBottom: isMobile ? 10 : 40 }}
    >
      <Typography sx={styles.text}>Thank You!</Typography>
      <Permalinks />
      <Link sx={{ p: 1 }} href={link}>
        Submit a testimonial
      </Link>
      <Box
        sx={{
          flexDirection: "row",
          p: 1,
          color: palette?.primary?.main,
        }}
      >
        <LinkedInIcon id="linked" sx={iconStyle} onClick={handleClick} />
        <GitHubIcon id="github" sx={iconStyle} onClick={handleClick} />
        <InstagramIcon id="insta" sx={iconStyle} onClick={handleClick} />
      </Box>
      <Typography
        sx={{
          color: palette?.primary?.main,
          p: 2,
        }}
      >
        <CopyrightTwoToneIcon
          sx={{
            fontSize: 20,
            position: "relative",
            top: 5,
            mx: 0.5,
          }}
        />
        John Barbachano {copyDate}
      </Typography>
    </CustomBox>
  );
};

export default Footer;
