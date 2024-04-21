import * as Yup from 'yup';

export const validateEducationDetailschema = Yup.object({
  educationType: Yup.string().required('Education Type is required'),
  institute: Yup.string().required('Institute is required'),
  course: Yup.string().required('Course is required'),
  since: Yup.string().required('Since Date is required'),
  until: Yup.string().required('Until Date is required'),
  gradingSystem: Yup.string().required('Granding System is required'),
  marks: Yup.string().required('Marks is required'),
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
  COURSE: 'course',
  INSTITUTE: 'institute',
  SINCE: 'since',
  UNTIL: 'until',
  GRADING_SYSTEM: 'gradingSystem',
  MARKS: 'marks',
});

export class EducationFormData {
  static mapFromHttp(httpData) {
    const formData = new EducationFormData();
    formData.educationType = httpData?.educationType;
    formData.institute = httpData?.institute;
    formData.course = httpData?.course;
    formData.since = httpData?.since;
    formData.until = httpData?.until;
    formData.gradingSystem = httpData?.gradingSystem;
    formData.marks = httpData?.marks;
    return formData;
  }
}
