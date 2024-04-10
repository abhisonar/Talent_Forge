// import UiInputText from "./libs/design-system/controls/ui-input-text/ui-input-text.component";
import { Link } from 'react-router-dom';
import { registerUserApi } from '@libs/resources/api/index.js';
import { useNavigate } from 'react-router-dom';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcnui/components/ui/tabs';
import CandidatRegistrationFormComponent from '@modules/non-restricted/registration/candidate--registration-form/candidate-registration-form.component';

const RegisterComponent = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Tabs defaultValue="candidate" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="candidate">Candicate Sign Up</TabsTrigger>
          <TabsTrigger value="employer">Employer Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="candidate">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandidatRegistrationFormComponent handleRegisterSubmit={handleRegisterSubmit} />
          </div>
        </TabsContent>
        <TabsContent value="employer">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandidatRegistrationFormComponent handleRegisterSubmit={handleRegisterSubmit} />
          </div>
        </TabsContent>
      </Tabs>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link
          to={'/authentication/registration'}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default RegisterComponent;
