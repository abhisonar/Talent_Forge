import { UiButton, UiInputText } from "@libs/design-system";
import UiInputDate from "@libs/design-system/controls/ui-input-date/ui-input-date.component";
import UiInputSelectComponenet from "@libs/design-system/controls/ui-input-select/ui-input-select.componenet";
import {
  listInstitutes,
  listEducationType,
  listCourses,
  listGradingSystem,
} from "@libs/resources/api";
import { getAutocompleteOption } from "@libs/resources/function/autocomplete.function";
import {
  educationDeatilFormInitialValues,
  validateEducationDetailschema,
  EducationDetailNameValues,
} from "@libs/resources/models/form/candidate/candidate-education.form";
import { useFormik } from "formik";

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
      title: search || "",
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "title")
      );
    });
  };
  const getEducationTypeList = (search) => {
    return listEducationType({
      title: search || "",
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "title")
      );
    });
  };
  const getCourseList = (search) => {
    return listCourses({
      title: search || "",
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "title")
      );
    });
  };
  const getGradingSystemList = (search) => {
    return listGradingSystem({
      diplayText: search || "",
    }).then((response) => {
      return response?.map((item) =>
        getAutocompleteOption(item, "_id", "diplayText")
      );
    });
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={educationDetailFormik.handleSubmit}
    >
      <div className="grid grid-cols-1 gap-2">
        <UiInputSelectComponenet
          label={"Education Type"}
          apiFun={getEducationTypeList}
        />
        <UiInputSelectComponenet
          label={"Institute"}
          apiFun={getInstituteList}
        />
        <UiInputSelectComponenet label={"Courses"} apiFun={getCourseList} />
        <div className="grid grid-cols-2 gap-2">
          <UiInputDate
            label={"Start Year"}
            setInputDate={(value) =>
              handleDateSelection(EducationDetailNameValues.SINCE, value)
            }
            selectedDate={educationDetailFormik.values.since}
          />
          <UiInputDate
            label={"End Year"}
            setInputDate={(value) =>
              handleDateSelection(EducationDetailNameValues.UNTIL, value)
            }
            selectedDate={educationDetailFormik.values.until}
          />
        </div>
        <UiInputSelectComponenet
          label={"Grading System"}
          apiFun={getGradingSystemList}
        />

        <UiInputText
          id={EducationDetailNameValues.MARKS}
          placeholder={"Marks"}
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
