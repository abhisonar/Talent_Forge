/* eslint-disable react/prop-types */
import UiTextInfo from '@libs/design-system/ui-text-info/ui-text-info.component';
import { DATE_FORMAT } from '@libs/resources/constant/date.constant';
import { formatDate } from 'date-fns';
import { Card } from 'primereact/card';

const EducationViewCompnent = ({ educationDetail }) => {
  return (
    <Card
      title={
        <span className="text-xl">
          {educationDetail?.educationType?.title} in {educationDetail?.course?.title}
        </span>
      }
      className="p-4">
      <div className="grid grid-cols-2 gap-3">
        <UiTextInfo label={'Institute'} className="col-span-full">
          {educationDetail?.institute?.title}
        </UiTextInfo>
        <UiTextInfo label={'Since'}>{formatDate(educationDetail?.since, DATE_FORMAT)}</UiTextInfo>
        <UiTextInfo label={'Until'}>{formatDate(educationDetail?.until, DATE_FORMAT)}</UiTextInfo>
        <UiTextInfo label={'Grade Sytem'}>{educationDetail?.gradingSystem?.diplayText}</UiTextInfo>
        <UiTextInfo label={'Marks'}>{educationDetail?.marks}</UiTextInfo>
      </div>
    </Card>
  );
};

export default EducationViewCompnent;
