import * as Yup from "yup";

export const validateRegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string().notRequired(),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Pasword must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password ahould contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  confirm_password: Yup.string().when("password", (password, field) => {
    if (password) {
      return field
        .required("The passwords do not match")
        .oneOf([Yup.ref("password")], "The passwords do not match");
    }
  }),
});

export const registerFormInitialValues = {
  first_name: null,
  last_name: null,
  email: null,
  password: null,
  confirm_password: null,
};

export const RegisterNameValues = Object.freeze({
  FIRST_NAME: "first_name",
  LAST_NAME: "last_name",
  EMAIL: "email",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirm_password",
});
