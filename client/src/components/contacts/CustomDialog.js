import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import useCommon from "../useCommon";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDiaog({ onResponse, message, createdBy }) {
  const { isMobile, isDark } = useCommon();
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth={isMobile ? false : "sm"}
      sx={{ background: isDark ? "#525E75" : "#DDDDDD" }}
    >
      <DialogTitle>{"Preview"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hi <span style={{ fontWeight: "bold" }}>JB</span>,
        </DialogContentText>
        <DialogContentText>{message}</DialogContentText>
        <DialogContentText>
          <br />
          Regards,
        </DialogContentText>
        <DialogContentText>
          <span style={{ fontWeight: "bold" }}>{createdBy}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onResponse(true)}>OK</Button>
        <Button onClick={() => onResponse(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
