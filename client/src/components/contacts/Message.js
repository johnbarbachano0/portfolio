import React, { useState, useEffect, useCallback } from "react";
import CustomAlert from "../CustomAlert";
import useCommon from "../useCommon";
import useCountdown from "../useCountdown";
import { Button, Card, TextField } from "@mui/material";
import { capitalize } from "../misc";
import { emailSchema } from "../../schema/emailSchema";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostEmailMutation } from "../../services/EmailService";

import CustomDialog from "./CustomDialog";
import SendIcon from "@mui/icons-material/Send";

const Message = () => {
  const [countdown, setCountdown] = useCountdown();
  const [alert, setAlert] = useState();
  const [submit, setSubmit] = useState(false);
  const [dialog, setDialog] = useState(false);
  const {
    control,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: { createdBy: "", email: "", subject: "", message: "" },
    resolver: yupResolver(emailSchema),
  });
  const [postEmail, { isLoading }] = usePostEmailMutation();
  const { isMobile, isDark } = useCommon();

  const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const user_id = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const handleChange = (evt) => {
    const { name: field, value } = evt.target;
    setValue(field, field === "email" ? value : capitalize(value), {
      shouldDirty: true,
    });
  };

  const onSubmit = () => setDialog(true);

  const handleResponse = (val) => {
    setDialog(false);
    setSubmit(val);
  };

  const confirmSubmit = useCallback(() => {
    const template_params = getValues();
    const data = {
      service_id,
      template_id,
      user_id,
      template_params,
    };

    try {
      isDirty &&
        postEmail({ data }).then((res) => {
          if (res?.error?.originalStatus === 200) {
            setAlert({
              type: "success",
              message:
                "Thank you for your message! I will get back to you shortly.",
            });
            ["createdBy", "email", "subject", "message"].map((field) =>
              setValue(field, "", { shouldDirty: false })
            );
          } else {
            setAlert({
              type: "error",
              message: "Error on submit, try again later.",
            });
          }
        });
    } catch (error) {
      setAlert({
        type: "error",
        message: "Error on submit, try again later.",
      });
    }
    setCountdown(5);
  }, [
    getValues,
    isDirty,
    postEmail,
    service_id,
    setCountdown,
    setValue,
    template_id,
    user_id,
  ]);

  //Listeners
  useEffect(() => {
    countdown === 0 && setAlert();
  }, [countdown]);

  useEffect(() => {
    submit && confirmSubmit();
  }, [confirmSubmit, submit]);

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        p: 1,
        px: 2,
        pb: errors ? 2 : 3,
        m: isMobile ? 0 : 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {dialog && (
        <CustomDialog
          message={getValues("message")}
          createdBy={getValues("createdBy")}
          val={getValues("createdBy")}
          onResponse={handleResponse}
        />
      )}
      {alert && <CustomAlert type={alert?.type} message={alert?.message} />}
      <Controller
        control={control}
        name="createdBy"
        render={({ field: { value } }) => (
          <TextField
            id={"email-name"}
            label="Name"
            name="createdBy"
            variant="standard"
            value={value}
            onChange={handleChange}
            error={errors.createdBy ? true : false}
            helperText={errors?.createdBy?.message || ""}
            inputProps={{
              maxLength: 20,
              style: { textTransform: "capitalize" },
            }}
            autoComplete="new-password"
            disabled={isLoading}
            sx={{ width: "100%" }}
          />
        )}
      />

      <Controller
        control={control}
        name="subject"
        render={({ field: { value } }) => (
          <TextField
            label="Subject (max 100 chars)"
            name="subject"
            variant="standard"
            value={value}
            onChange={handleChange}
            error={errors.subject ? true : false}
            helperText={errors?.subject?.message || ""}
            inputProps={{ maxLength: 100 }}
            autoComplete="off"
            disabled={isLoading}
            sx={{ width: "100%" }}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { value } }) => (
          <TextField
            label="Email Address"
            name="email"
            variant="standard"
            value={value}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors?.email?.message || ""}
            inputProps={{ maxLength: 255 }}
            autoComplete={"new-password"}
            disabled={isLoading}
            sx={{ width: "100%" }}
          />
        )}
      />
      <Controller
        control={control}
        name="message"
        render={({ field: { value } }) => (
          <TextField
            label="Message (max 1000 chars)"
            name="message"
            variant="standard"
            sx={{ my: 1, width: "100%" }}
            value={value}
            onChange={handleChange}
            error={errors?.message ? true : false}
            helperText={errors?.message?.message || ""}
            inputProps={{ maxLength: 1000 }}
            disabled={isLoading}
            autoComplete={"new-password"}
          />
        )}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{
          p: 1,
          mt: 1,
          width: isMobile ? "100%" : "30%",
          alignSelf: isMobile ? "center" : "left",
        }}
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        Send
      </Button>
    </Card>
  );
};

export default Message;
