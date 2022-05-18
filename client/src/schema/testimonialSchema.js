import * as yup from "yup";

export const testimonialSchema = yup.object().shape({
  createdBy: yup
    .string()
    .required("Required.")
    .min(1, "At least 1 char.")
    .max(50, "Max of 50 chars."),
  testimonial: yup
    .string()
    .required("Required.")
    .min(1, "At least 1 char.")
    .max(1000, "Max of 1000 chars."),
  role: yup.number().required("Required."),
});
