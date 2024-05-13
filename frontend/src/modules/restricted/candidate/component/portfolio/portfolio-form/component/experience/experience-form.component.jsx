/* eslint-disable react/prop-types */
import { UiButton } from "@libs/design-system";
import UiInputDate from "@libs/design-system/controls/ui-input-date/ui-input-date.component";
import UiInputSelectComponenet from "@libs/design-system/controls/ui-input-select/ui-input-select.component";
import {
  toastApiErrorMessage,
  toastSuccessMessage,
} from "@libs/resources/function";
import { useToast } from "@shadcnui/components/ui/use-toast";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import {
  experienceDeatailFormInitialValues,
  validateExperienceDetailschema,
  ExperienceDetailNameValues,
  ExperienceFormData,
} from "@libs/resources/models/form/candidate/candidate-experience.form";
import { ExperienceContext } from "@modules/restricted/candidate/component/portfolio/portfolio-form/component/experience/experience.context";
import { getAutocompleteOption } from "@libs/resources/function/autocomplete.function";
import {
  addExperienceDetailApi,
  listCompaniesApi, listCoursesApi,
  listDesignationsApi,
  updateExperienceDetailApi,
} from "@libs/resources/api/candidate/experience.route";
import UiCheckBoxComponent from "@libs/design-system/controls/ui-checkbox/ui-checkbox.component";
import UiInputTextAreaComponent from "@libs/design-system/controls/ui-input-textarea/ui-input-textarea.component";

const ExperienceFormComponent = ({
  experienceData,
  editIndex = -1,
  setIsSaving,
  isSaving,
  setDialogVisible,
}) => {
  const { toast } = useToast();

  const experienceContext = useContext(ExperienceContext);

  let experienceDetailFormik = useFormik({
    initialValues: experienceDeatailFormInitialValues,
    validationSchema: validateExperienceDetailschema,
    onSubmit: (values) => {
      handleExperienceDetailSubmit(values);
    },
  });

  useEffect(() => {
    patchToFormData();
  }, [experienceData]);

  const patchToFormData = () => {
    if (!experienceData) return;
    const formData = ExperienceFormData.mapFromHttp(experienceData);
    experienceDetailFormik.setValues(formData);
  };

  const handleExperienceDetailSubmit = (values) => {
    if (!experienceDetailFormik.isValid) {
      return;
    }


    setIsSaving(true);
    let promise$ = values?.id
      ? updateExperienceDetailApi(values?.id, formData)
      : addExperienceDetailApi(formData);

    promise$
      .then(() => {
        updateExperienceData(formData);
        toastSuccessMessage(toast, "Experience Detail Saved Successfully");
        setDialogVisible(false);
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const updateExperienceData = (latestData) => {
    const { setExperienceData, experienceData } = experienceContext;
    if (editIndex !== -1) {
      experienceData.splice(editIndex, 1, latestData);
    } else {
      const data = [...experienceData, latestData].sort(
        (a, b) => new Date(b?.since).getTime() - new Date(a?.since).getTime()
      );
      setExperienceData([...data]);
    }
  };
  const handleDateSelection = (name, value) => {
    experienceDetailFormik.setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const getDesignationList = (search) => {
    return listDesignationsApi({
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "title")
      );
    });
  };

  const getCourseList = (search) => {
    return listCoursesApi({
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) =>
          getAutocompleteOption(item, "_id", "title")
      );
    });
  };
  const getCompanyList = (search) => {
    return listCompaniesApi({
      title: search || undefined,
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "title")
      );
    });
  };

  const handleValueChange = (name, value) => {
    experienceDetailFormik.setValues({
      ...experienceDetailFormik.values,
      [name]: value,
    });
  };

  const onCurrentlyWorkingChange = (value) => {
    handleValueChange(
        ExperienceDetailNameValues.IS_CURRENTLY_WORKING,
        value
    )
    experienceDetailFormik.setFieldValue('until', null)
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={experienceDetailFormik.handleSubmit}
    >
      <div className="grid grid-cols-1 gap-2">
        <UiInputSelectComponenet
          placeholder={"Designation"}
          apiFun={getDesignationList}
          isAsyncData={true}
          setSelectedValue={(value) =>
            handleValueChange(ExperienceDetailNameValues.DESIGNATION_ID, value)
          }
          onBlur={experienceDetailFormik.handleBlur}
          selectedValue={experienceDetailFormik.values.designationId}
          error={
            experienceDetailFormik.touched.designationId &&
            experienceDetailFormik.errors.designationId
          }
        />
        <UiInputSelectComponenet
          placeholder={"Company"}
          apiFun={getCompanyList}
          isAsyncData={true}
          onBlur={experienceDetailFormik.handleBlur}
          setSelectedValue={(value) =>
            handleValueChange(ExperienceDetailNameValues.COMPANY_ID, value)
          }
          selectedValue={experienceDetailFormik.values.companyId}
          error={
            experienceDetailFormik.touched.companyId &&
            experienceDetailFormik.errors.companyId
          }
        />

        <UiInputSelectComponenet
            placeholder={"Course"}
            apiFun={getCourseList}
            isAsyncData={true}
            onBlur={experienceDetailFormik.handleBlur}
            setSelectedValue={(value) =>
                handleValueChange(ExperienceDetailNameValues.COURSE_ID, value)
            }
            selectedValue={experienceDetailFormik.values.courseId}
            error={
                experienceDetailFormik.touched.courseId &&
                experienceDetailFormik.errors.courseId
            }
        />
        <div className="grid grid-cols-2 gap-2">
          <UiInputDate
            className={
              !experienceDetailFormik.values.isCurrentlyWorking
                ? null
                : null
            }
            label={"Start Date"}
            setInputDate={(value) =>
              handleDateSelection(ExperienceDetailNameValues.SINCE, value)
            }
            selectedDate={experienceDetailFormik.values.since}
            onBlur={
              experienceDetailFormik.touched.since &&
              experienceDetailFormik.handleBlur
            }
            error={
              experienceDetailFormik.touched.since &&
              experienceDetailFormik.errors.since
            }
          />
          {true && (
            <UiInputDate
              label={"End Date"}
              setInputDate={(value) =>
                handleDateSelection(ExperienceDetailNameValues.UNTIL, value)
              }
              selectedDate={experienceDetailFormik.values.until}
              onBlur={experienceDetailFormik.handleBlur}
              error={
                experienceDetailFormik.touched.until &&
                experienceDetailFormik.errors.until
              }
            />
          )}
        </div>
        <UiCheckBoxComponent
          onChange={(value) =>
            onCurrentlyWorkingChange(value)
          }
          id={"daschdsv"}
          ischecked={experienceDetailFormik.values.isCurrentlyWorking}
          label={"Currently Working"}
        />
        <UiInputTextAreaComponent
          value={experienceDetailFormik.values.description}
          placeholder={"Description"}
          onChange={(value) => {
            handleValueChange(ExperienceDetailNameValues.DESCRIPTION, value);
          }}
          error={
              experienceDetailFormik.touched.description &&
              experienceDetailFormik.errors.description
          }
        />
      </div>
      <div className="flex justify-end gap-2">
        <UiButton type="submit" isLoading={isSaving} icon={"pi-check"}>
          <span className="">Save</span>
        </UiButton>
      </div>
    </form>
  );
};

export default ExperienceFormComponent;
