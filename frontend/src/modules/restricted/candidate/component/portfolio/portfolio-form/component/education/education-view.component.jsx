/* eslint-disable react/prop-types */
import { UiButton } from '@libs/design-system';
import UiCard from '@libs/design-system/ui-card/ui-card.component';
import UiTextInfo from '@libs/design-system/ui-text-info/ui-text-info.component';
import { DATE_FORMAT } from '@libs/resources/constant/date.constant';
import { formatDate } from 'date-fns';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

const EducationViewCompnent = ({ educationDetail }) => {
  const educationDetailCtaTemplate = () => {
    return (
      <div className="">
        <UiButton icon={<Pencil1Icon />} variant={'ghost'}></UiButton>
        <UiButton icon={<TrashIcon color="red" />} variant={'ghost'}></UiButton>
      </div>
    );
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
