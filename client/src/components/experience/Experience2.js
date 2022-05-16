import React, { useRef, useEffect, useCallback, useState } from "react";
import bg4 from "../../assets/bg4.jpg";
import bgm4 from "../../assets/bgm4.jpg";
import Container from "../Container";
import ExperienceCard2 from "./ExperienceCard2";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { experienceData } from "../../helpers/experience";
import { setRef } from "../../features/RefStore";
import { useDispatch } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import "./styles.css";

// Import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

const Experience2 = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCommon();
  const image = isMobile ? bgm4 : bg4;
  const navRef = useRef();
  const data = experienceData;
  const [expand, setExpand] = useState(false);

  const handleExpand = () => setExpand((prev) => !prev);

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ expRef: navRef?.current }));
  }, [dispatch]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container
      image={image}
      ref={navRef}
      style={{ px: 1 }}
      styleCont={{ width: "100%" }}
    >
      <SectionTitle>Work Experience</SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <ExperienceCard2
              data={item}
              expand={expand}
              onExpand={handleExpand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Experience2;
