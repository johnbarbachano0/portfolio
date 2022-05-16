import React, { useRef, useEffect, useCallback } from "react";
import bg5 from "../../assets/bg5.jpg";
import bgm5 from "../../assets/bgm5.jpg";
import Container from "../Container";
import CustomCard from "./CustomCard";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import {} from "@mui/material";
// import { styles } from "./Styles";
import { setRef } from "../../features/RefStore";
import { useDispatch } from "react-redux";
// images
import tna1 from "../../assets/app_image/tna1.PNG";
import tna2 from "../../assets/app_image/tna2.PNG";
import tna3 from "../../assets/app_image/tna3.PNG";
import tna4 from "../../assets/app_image/tna4.PNG";
import tna5 from "../../assets/app_image/tna5.PNG";
import tna6 from "../../assets/app_image/tna6.PNG";
import tna7 from "../../assets/app_image/tna7.PNG";
import tna8 from "../../assets/app_image/tna8.PNG";
import tna9 from "../../assets/app_image/tna9.PNG";
import tna10 from "../../assets/app_image/tna10.PNG";
import snip1 from "../../assets/app_image/snip1.PNG";
import snip2 from "../../assets/app_image/snip2.PNG";
import snip3 from "../../assets/app_image/snip3.PNG";
import snip4 from "../../assets/app_image/snip4.PNG";
import snip5 from "../../assets/app_image/snip5.PNG";
import snip6 from "../../assets/app_image/snip6.PNG";
import snip7 from "../../assets/app_image/snip7.PNG";
import snip8 from "../../assets/app_image/snip8.PNG";
import snip9 from "../../assets/app_image/snip9.PNG";
import wan1 from "../../assets/app_image/wan1.PNG";
import wan2 from "../../assets/app_image/wan2.PNG";
import wan3 from "../../assets/app_image/wan3.PNG";
import wan4 from "../../assets/app_image/wan4.PNG";
import wan5 from "../../assets/app_image/wan5.PNG";
import port1 from "../../assets/app_image/port1.PNG";
import port2 from "../../assets/app_image/port2.PNG";
import port3 from "../../assets/app_image/port3.PNG";
import port4 from "../../assets/app_image/port4.PNG";
import port5 from "../../assets/app_image/port5.PNG";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// Import required modules
import { EffectCreative, Pagination, Navigation } from "swiper";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCommon();
  const image = isMobile ? bgm5 : bg5;
  const navRef = useRef();

  const data = [
    {
      name: "Time And Attendance",
      description: "App for a company's time and attendance.",
      github: "https://github.com/johnbarbachano0/rn-timeAndAttendance",
      figma:
        "https://www.figma.com/file/0ewhV8CEbez0KmSbupbu0q/Time-and-Attendance-App",
      image: [tna1, tna2, tna3, tna4, tna5, tna6, tna7, tna8, tna9, tna10],
      tag: ["Mobile", "GPS", "Dark/Light Theme"],
      type: "mobile",
    },
    {
      name: "Wander",
      description: "App to track all travel memories.",
      github: "https://github.com/johnbarbachano0/rn-wander",
      image: [wan1, wan2, wan3, wan4, wan5],
      tag: ["Mobile", "Local Storage", "GPS", "Dark/Light Theme"],
      type: "mobile",
    },
    {
      name: "Snip",
      description: "App for note taking, live chat and important links.",
      site: "https://sn1p.herokuapp.com",
      github: "https://github.com/johnbarbachano0/snipv2.0",
      image: [snip1, snip2, snip3, snip4, snip5, snip6, snip7, snip8, snip9],
      tag: ["Web", "Mobile Friendly", "Dark/Light Theme", "Social Login"],
      type: "web",
    },
    {
      name: "Portfolio",
      description: "App for my personal website.",
      site: "http://localhost:6005/",
      github: "https://github.com/johnbarbachano0/r-portfolio",
      image: [port1, port2, port3, port4, port5],
      tag: ["Web", "Mobile Friendly", "Dark/Light Theme"],
      type: "web",
    },
  ];

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ portfolioRef: navRef?.current }));
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
      zIndex={100}
    >
      <SectionTitle>See some of my works!</SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <CustomCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Portfolio;
