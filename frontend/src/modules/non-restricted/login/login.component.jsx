import { useState } from 'react';
import { UiInputText, UiButton } from 'libs/design-system';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  loginFormInitialValues,
  LoginNameValues,
  validateLoginSchema,
} from 'libs/resources/models/form/index.js';
import { loginUserApi } from 'libs/resources/api/index.js';
import { setLocalStorageItem } from 'libs/resources/function/index.js';
import { STORAGE_KEY_USER_TOKEN } from 'libs/resources/constant/index.js';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: validateLoginSchema,
    onSubmit: (values) => {
      handleLoginSubmit(values);
    },
  });

  const handleLoginSubmit = async (values) => {
    setIsLoading(true);
    loginUserApi(values)
      .then((res) => {
        setLocalStorageItem(STORAGE_KEY_USER_TOKEN, res?.token);
        navigate('/candidate');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
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
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginFormik.handleSubmit}>
          <UiInputText
            id="login_email"
            label={'Email'}
            name={LoginNameValues.LOGIN_EMAIL}
            isRequired={true}
            type="email"
            onChange={loginFormik.handleChange}
            error={loginFormik.errors.login_email || ''}
          />
          <div>
            <UiInputText
              id="login_password"
              label={'Passwrod'}
              name={LoginNameValues.LOGIN_PASSWORD}
              isRequired={true}
              type="password"
              onChange={loginFormik.handleChange}
              error={loginFormik.errors.login_password || ''}
            />
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <UiButton label={'Sign In'} type="submit"></UiButton>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link
            to={'/authentication/registration'}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
