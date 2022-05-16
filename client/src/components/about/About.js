import React, { useRef, useEffect, useCallback } from "react";
import bg2 from "../../assets/bg2.jpg";
import bgm2 from "../../assets/bgm2.jpg";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Tag from "./Tag";
import useCommon from "../useCommon";
import useOnScreen from "../useOnScreen";
import { Box, Tooltip, Typography } from "@mui/material";
import { setRef } from "../../features/RefStore";
import { styles } from "./Styles";
import { useDispatch } from "react-redux";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import WebAssetRoundedIcon from "@mui/icons-material/WebAssetRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";

const About = () => {
  const dispatch = useDispatch();
  const { isMobile, palette } = useCommon();
  const image = isMobile ? bgm2 : bg2;
  const navRef = useRef();
  const isAboutVisible = useOnScreen(navRef);
  const exp = <WorkspacePremiumRoundedIcon />;
  const web = <WebAssetRoundedIcon />;
  const mobile = <MobileFriendlyRoundedIcon />;
  const userIx = <AccessibilityNewRoundedIcon />;

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ aboutRef: navRef?.current }));
  }, [dispatch]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container image={image} ref={navRef} id="about">
      <SectionTitle>About Me</SectionTitle>
      <Box
        sx={[
          styles.container,
          { flexDirection: "row", width: isMobile ? "100%" : "60%" },
        ]}
      >
        <Tag
          icon={exp}
          title="9+ years"
          animateStart={isAboutVisible}
          delay={"1s"}
        />
        <Tag
          icon={userIx}
          title="UI/UX"
          animateStart={isAboutVisible}
          delay={"1.5s"}
        />
        <Tag
          icon={mobile}
          title="Mobile"
          animateStart={isAboutVisible}
          delay={"2s"}
        />
        <Tag
          icon={web}
          title="Web"
          animateStart={isAboutVisible}
          delay={"2.5s"}
        />
      </Box>
      <Box sx={[styles.container, { my: 1 }]}>
        <Typography align={"center"} sx={{ p: 0.5 }}>
          I'm an Electronics Engineer with a passion for UI/UX Design.
        </Typography>
        <Typography align={"center"} sx={{ p: 0.5 }}>
          I have perform multiple roles over the last 9+ years as System
          Analyst, Business Analyst, Deployment, QA, and a little bit of Project
          Management.
        </Typography>
        <Typography align={"center"} sx={{ p: 0.5 }}>
          Over the past year, I resigned my job to help out in our family
          business hit by staff shortage due to covid lockdowns. This gave me
          time to focus on my newfound passion of software development.
        </Typography>
        <Typography align={"center"} sx={{ p: 0.5 }}>
          I am now specializing in design and fullstack development of web and
          mobile applications using{" "}
          <Tooltip title="MySQL Express React Node" arrow>
            <Typography
              component={"span"}
              sx={{
                display: "inline",
                textDecoration: "underline",
                color: palette?.primary?.main,
              }}
            >
              MERN stack
            </Typography>
          </Tooltip>{" "}
          and REST Api.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
