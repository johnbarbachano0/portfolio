import React, { useState, useEffect } from "react";
import CustomAlert from "../components/CustomAlert";
import AppearanceButton from "../components/AppearanceButton";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import r1 from "../assets/rate.jpg";
import rm1 from "../assets/ratem.jpg";
import useCommon from "../components/useCommon";
import useWindowDimensions from "../components/useWindowDimensions";
import useCountdown from "../components/useCountdown";
import { Autocomplete, Button, Card, TextField } from "@mui/material";
import { testimonialSchema } from "../schema/testimonialSchema";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostTestimonialMutation } from "../services/MaintenanceService";
import { items } from "../helpers/roles";
import { capitalize } from "../components/misc";

const Testimonials = () => {
  const [countdown, setCountdown] = useCountdown();
  const [alert, setAlert] = useState();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: { createdBy: "", testimonial: "", role: 1 },
    resolver: yupResolver(testimonialSchema),
  });
  const [postTestimonial, { isLoading }] = usePostTestimonialMutation();
  const { height } = useWindowDimensions();
  const { isMobile } = useCommon();
  const image = isMobile ? rm1 : r1;

  const handleChange = (evt, newVal) => {
    if (newVal) {
      const { id } = newVal;
      setValue("role", id, { shouldDirty: true });
    } else {
      const { name: field, value } = evt.target;
      setValue(field, capitalize(value), { shouldDirty: true });
    }
  };

  const onSubmit = (data) => {
    try {
      isDirty &&
        postTestimonial({ data }).then((res) => {
          if (res?.data?.id) {
            setAlert({
              type: "success",
              message: "Thank you for your submission!",
            });
            ["createdBy", "testimonial"].map((val) =>
              setValue(val, "", { shouldDirty: false })
            );
          } else {
            setAlert({
              type: "error",
              message: "Error on submit, try again later.",
            });
          }
          setCountdown(5);
        });
    } catch (error) {
      setAlert({ type: "error", message: "Error on submit, try again later." });
      setCountdown(5);
    }
  };

  //Listeners
  useEffect(() => {
    countdown === 0 && setAlert();
  }, [countdown]);

  return (
    <>
      <AppearanceButton />
      {alert && <CustomAlert type={alert?.type} message={alert?.message} />}
      <Container image={image} style={{ height }}>
        <Card
          sx={{
            width: "100%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SectionTitle>Submit a Testimonial</SectionTitle>
          <Controller
            control={control}
            name="role"
            render={({ field: { value } }) => (
              <Autocomplete
                id="role"
                name="role"
                disablePortal
                options={items}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                defaultValue={items.find((value) => value.label[0])}
                onChange={handleChange}
                disabled={isLoading}
                sx={{ width: "50%", my: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Role"
                    variant="standard"
                    error={errors?.role ? true : false}
                    helperText={errors?.role?.message || ""}
                    autoFocus
                  />
                )}
              />
            )}
          />

          <Controller
            control={control}
            name="createdBy"
            render={({ field: { value } }) => (
              <TextField
                label="Enter Name"
                name="createdBy"
                variant="standard"
                sx={{ my: 1 }}
                value={value}
                onChange={handleChange}
                error={errors.createdBy ? true : false}
                helperText={errors?.createdBy?.message || ""}
                inputProps={{ maxLength: 20 }}
                autoComplete="off"
                disabled={isLoading}
              />
            )}
          />

          <Controller
            control={control}
            name="testimonial"
            render={({ field: { value } }) => (
              <TextField
                label="Enter Testimonial (up to 1000 characters)"
                name="testimonial"
                variant="standard"
                multiline
                maxRows={4}
                minRows={2}
                sx={{ my: 1 }}
                value={value}
                onChange={handleChange}
                error={errors?.testimonial ? true : false}
                helperText={errors?.testimonial?.message || ""}
                inputProps={{ maxLength: 1000 }}
                disabled={isLoading}
              />
            )}
          />

          <Button
            variant="contained"
            sx={{
              p: 1,
              m: 2,
              width: "50%",
              minWidth: 200,
              maxWidth: 250,
              alignSelf: "center",
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default Testimonials;
