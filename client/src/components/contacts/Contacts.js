import React, { useRef, useEffect, useCallback } from "react";
import bg6 from "../../assets/bg6.jpg";
import bgm6 from "../../assets/bgm6.jpg";
import Container from "../Container";
import CustomCard from "./CustomCard";
import Message from "./Message";
import SectionTitle from "../SectionTitle";
import useCommon from "../useCommon";
import { Box } from "@mui/material";
import { styles } from "./Styles";
import { useDispatch } from "react-redux";
import { setRef } from "../../features/RefStore";
//icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppRoundedIcon from "@mui/icons-material/WhatsappRounded";

const Contacts = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCommon();
  const image = isMobile ? bgm6 : bg6;

  const navRef = useRef();

  const items = [
    {
      title: "Email",
      desc: `${process.env.REACT_APP_MAIL}`,
      icon: <EmailOutlinedIcon />,
      link: `#email-name`,
    },
    {
      title: "Messenger",
      desc: `${process.env.REACT_APP_FACEBOOK_URL}`,
      icon: <FacebookRoundedIcon />,
      link: `${process.env.REACT_APP_FACEBOOK_URL}`,
      type: "ext",
    },
    {
      title: "Viber",
      desc: `${process.env.REACT_APP_PHONE}`,
      icon: <WhatsAppRoundedIcon />,
      link: `${process.env.REACT_APP_VIBER_URL}`,
      type: "ext",
    },
  ];

  const handleDispatch = useCallback(() => {
    dispatch(setRef({ contactRef: navRef?.current }));
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
      styleCont={{ width: isMobile ? "100%" : "80%" }}
    >
      <SectionTitle>Contact Me</SectionTitle>
      <Box
        sx={[
          styles.container,
          {
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            justifyCOntent: "center",
          },
        ]}
      >
        <Box
          sx={{
            p: 1,
            flex: 1,
          }}
        >
          {items.map((item, i) => (
            <CustomCard
              key={i}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              link={item.link}
              type={item.type}
            />
          ))}
        </Box>
        <Box sx={{ p: 2, flex: 3 }}>
          <Message />
        </Box>
      </Box>
    </Container>
  );
};

export default Contacts;
