import * as  Yup from "yup";

export const validateEducationDetailschema = Yup.object().shape({
  educationType: Yup.string().required("This field is required"),
  institute: Yup.string().required("This field is required"),
  course: Yup.string().required("This field is required"),
  since: Yup.string().required("This field is required"),
  until: Yup.string(),
  gradingSystem: Yup.string().required("This field is required"),
  marks: Yup.string().required("This field is required"),
});

export const educationDeatilFormInitialValues = {
    educationType: null,
    institute: null,
    course: null,
    since: null,
    until: null,
    gradingSystem: null,
    marks: null,
  };

  export const EducationDetailNameValues = Object.freeze({
    EDUCATION_TYPE: 'educationType',
    INSTITUTE: 'institute',
    COURSE: 'course',
    SINCE: 'since',
    UNTIL: 'until',
    GRADING_SYSTEM: 'gradingSystem',
    MARKS: 'marks',
  });