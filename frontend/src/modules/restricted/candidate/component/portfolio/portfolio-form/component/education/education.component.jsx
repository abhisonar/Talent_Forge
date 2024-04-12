import { Separator } from '@shadcnui/components/ui/separator';
import EducationFormComponent from './education-form.component';
import UiDialog from '@libs/design-system/ui-dialog/ui-dialog.component';

const EducationComponent = () => {
  const getEducationForm = () => {
    return <EducationFormComponent />;
  };

  return (
    <div className="w-full flex flex-col gap-2 py-3">
      <div className="flex items-center w-full gap-3">
        <Separator className="basis-[88%] " />
        <UiDialog title="Add Education" triggerLabel="Add Education">
          {getEducationForm()}
        </UiDialog>
      </div>
    </div>
  );
};

export default EducationComponent;
