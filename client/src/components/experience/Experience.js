import React, { useRef, useEffect, useCallback } from "react";
import bg4 from "../../assets/bg4.jpg";
import bgm4 from "../../assets/bgm4.jpg";
import Container from "../Container";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { experienceData } from "../../helpers/experience";
import { setRef } from "../../features/RefStore";
import { useDispatch } from "react-redux";

const Experience = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCommon();
  const image = isMobile ? bgm4 : bg4;
  const navRef = useRef();
  const data = experienceData;

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ expRef: navRef?.current }));
  }, [dispatch]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container image={image} ref={navRef}>
      <SectionTitle>Work Experience</SectionTitle>
      {data.map((item, i) => (
        <ExperienceCard key={i} data={item} />
      ))}
    </Container>
  );
};

export default Experience;
