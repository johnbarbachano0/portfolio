import React from "react";
import { Box, Button } from "@mui/material";
import downloadFile from "../../assets/JohnBarbachano.pdf";
import { useSelector } from "react-redux";

function CallToAction() {
  const { contactRef } = useSelector((state) => state.refStore.value);

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `JohnBarbachano.pdf`;
    link.href = downloadFile;
    link.click();
  };

  const handleRef = () => contactRef?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ flexDirection: "row", m: 3 }}>
      <Button variant="outlined" sx={{ m: 1, p: 1 }} onClick={onDownload}>
        Download CV
      </Button>
      <Button variant="contained" sx={{ m: 1, p: 1 }} onClick={handleRef}>
        Let's Talk
      </Button>
    </Box>
  );
}

export default CallToAction;
