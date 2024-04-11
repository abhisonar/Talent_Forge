/* eslint-disable react/prop-types */
import { UiInputText } from '@libs/design-system';
import {
  RegisterNameValues,
  registerFormInitialValues,
  validateRegisterSchema,
} from '@libs/resources/models/form';
import { Button } from '@shadcnui/components/ui/button';
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
      <UiInputText
        id="first_name"
        placeholder={'First Name'}
        name={RegisterNameValues.FIRST_NAME}
        isRequired={true}
        type="first_name"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.first_name || ''}
      />
      <UiInputText
        id="last_name"
        placeholder={RegisterNameValues.LAST_NAME}
        name={'last_name'}
        isRequired={true}
        type="last_name"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.last_name || ''}
      />
      <UiInputText
        id="email"
        placeholder={'Email'}
        name={RegisterNameValues.EMAIL}
        isRequired={true}
        type="email"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.email || ''}
      />
      <UiInputText
        id="password"
        placeholder={'Password'}
        name={RegisterNameValues.PASSWORD}
        isRequired={true}
        type="password"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.password || ''}
      />
      <UiInputText
        id="confirm_password"
        placeholder={'Confirm Password'}
        name={RegisterNameValues.CONFIRM_PASSWORD}
        isRequired={true}
        type="password"
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.confirm_password || ''}
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default CandidatRegistrationFormComponent;
