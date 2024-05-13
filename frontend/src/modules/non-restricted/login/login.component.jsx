import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUserApi } from '@libs/resources/api/index.js';
import {
  setLocalStorageItem,
  toastApiErrorMessage,
  toastSuccessMessage,
} from '@libs/resources/function/index.js';
import { STORAGE_KEY_USER_TOKEN } from '@libs/resources/constant/index.js';
import { useNavigate } from 'react-router-dom';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcnui/components/ui/tabs';
import CandicateLoginFormCommponent from '@modules/non-restricted/login/candidate-login-form/candidate-login-form.component';
import { useToast } from '@shadcnui/components/ui/use-toast';

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLoginSubmit = async (values) => {
    setIsLoading(true);
    loginUserApi(values)
      .then((res) => {
        toastSuccessMessage(toast, 'Login Successfully');
        setLocalStorageItem(STORAGE_KEY_USER_TOKEN, res?.token);

        navigate('/candidate');
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Tabs defaultValue="candidate" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="candidate">Candicate Login</TabsTrigger>
          <TabsTrigger value="employer">Employer Login</TabsTrigger>
        </TabsList>
        <TabsContent value="candidate">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandicateLoginFormCommponent
              handleLoginSubmit={handleLoginSubmit}
              isLoading={isLoading}
            />
          </div>
        </TabsContent>
        <TabsContent value="employer">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandicateLoginFormCommponent
              handleLoginSubmit={handleLoginSubmit}
              isLoading={isLoading}
            />
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

export default LoginComponent;
