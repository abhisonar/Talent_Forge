/* eslint-disable react/prop-types */
import { UiButton } from '@libs/design-system';
import UiCard from '@libs/design-system/ui-card/ui-card.component';
import UiTextInfo from '@libs/design-system/ui-text-info/ui-text-info.component';
import { DATE_FORMAT } from '@libs/resources/constant/date.constant';
import { EducationContext } from '@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education.context';
import { formatDate } from 'date-fns';
import { useContext } from 'react';

const EducationViewCompnent = ({ educationDetail, index }) => {
  const educationContext = useContext(EducationContext);

  const educationDetailCtaTemplate = () => {
    return (
      <div className="flex items-center justify-center h-10">
        <UiButton icon={'pi-pencil'} rounded={true} type="icon" onClick={editDetail}></UiButton>
        <UiButton icon={'pi-trash'} rounded={true} variant={'danger'} type="icon"></UiButton>
      </div>
    );
  };
  const editDetail = () => {
    const { editEducationDetail } = educationContext;
    editEducationDetail(educationDetail, index);
  };

  return (
    <>
      <UiCard
        title={`${educationDetail?.educationType?.title} in ${educationDetail?.course?.title}`}
        ctaTemplate={educationDetailCtaTemplate}>
        <div className="grid grid-cols-2 gap-3">
          <UiTextInfo label={'Institute'} className="col-span-full">
            {educationDetail?.institute?.title}
          </UiTextInfo>
          <UiTextInfo label={'Since'}>{formatDate(educationDetail?.since, DATE_FORMAT)}</UiTextInfo>
          <UiTextInfo label={'Until'}>{formatDate(educationDetail?.until, DATE_FORMAT)}</UiTextInfo>
          <UiTextInfo label={'Grade Sytem'}>
            {educationDetail?.gradingSystem?.diplayText}
          </UiTextInfo>
          <UiTextInfo label={'Marks'}>{educationDetail?.marks}</UiTextInfo>
        </div>
      </UiCard>
    </>
  );
};

export default EducationViewCompnent;
