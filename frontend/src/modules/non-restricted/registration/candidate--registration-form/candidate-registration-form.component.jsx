/* eslint-disable react/prop-types */
import {
  RegisterNameValues,
  registerFormInitialValues,
  validateRegisterSchema,
} from '@libs/resources/models/form';
import { Button } from '@shadcnui/components/ui/button';
import { Input } from '@shadcnui/components/ui/input';
import { useFormik } from 'formik';

const CandidatRegistrationFormComponent = ({ handleRegisterSubmit }) => {
  const registerFormik = useFormik({
    initialValues: registerFormInitialValues,
    validationSchema: validateRegisterSchema,
    onSubmit: (values) => {
      handleRegisterSubmit(values);
    },
  });
  return (
    <form className="space-y-6" onSubmit={registerFormik.handleSubmit}>
      <Input
        id="first_name"
        placeholder={'First Name'}
        name={RegisterNameValues.FIRST_NAME}
        required={true}
        type="first_name"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.first_name || ''}
      />
      <Input
        id="last_name"
        placeholder={RegisterNameValues.LAST_NAME}
        name={'last_name'}
        required={true}
        type="last_name"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.last_name || ''}
      />
      <Input
        id="email"
        placeholder={'Email'}
        name={RegisterNameValues.EMAIL}
        required={true}
        type="email"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.email || ''}
      />
      <Input
        id="password"
        placeholder={'Password'}
        name={RegisterNameValues.PASSWORD}
        required={true}
        type="password"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.password || ''}
      />
      <Input
        id="confirm_password"
        placeholder={'Confirm Password'}
        name={RegisterNameValues.CONFIRM_PASSWORD}
        required={true}
        type="password"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.confirm_password || ''}
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default CandidatRegistrationFormComponent;
