/* eslint-disable react/prop-types */
import EnumSelectComponent from '@libs/components/utility/enum-select/enum-select.component';
import { UiButton, UiInputText } from '@libs/design-system';
import UiInputDate from '@libs/design-system/controls/ui-input-date/ui-input-date.component';
import UiInputSelectComponenet from '@libs/design-system/controls/ui-input-select/ui-input-select.component';
import {
  listInstitutes,
  listEducationType,
  listCourses,
  addEducationDetail,
  udpateEducationDetail,
} from '@libs/resources/api';
import { toastApiErrorMessage, toastSuccessMessage } from '@libs/resources/function';
import { getAutocompleteOption } from '@libs/resources/function/autocomplete.function';
import {
  educationDeatilFormInitialValues,
  validateEducationDetailschema,
  EducationDetailNameValues,
  EducationFormData,
} from '@libs/resources/models/form/candidate/candidate-education.form';
import { EducationContext } from '@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education.context';
import { useToast } from '@shadcnui/components/ui/use-toast';
import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';

const EducationFormComponent = ({
  educationData,
  editIndex = -1,
  setIsSaving,
  isSaving,
  setDialogVisible,
}) => {
  const { toast } = useToast();

  const educationContext = useContext(EducationContext);

  let educationDetailFormik = useFormik({
    initialValues: educationDeatilFormInitialValues,
    validationSchema: validateEducationDetailschema,
    onSubmit: (values) => {
      handleEducationDetailsubmit(values);
    },
  });

  useEffect(() => {
    patchToFormData();
  }, [educationData]);

  const patchToFormData = () => {
    if (!educationData) return;
    const formData = EducationFormData.mapFromHttp(educationData);
    educationDetailFormik.setValues(formData);
  };

  const handleEducationDetailsubmit = (values) => {
    if (!educationDetailFormik.isValid) {
      return;
    }

    const formData = {
      ...values,
      since: new Date(values?.since).toISOString(),
      until: new Date(values?.until).toISOString(),
    };

    setIsSaving(true);

    let promise$ = values?.id
      ? udpateEducationDetail(values?.id, formData)
      : addEducationDetail(formData);

    promise$
      .then((response) => {
        updateEducationData(response);
        toastSuccessMessage(toast);
        setDialogVisible(false);
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const updateEducationData = (latestData) => {
    const { setEducationData, educationData } = educationContext;
    if (editIndex !== -1) {
      educationData.splice(editIndex, 1, latestData);
    } else {
      const data = [...educationData, latestData].sort(
        (a, b) => new Date(b?.since).getTime() - new Date(a?.since).getTime()
      );
      setEducationData([...data]);
    }
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
          onBlur={educationDetailFormik.handleBlur}
          selectedValue={educationDetailFormik.values.educationType}
          error={
            educationDetailFormik.touched.educationType &&
            educationDetailFormik.errors.educationType
          }
        />
        <UiInputSelectComponenet
          placeholder={'Institute'}
          apiFun={getInstituteList}
          isAsyncData={true}
          onBlur={educationDetailFormik.handleBlur}
          setSelectedValue={(value) =>
            handleValueChange(EducationDetailNameValues.INSTITUTE, value)
          }
          selectedValue={educationDetailFormik.values.institute}
          error={educationDetailFormik.touched.institute && educationDetailFormik.errors.institute}
        />
        <UiInputSelectComponenet
          placeholder={'Courses'}
          apiFun={getCourseList}
          isAsyncData={true}
          onBlur={educationDetailFormik.handleBlur}
          setSelectedValue={(value) => handleValueChange(EducationDetailNameValues.COURSE, value)}
          selectedValue={educationDetailFormik.values.course}
          error={educationDetailFormik.touched.course && educationDetailFormik.errors.course}
        />
        <div className="grid grid-cols-2 gap-2">
          <UiInputDate
            label={'Start Year'}
            setInputDate={(value) => handleDateSelection(EducationDetailNameValues.SINCE, value)}
            selectedDate={educationDetailFormik.values.since}
            onBlur={educationDetailFormik.touched.since && educationDetailFormik.handleBlur}
            error={educationDetailFormik.touched.since && educationDetailFormik.errors.since}
          />
          <UiInputDate
            label={'End Year'}
            setInputDate={(value) => handleDateSelection(EducationDetailNameValues.UNTIL, value)}
            selectedDate={educationDetailFormik.values.until}
            onBlur={educationDetailFormik.handleBlur}
            error={educationDetailFormik.touched.until && educationDetailFormik.errors.until}
          />
        </div>
        <EnumSelectComponent
          placeholder={'Grading System'}
          enumType={'GRADING_SYSTEM'}
          setSelectedValue={(value) =>
            handleValueChange(EducationDetailNameValues.GRADING_SYSTEM, value)
          }
          onBlur={educationDetailFormik.handleBlur}
          selectedValue={educationDetailFormik.values.gradingSystem}
          error={
            educationDetailFormik.touched.gradingSystem &&
            educationDetailFormik.errors.gradingSystem
          }
        />
        <UiInputText
          value={educationDetailFormik.values.marks}
          id={EducationDetailNameValues.MARKS}
          placeholder={'Marks'}
          name={EducationDetailNameValues.MARKS}
          onChange={educationDetailFormik.handleChange}
          onBlur={educationDetailFormik.handleBlur}
          error={educationDetailFormik.touched.marks && educationDetailFormik.errors.marks}
        />
      </div>
      <div className="flex justify-end gap-2">
        <UiButton type="submit" isLoading={isSaving} icon={'pi-check'}>
          <span className="">Save</span>
        </UiButton>
      </div>
    </form>
  );
};

export default EducationFormComponent;
