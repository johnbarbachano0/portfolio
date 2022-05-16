import React, { useState, useCallback, useEffect } from "react";
import useCommon from "../useCommon";
import { Box, Link } from "@mui/material";
import { setCurrRef } from "../../features/RefStore";
import { useDispatch, useSelector } from "react-redux";

const Permalinks = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCommon();

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
    { label: "Home", id: 1 },
    { label: "About", id: 2 },
    { label: "Skills", id: 3 },
    { label: "Experience", id: 4 },
    { label: "Portolio", id: 5 },
    { label: "Testimonials", id: 6 },
    { label: "Contacts", id: 7 },
  ];

  const handleRef = (val) => {
    setCurr(val);
    dispatch(setCurrRef(val));
  };

  const executeScroll = useCallback(() => {
    curr && selRef?.scrollIntoView({ behavior: "smooth" });
    setCurr(null);
  }, [selRef, curr]);

  useEffect(() => {
    executeScroll();
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "center",
        alignItems: "center",
        width: "100%",
        mx: 10,
      }}
    >
      {items.map((item, i) => (
        <Link
          onClick={() => handleRef(item.id)}
          underline="hover"
          key={i}
          sx={{
            padding: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          {item.label}
        </Link>
      ))}
    </Box>
  );
};

export default Permalinks;
