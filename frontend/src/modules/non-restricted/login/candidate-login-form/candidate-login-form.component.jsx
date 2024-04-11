import { UiInputText } from '@libs/design-system';
import {
  LoginNameValues,
  loginFormInitialValues,
  validateLoginSchema,
} from '@libs/resources/models/form';
import { Button } from '@shadcnui/components/ui/button';
import { useFormik } from 'formik';

// eslint-disable-next-line react/prop-types
const CandicateLoginFormCommponent = ({ handleLoginSubmit }) => {
  const loginFormik = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: validateLoginSchema,
    onSubmit: (values) => {
      handleLoginSubmit(values);
    },
  });
  return (
    <form className="space-y-6" onSubmit={loginFormik.handleSubmit}>
      {JSON.stringify(loginFormik)}
      <UiInputText
        id="login_email"
        placeholder={'Email'}
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
          placeholder={'Passwrod'}
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

      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default CandicateLoginFormCommponent;
