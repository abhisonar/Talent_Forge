import * as Yup from 'yup';

export const validateLoginSchema = Yup.object().shape({
  login_email: Yup.string().email('Invalid email'),
  login_password: Yup.string().required('This field is required'),
});

export const loginFormInitialValues = {
  login_email: null,
  login_password: null,
};

export const LoginNameValues = Object.freeze({
  LOGIN_EMAIL: 'login_email',
  LOGIN_PASSWORD: 'login_password',
});
