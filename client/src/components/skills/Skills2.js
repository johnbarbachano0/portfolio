import React, { useEffect, useCallback, createRef } from "react";
import bg3 from "../../assets/bg3.jpg";
import bgm3 from "../../assets/bgm3.jpg";
import OuterCard2 from "./OuterCard2";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { setRef } from "../../features/RefStore";
import { useDispatch, useSelector } from "react-redux";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

import "./styles.css";

// Import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Skills2 = () => {
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
    <Container
      image={image}
      ref={navRef}
      style={{ px: 1 }}
      styleCont={{ width: "100%" }}
    >
      <SectionTitle>My Skills</SectionTitle>
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        effect={"flip"}
        flipEffect={{
          slideShadows: false,
          limitRotation: true,
        }}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <OuterCard2
            data={frontend}
            title={"Frontend"}
            icon={
              <DesktopWindowsIcon
                sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <OuterCard2
            data={backend}
            title={"Backend"}
            icon={
              <StorageIcon
                sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <OuterCard2
            data={analyst}
            title={"Technical"}
            icon={
              <AccountCircleIcon
                sx={{ fontSize: 18, position: "relative", top: 4, p: 0.25 }}
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <OuterCard2
            data={others}
            title={"Tools & APIs"}
            icon={
              <ApiIcon
                sx={{ fontSize: 18, position: "relative", top: 5, p: 0.25 }}
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Skills2;
