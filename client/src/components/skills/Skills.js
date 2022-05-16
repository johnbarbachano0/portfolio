import React, { useEffect, useCallback, createRef } from "react";
import bg3 from "../../assets/bg3.jpg";
import bgm3 from "../../assets/bgm3.jpg";
import OuterCard from "./OuterCard";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { setRef } from "../../features/RefStore";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Skills = () => {
  const { frontend, backend, analyst, others } = useSelector(
    (state) => state.maintenance.value
  );
  const dispatch = useDispatch();
  const { isMobile } = useCommon();
  const image = isMobile ? bgm3 : bg3;
  const navRef = createRef();

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ skillRef: navRef?.current }));
  }, [dispatch, navRef]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container image={image} ref={navRef}>
      <SectionTitle>My Skills</SectionTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "stretch",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <OuterCard
          data={frontend}
          title={"Frontend"}
          icon={
            <DesktopWindowsIcon
              sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
            />
          }
        />
        <OuterCard
          data={backend}
          title={"Backend"}
          icon={
            <StorageIcon
              sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
            />
          }
        />
        <OuterCard
          data={analyst}
          title={"Technical"}
          icon={
            <AccountCircleIcon
              sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
            />
          }
        />
        <OuterCard
          data={others}
          title={"Tools & APIs"}
          icon={
            <ApiIcon
              sx={{ fontSize: 18, position: "relative", top: 5, p: 0.25 }}
            />
          }
        />
      </Box>
    </Container>
  );
};

export default Skills;
