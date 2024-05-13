import * as Yup from "yup";
import {convertToDayjsDate} from "@libs/resources/function/index.js";

export const validateExperienceDetailschema = Yup.object({
    designationId: Yup.string().required('Designation is required'),
    designationTitle: Yup.string(),
    companyId: Yup.string().required('Company is required'),
    companyName: Yup.string(),
    courseId: Yup.string().required("Course is required"),
    since: Yup.string().required("Since Date is required"),
    isCurrentlyWorking: Yup.boolean(),
    until: Yup.string().nullable().when(
        'isCurrentlyWorking',
        {is: (value) => !value, then: (s) => s.required('Until date is required'), otherwise: (s) => s}),
    description: Yup.string().max(500)
});

export const experienceDeatailFormInitialValues = {
    id: null,
    designationTitle: null,
    designationId: null,
    courseId: null,
    companyName: null,
    companyId: null,
    since: null,
    until: null,
    isCurrentlyWorking: false,
    description: null

};

export const ExperienceDetailNameValues = Object.freeze({
    DESIGNATION_TITLE: "designationTitle",
    DESIGNATION_ID: "designationId",
    COURSE_ID: "courseId",
    COMPANY_NAME: "companyName",
    COMPANY_ID: "companyId",
    SINCE: "since",
    UNTIL: "until",
    IS_CURRENTLY_WORKING: "isCurrentlyWorking",
    DESCRIPTION: "description",
});

export class ExperienceFormData {
    static mapFromHttp(http) {
        const formData = new ExperienceFormData();

        if (!http) {
            return formData;
        }

        formData.id = http._id;
        // formData.designationTitle= http.
        formData.designationId = http.designationId;
        // formData.companyName = http.companyName;
        formData.companyId = http.companyId;
        formData.courseId = http.courseId;
        formData.isCurrentlyWorking = http.isCurrentlyWorking;
        formData.since = convertToDayjsDate(http.since);
        formData.until = !formData.isCurrentlyWorking ? convertToDayjsDate(http.until) : undefined;
        formData.description = http.description;
        return formData;
    }

}


