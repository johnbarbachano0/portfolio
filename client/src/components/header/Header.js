import React, { useRef, useEffect, useCallback } from "react";
import bg1 from "../../assets/bg1.jpg";
import bgm1 from "../../assets/bgm1.jpg";
import CallToAction from "./CallToAction";
import Container from "../Container";
import RoleText from "./RoleText";
import Socials from "./Socials";
import TitleText from "./TitleText";
import selfOutline from "../../assets/self_outline.png";
import useCommon from "../useCommon";
import { Box, Typography } from "@mui/material";
import { setRef } from "../../features/RefStore";
import { useDispatch } from "react-redux";
import ImageBox from "./ImageBox";

const Header = () => {
  const dispatch = useDispatch();
  const { isMobile, isMid } = useCommon();
  const image = isMobile ? bgm1 : bg1;
  const navRef = useRef(null);
  const handleDispatch = useCallback(() => {
    dispatch(setRef({ homeRef: navRef?.current }));
  }, [dispatch]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container image={image} ref={navRef}>
      <Typography
        variant="h7"
        sx={{
          letterSpacing: 3,
          fontSize: 12,
        }}
      >
        Hello, I'm
      </Typography>

      <TitleText variant={isMid ? "h4" : "h2"}>John Barbachano</TitleText>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <RoleText textcolor="blue" styles={{ fontSize: isMobile ? 12 : 16 }}>
          Fullstack Developer
        </RoleText>
        <Typography
          sx={{
            letterSpacing: 1,
            fontSize: isMobile ? 12 : 16,
            p: 0.5,
            position: "relative",
            top: isMobile ? -5 : -6,
          }}
        >
          |
        </Typography>
        <RoleText textcolor="red" styles={{ fontSize: isMobile ? 12 : 16 }}>
          System Analyst
        </RoleText>
      </Box>

      <CallToAction />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Box sx={{ alignSelf: "center", position: "absolute", left: 10 }}>
          <Socials />
        </Box>

        <ImageBox>
          <img
            src={selfOutline}
            alt="John Barbachano"
            style={{
              height: 200,
            }}
          />
        </ImageBox>
      </Box>
    </Container>
  );
};

export default Header;
