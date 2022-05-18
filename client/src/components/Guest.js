import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { guestSchema } from "../schema/guestSchema";
import { items } from "../helpers/guests";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "./misc";
import { usePostGuestMutation } from "../services/GuestService";

const Guest = () => {
  const [open, setOpen] = useState(true);
  const [postGuest, { isLoading }] = usePostGuestMutation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { guestType: 1, name: "" },
    resolver: yupResolver(guestSchema),
  });

  const handleClose = (_, backdropClick) => {
    setOpen(backdropClick ? true : false);
  };

  const handleAutoChange = (evt, newVal) => {
    if (newVal) {
      const { id } = newVal;
      setValue("guestType", id, { shouldDirty: true });
    } else {
      setValue("guestType", null, { shouldDirty: true });
    }
  };

  const handleChange = (evt) => {
    const { name: field, value } = evt.target;
    setValue(field, capitalize(value), { shouldDirty: true });
  };

  const onSubmit = (data) => {
    postGuest(data).then((res) => {
      var today = new Date();
      today.setHours(today.getHours() + 24);
      localStorage.setItem("hasVisit", true);
      localStorage.setItem("expDate", today);
      handleClose();
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
      fullWidth={true}
    >
      <Box sx={{ background: "#56BBF1" }}>
        <DialogTitle>Dear Visitor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            May I ask who is visiting my website for statistics.
          </DialogContentText>
          <DialogContentText>Thank you!</DialogContentText>
          <Controller
            control={control}
            name="guestType"
            render={({ field: { value } }) => (
              <Autocomplete
                id="guestType"
                name="guestType"
                disablePortal
                options={items}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                defaultValue={items?.find((value) => value.label[0])}
                onChange={handleAutoChange}
                disabled={isLoading}
                sx={{ width: "100%", my: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Type"
                    variant="standard"
                    error={errors?.guestType ? true : false}
                    helperText={errors?.guestType?.message || ""}
                    autoFocus
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { value } }) => (
              <TextField
                id="name"
                name="name"
                label="Name (Optional)"
                variant="standard"
                value={value}
                onChange={handleChange}
                error={errors.name ? true : false}
                helperText={errors?.name?.message || ""}
                sx={{ width: "100%", my: 1 }}
                inputProps={{ maxLength: 50 }}
                autoComplete="new-password"
                disabled={isLoading}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit(onSubmit)}>OK</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default Guest;
