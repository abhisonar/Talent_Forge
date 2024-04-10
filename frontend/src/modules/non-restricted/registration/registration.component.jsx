// import UiInputText from "./libs/design-system/controls/ui-input-text/ui-input-text.component";
import { Link } from "react-router-dom";
import { registerUserApi } from "@libs/resources/api/index.js";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@shadcnui/components/ui/tabs";
import CandidatRegistrationFormComponent from "@modules/non-restricted/registration/candidate--registration-form/candidate-registration-form.component";
import { useState } from "react";
import { UserRoleEnum } from "@libs/resources/enum/uesr-role.enum";

const RegisterComponent = () => {
  const [userRoleCode, setUserRoleCode] = useState(
    UserRoleEnum.USER_ROLE_CANDIDATE
  );
  const navigate = useNavigate();

  const handleRegisterSubmit = async (values) => {
    values.role = userRoleCode;
    registerUserApi(values)
      .then(() => {
        navigate("/authentication/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTabChange = (value) => {
    setUserRoleCode(value);
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Tabs
        defaultValue={userRoleCode}
        className="w-[400px]"
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={UserRoleEnum.USER_ROLE_CANDIDATE}>
            Candicate Sign Up
          </TabsTrigger>
          <TabsTrigger value={UserRoleEnum.USER_ROLE_RECRUITER}>
            Recruiter Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value={UserRoleEnum.USER_ROLE_CANDIDATE}>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandidatRegistrationFormComponent
              handleRegisterSubmit={handleRegisterSubmit}
            />
          </div>
        </TabsContent>
        <TabsContent value={UserRoleEnum.USER_ROLE_RECRUITER}>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CandidatRegistrationFormComponent
              handleRegisterSubmit={handleRegisterSubmit}
            />
          </div>
        </TabsContent>
      </Tabs>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{" "}
        <Link
          to={"/authentication/registration"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default RegisterComponent;
