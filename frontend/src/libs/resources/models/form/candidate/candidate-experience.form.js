import * as Yup from "yup";
import {convertToDayjsDate} from "@libs/resources/function/index.js";

export const validateExperienceDetailschema = Yup.object({
    designationId: Yup.string().required('Designation is required'),
    designationTitle: Yup.string().nullable(),
    companyId: Yup.string().required('Company is required'),
    companyName: Yup.string().nullable(),
    since: Yup.string().required("Since Date is required").nullable(),
    isCurrentlyWorking: Yup.boolean(),
    until: Yup.string().nullable().when(
        'isCurrentlyWorking',
        {is: (value) => !value, then: (s) => s.required('Until date is required'), otherwise: (s) => s}),
    description: Yup.string().max(500).nullable()
});

export const experienceDeatailFormInitialValues = {
    id: null,
    designationTitle: null,
    designationId: null,
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
        formData.designationTitle= undefined
        formData.designationId = http.designation?._id;
        formData.companyName = undefined;
        formData.companyId = http.company?._id;
        formData.isCurrentlyWorking = http.isCurrentlyWorking;
        formData.since = http.since;
        formData.until = !formData.isCurrentlyWorking ? http.until : undefined;
        formData.description = http.description;
        return formData;
    }

    static mapToPayload(fm) {
        const payload = {};

        if (!fm) {
            return payload;
        }

        payload.id = fm._id;
        // payload.designationTitle= fm.
        payload.designationId = fm.designationId;
        // payload.companyName = fm.companyName;
        payload.companyId = fm.companyId;
        payload.courseId = fm.courseId;
        payload.isCurrentlyWorking = fm.isCurrentlyWorking;
        payload.since = convertToDayjsDate(fm.since);
        payload.until = !payload.isCurrentlyWorking ? convertToDayjsDate(fm.until) : undefined;
        payload.description = fm.description;
        return payload;
    }

}

