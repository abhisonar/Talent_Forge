import * as Yup from "yup";

export const validateExperienceDetailschema = Yup.object({
  designationId : Yup.string().required('Designation is required'),
  designationTitle: Yup.string(),
  companyId: Yup.string().required('Company is required'),
  companyName: Yup.string(),
  course: Yup.string().required("Course is required"),
  since: Yup.string().required("Since Date is required"),
  until: Yup.string().required("Until Date is required"),
  isCurrentlyWorking: Yup.boolean(),
  description: Yup.string().length(500)
});

export const experienceDeatilFormInitialValues = {
      id: null,
      designationTitle : null ,  
      designationId : null,  
      companyName : null,
      companyId : null,
      since : null,
      until :null,
      isCurrentlyWorking : true,
      description :null

};

export const ExperienceDetailNameValues = Object.freeze({
    DESIGNATION_TITLE: "designationTitle",
    DESIGNATION_ID: "designationId",
    COMPANY_NAME: "companyName",
    COMPANY_ID: "companyId",
    SINCE: "since",
    UNTIL: "until",
    IS_CURRENTLY_WORKING: "isCurrentlyWorking",
    DESCRIPTION: "description",
});

export class ExperienceFormData {
    static mapFromHttp(httpData){
        const formData = new ExperienceFormData();
        formData.id = httpData?._id;
        // formData.designationTitle= httpData?.
        formData.designationId = httpData?.designationId;
        // formData.companyName = httpData?.companyName;
        formData.companyId = httpData?.companyId;
        formData.since = httpData?.since;
        formData.until = httpData?.until;
        formData.isCurrentlyWorking = httpData?.isCurrentlyWorking;
        formData.description = httpData?.description;
        return formData;
    }

}


