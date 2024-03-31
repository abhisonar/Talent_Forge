import UiInputText from 'libs/design-system/controls/ui-input-text/ui-input-text.component';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
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
        <form className="space-y-6" action="#" method="POST">
          <UiInputText id="email" label={'Email'} name={'email'} isRequired={true} type="email" />
          <UiInputText
            id="password"
            label={'Password'}
            name={'password'}
            isRequired={true}
            type="text"
          />
          <UiInputText id="role" label={'Role'} name={'role'} isRequired={true} type="text" />
          <UiInputText
            id="username"
            label={'Username'}
            name={'username'}
            isRequired={true}
            type="text"
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
