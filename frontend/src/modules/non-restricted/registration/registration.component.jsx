<<<<<<< HEAD
import UiInputText from "./libs/design-system/controls/ui-input-text/ui-input-text.component";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
=======
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
>>>>>>> 547ee03c4a25e5955c576b73be0833a51b86fa2b
import {
  RegisterNameValues,
  validateRegisterSchema,
  registerFormInitialValues,
} from '@libs/resources/models/form/index.js';
import { registerUserApi } from '@libs/resources/api/index.js';
import { useNavigate } from 'react-router-dom';
import { UiInputText } from '@libs/design-system';

const RegisterComponent = () => {
  const navigate = useNavigate();

  const registerFormik = useFormik({
    initialValues: registerFormInitialValues,
    validationSchema: validateRegisterSchema,
    onSubmit: (values) => {
      handleRegisterSubmit(values);
    },
  });

  const handleRegisterSubmit = async (values) => {
    registerUserApi(values)
      .then(() => {
        navigate('/authentication/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={registerFormik.handleSubmit}>
          <UiInputText
            id="first_name"
            label={'First Name'}
            name={RegisterNameValues.FIRST_NAME}
            isRequired={true}
            type="first_name"
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.first_name || ''}
          />
          <UiInputText
            id="last_name"
            label={RegisterNameValues.LAST_NAME}
            name={'last_name'}
            isRequired={true}
            type="last_name"
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.last_name || ''}
          />
          <UiInputText
            id="email"
            label={'Email'}
            name={RegisterNameValues.EMAIL}
            isRequired={true}
            type="email"
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.email || ''}
          />
          <UiInputText
            id="password"
            label={'Password'}
            name={RegisterNameValues.PASSWORD}
            isRequired={true}
            type="password"
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.password || ''}
          />
          <UiInputText
            id="confirm_password"
            label={'Confirm Password'}
            name={RegisterNameValues.CONFIRM_PASSWORD}
            isRequired={true}
            type="password"
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.confirm_password || ''}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link
            to={'/authentication/login'}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
