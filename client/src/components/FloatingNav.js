/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import useCommon from "../components/useCommon";
import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCurrRef } from "../features/RefStore";
//Icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import CodeIcon from "@mui/icons-material/Code";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { keyframes } from "@mui/material";

const pop = keyframes`
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    
  }
  100% {
    transform: translateY(-2px);
    transform-origin: 50% 50%;
    color: #EE5007;
  }
`;

const FloatingNav = () => {
  const dispatch = useDispatch();
  const { isDark, isMobile } = useCommon();

  const {
    homeRef,
    aboutRef,
    skillRef,
    expRef,
    portfolioRef,
    testimonialRef,
    contactRef,
    footerRef,
    currRef,
    hideNav,
  } = useSelector((state) => state.refStore.value);
  const [curr, setCurr] = useState(currRef);
  const selRef =
    curr === 1
      ? homeRef
      : currRef === 2
      ? aboutRef
      : currRef === 3
      ? skillRef
      : currRef === 4
      ? expRef
      : currRef === 5
      ? portfolioRef
      : currRef === 6
      ? testimonialRef
      : currRef === 7
      ? contactRef
      : footerRef;

  const items = [
    { icon: <HomeRoundedIcon />, name: "Home", value: 1 },
    { icon: <InfoRoundedIcon />, name: "About", value: 2 },
    { icon: <CodeIcon />, name: "Skill", value: 3 },
    { icon: <ViewModuleRoundedIcon />, name: "Experience", value: 4 },
    { icon: <PersonRoundedIcon />, name: "Portfolio", value: 5 },
    { icon: <PeopleAltRoundedIcon />, name: "Testimonials", value: 6 },
    { icon: <CallRoundedIcon />, name: "Contacts", value: 7 },
    { icon: <ArrowDownwardRoundedIcon />, name: "End", value: 8 },
  ];

  const handleClick = (val) => {
    setCurr(val);
    dispatch(setCurrRef(val));
  };

  const executeScroll = useCallback(() => {
    curr && selRef?.scrollIntoView({ behavior: "smooth" });
    setCurr(null);
  }, [dispatch, selRef, curr]);

  useEffect(() => {
    executeScroll();
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: hideNav ? -10 : 10,
        opacity: isMobile ? 1 : 0.3,
        p: 0.5,
        borderRadius: 10,
        border: 1.5,
        borderColor: "#6FDFDF",
        background: isDark ? "#525E75" : "#DDDDDD",
        transition: "opacity 1s ease",
        "&:hover": {
          opacity: 1,
        },
      }}
      elevation={10}
    >
      <ButtonGroup size="small">
        {items.map((item, i) => (
          <Tooltip title={item.name} key={i} arrow>
            <IconButton
              color={"info"}
              size={"small"}
              onClick={() => handleClick(item.value)}
              sx={{
                "&:hover": {
                  animation: `${pop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
                },
              }}
            >
              {item?.icon}
            </IconButton>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default FloatingNav;
