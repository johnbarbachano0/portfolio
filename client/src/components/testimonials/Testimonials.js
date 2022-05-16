import React, { useRef, useEffect, useCallback } from "react";
import Container from "../Container";
import CustomCard from "./CustomCard";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { setRef } from "../../features/RefStore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { animate } from "../SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./styles.css";

// Import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  const { testimonials } = useSelector((state) => state.maintenance.value);
  const dispatch = useDispatch();
  const { palette, isDark } = useCommon();
  const navRef = useRef();

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ testimonialRef: navRef?.current }));
  }, [dispatch]);

  // Listeners
  useEffect(() => {
    navRef?.current && handleDispatch();
  }, [navRef, handleDispatch]);

  return (
    <Container
      ref={navRef}
      style={{ px: 0, backgroundColor: palette.primary.main }}
      styleCont={{ width: "100%" }}
    >
      <SectionTitle
        styles={{
          animation: `${animate(
            isDark
              ? { color1: "#000428", color2: "#004e92" }
              : { color1: "#00aeff", color2: "#a68eff" }
          )} 5s linear infinite alternate both;`,
        }}
      >
        Testimonials
      </SectionTitle>
      <Swiper
        centeredSlides={true}
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <CustomCard
              name={item?.createdBy}
              data={item?.testimonial}
              pos={item.role}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
