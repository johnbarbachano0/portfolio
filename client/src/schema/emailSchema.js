import * as yup from "yup";

export const emailSchema = yup.object().shape({
  createdBy: yup
    .string()
    .required("Required.")
    .min(1, "At least 1 char.")
    .max(20, "Max of 20 chars."),
  subject: yup
    .string()
    .required("Required.")
    .min(1, "At least 1 char.")
    .max(100, "Max of 100 chars."),
  email: yup.string().email("Invalid email.").required("Required."),
  message: yup
    .string()
    .required("Required.")
    .min(1, "At least 1 char.")
    .max(1000, "Max of 1000 chars."),
});
