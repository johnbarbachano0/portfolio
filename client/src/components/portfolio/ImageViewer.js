import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import useCommon from "../useCommon";
import useWindowDimensions from "../useWindowDimensions";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// Import required modules
import { EffectCreative, Pagination, Navigation } from "swiper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, onClose, data }) => {
  const { description, image, name } = data;
  const { isMobile } = useCommon();
  const { height } = useWindowDimensions();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{ height }}
    >
      <Box sx={{ flex: 1, order: isMobile ? 1 : 2 }}>
        <Swiper
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[EffectCreative, Pagination, Navigation]}
          className="mySwiper"
        >
          {image?.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                key={i}
                src={item}
                alt=""
                style={{ maxHeight: height - 80, objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <AppBar sx={{ position: "relative", order: isMobile ? 2 : 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Box>
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: 12 }}
              variant="h6"
              component="div"
            >
              {name} Images
            </Typography>
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: 10 }}
              variant="h6"
              component="div"
            >
              {description}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};

export default FullScreenDialog;
