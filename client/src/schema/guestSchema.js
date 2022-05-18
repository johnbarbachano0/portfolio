import * as yup from "yup";

export const guestSchema = yup.object().shape({
  guestType: yup.number().typeError("Required.").required("Required."),
});
