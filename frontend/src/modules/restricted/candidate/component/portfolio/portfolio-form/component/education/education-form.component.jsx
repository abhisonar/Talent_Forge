/* eslint-disable react/prop-types */
import EnumSelectComponent from '@libs/components/utility/enum-select/enum-select.component';
import { UiButton, UiInputText } from '@libs/design-system';
import UiInputDate from '@libs/design-system/controls/ui-input-date/ui-input-date.component';
import UiInputSelectComponenet from '@libs/design-system/controls/ui-input-select/ui-input-select.componenet';
import { listInstitutes, listEducationType, listCourses } from '@libs/resources/api';
import { getAutocompleteOption } from '@libs/resources/function/autocomplete.function';
import {
  educationDeatilFormInitialValues,
  validateEducationDetailschema,
  EducationDetailNameValues,
} from '@libs/resources/models/form/candidate/candidate-education.form';
import { useFormik } from 'formik';

const EducationFormComponent = ({ educationData }) => {
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
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) => getAutocompleteOption(item, '_id', 'title'));
    });
  };
  const getEducationTypeList = (search) => {
    return listEducationType({
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) => getAutocompleteOption(item, '_id', 'title'));
    });
  };
  const getCourseList = (search) => {
    return listCourses({
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) => getAutocompleteOption(item, '_id', 'title'));
    });
  };

  const handleValueChange = (name, value) => {
    educationDetailFormik.setValues({ ...educationDetailFormik.values, [name]: value });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={educationDetailFormik.handleSubmit}>
      <div className="grid grid-cols-1 gap-2">
        <UiInputSelectComponenet
          placeholder={'Education Type'}
          apiFun={getEducationTypeList}
          isAsyncData={true}
          setSelectedValue={(value) =>
            handleValueChange(EducationDetailNameValues.EDUCATION_TYPE, value)
          }
          selectedValue={educationDetailFormik.values.educationType}
        />
        <UiInputSelectComponenet
          placeholder={'Institute'}
          apiFun={getInstituteList}
          isAsyncData={true}
          setSelectedValue={(value) =>
            handleValueChange(EducationDetailNameValues.INSTITUTE, value)
          }
          selectedValue={educationDetailFormik.values.institute}
        />
        <UiInputSelectComponenet
          placeholder={'Courses'}
          apiFun={getCourseList}
          isAsyncData={true}
          setSelectedValue={(value) => handleValueChange(EducationDetailNameValues.COURSE, value)}
          selectedValue={educationDetailFormik.values.course}
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
        <EnumSelectComponent placeholder={'Grading System'} enumType={'GRADING_SYSTEM'} />

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
