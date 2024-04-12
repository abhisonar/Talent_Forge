import { UiInputText } from "@libs/design-system";
import {
  educationDeatilFormInitialValues,
  validateEducationDetailschema,
  EducationDetailNameValues,
} from "@libs/resources/models/form/candidate/candidate-education.form";
import { Button } from '@shadcnui/components/ui/button';
import { useFormik } from 'formik';

const EducationFormComponent = () => {
  const educationDetailFormik = useFormik({
    initialValues: educationDeatilFormInitialValues,
    validationSchema: validateEducationDetailschema,
    onSubmit: (values) => {
      handleEducationDetailsubmit(values);
    },
  });
  const handleEducationDetailsubmit = (values) => {
    console.log(values);
  }
  return (
    <form className="space-y-6" onSubmit={educationDetailFormik.handleSubmit}>
      <UiInputText
        id="school_name"
        placeholder={"School Name"}
        name={EducationDetailNameValues.SCHOOL_NAME}
        isRequired={true}
        type="school_name"
        onChange={educationDetailFormik.handleChange}
      />
      <UiInputText
        id="degree"
        placeholder={"Degree"}
        name={EducationDetailNameValues.DEGREE}
        isRequired={true}
        type="degree"
        onChange={educationDetailFormik.handleChange}
      />
      <UiInputText
        id="field_of_study"
        placeholder={"Field of Study"}
        name={EducationDetailNameValues.FIELD_OF_STUDY}
        isRequired={true}
        type="field_of_study"
        onChange={educationDetailFormik.handleChange}
      />
    </form>
  );
};

export default EducationFormComponent;
