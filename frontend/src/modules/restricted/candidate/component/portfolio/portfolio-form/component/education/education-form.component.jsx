import { UiButton, UiInputText } from '@libs/design-system';
import UiInputDate from '@libs/design-system/controls/ui-input-date/ui-input-date.component';
import UiInputSelectComponenet from '@libs/design-system/controls/ui-input-select/ui-input-select.componenet';
import { listInstitutes } from '@libs/resources/api';
import { getAutocompleteOption } from '@libs/resources/function/autocomplete.function';
import {
  educationDeatilFormInitialValues,
  validateEducationDetailschema,
  EducationDetailNameValues,
} from '@libs/resources/models/form/candidate/candidate-education.form';
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
  };

  const handleDateSelection = (name, value) => {
    educationDetailFormik.setValues((values) => ({ ...values, [name]: value }));
  };

  const getInstituteList = (search) => {
    return listInstitutes({
      title: search || 'Pune',
    }).then((response) => {
      console.log(response);
      return response?.map((item) => getAutocompleteOption(item, '_id', 'title'));
    });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={educationDetailFormik.handleSubmit}>
      <div className="grid grid-cols-1 gap-2">
        <UiInputText
          id="educationType"
          placeholder={'Education Type'}
          name={EducationDetailNameValues.EDUCATION_TYPE}
          isRequired={true}
          type="text"
          onChange={educationDetailFormik.handleChange}
        />
        <UiInputText
          id="EducationDetailNameValues.DEGREE"
          placeholder={'Course'}
          name={EducationDetailNameValues.COURSE}
          isRequired={true}
          type="text"
          onChange={educationDetailFormik.handleChange}
        />
        <UiInputSelectComponenet label={'Institute'} apiFun={getInstituteList} />
        <UiInputText
          id="EducationDetailNameValues.INSTITUTE"
          placeholder={'Institute'}
          name={EducationDetailNameValues.INSTITUTE}
          isRequired={true}
          type="text"
          onChange={educationDetailFormik.handleChange}
        />
        <div className="grid grid-cols-2 gap-2">
          <UiInputDate
            label={'Start Year'}
            setInputDate={(value) => handleDateSelection(EducationDetailNameValues.SINCE, value)}
            selectedDate={educationDetailFormik.values.since}
          />
          <UiInputDate
            label={'End Year'}
            setInputDate={(value) => handleDateSelection(EducationDetailNameValues.UNTIL, value)}
            selectedDate={educationDetailFormik.values.until}
          />
        </div>
        <UiInputText
          id={EducationDetailNameValues.GRADING_SYSTEM}
          placeholder={'Granding System'}
          name={EducationDetailNameValues.GRADING_SYSTEM}
          isRequired={true}
          type="text"
          onChange={educationDetailFormik.handleChange}
        />
        <UiInputText
          id={EducationDetailNameValues.MARKS}
          placeholder={'Marks'}
          name={EducationDetailNameValues.MARKS}
          isRequired={true}
          type="text"
          onChange={educationDetailFormik.handleChange}
        />
      </div>
      <div className="flex justify-end gap-2">
        <UiButton type="submit">
          <span className="">Save</span>
        </UiButton>
      </div>
    </form>
  );
};

export default EducationFormComponent;
