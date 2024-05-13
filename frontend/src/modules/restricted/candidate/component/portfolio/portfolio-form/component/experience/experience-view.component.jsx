/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import UiCard from "@libs/design-system/ui-card/ui-card.component.jsx";
import UiTextInfo from "@libs/design-system/ui-text-info/ui-text-info.component.jsx";
import {formatDate} from "date-fns";
import {DATE_FORMAT, DAYJS_DATE_FORMAT} from "@libs/resources/constant/date.constant.js";
import {
  ExperienceContext
} from "@restricted/candidate/component/portfolio/portfolio-form/component/experience/experience.context.jsx";
import {UiButton} from "@libs/design-system/index.js";
import {convertToDayjsDate} from "@libs/resources/function/index.js";

const ExperienceViewComponent = ({ experienceDetail, index }) => {
  const experienceContext = useContext(ExperienceContext);

  const experienceDetailCtaTemplate = () => {
    return (
        <div className="flex items-center justify-center h-10">
          <UiButton
              icon={"pi-pencil"}
              rounded={true}
              type="icon"
              onClick={editDetail}
          ></UiButton>
          <UiButton
              icon={"pi-trash"}
              rounded={true}
              variant={"danger"}
              type="icon"
              onClick={deleteDetail}
          ></UiButton>
        </div>
    );
  };

  const titleTemplate = () => {
      return (
          <div className='flex gap-0.5 flex-col'>
              <span className='text-lg font-bold'>{experienceDetail?.designation?.title}</span>
              <span className='text-sm font-light'>{experienceDetail?.company?.title}</span>
          </div>
      )
  }

  const editDetail = () => {
    const { editExperienceDetailFn } = experienceContext;
      editExperienceDetailFn(experienceDetail, index);
  };

  const deleteDetail = () => {
    const { deleteExperienceDetailFn } = experienceContext;
      deleteExperienceDetailFn(experienceDetail, index);
  };

  return (
      <UiCard
          title={titleTemplate}
          ctaTemplate={experienceDetailCtaTemplate}
      >
        <div className="grid grid-cols-2 gap-3">
          <UiTextInfo label={"Since"}>
            {convertToDayjsDate(experienceDetail?.since, DAYJS_DATE_FORMAT)}
          </UiTextInfo>
          <UiTextInfo label={"Until"}>
            {experienceDetail?.until? convertToDayjsDate(experienceDetail?.until, DAYJS_DATE_FORMAT) : "-"}
          </UiTextInfo>
          <UiTextInfo label={"Description"} className={'col-span-full'}>
            {experienceDetail?.description ?? '-'}
          </UiTextInfo>
        </div>
      </UiCard>
  )
}

export default ExperienceViewComponent