import { Separator } from '@shadcnui/components/ui/separator';
import EducationFormComponent from './education-form.component';
import UiDialog from '@libs/design-system/ui-dialog/ui-dialog.component';
import { Button } from 'primereact/button';
import { useState } from 'react';

const EducationComponent = () => {
  const [openAddEducationDialog, setOpenAddEducationDialog] = useState(false);
  const getEducationForm = () => {
    return <EducationFormComponent />;
  };

  return (
    <div className="w-full flex flex-col gap-2 py-3">
      <div className="flex items-center w-full gap-3">
        <Separator className="basis-[88%] " />
        <Button label="Add Button" onClick={() => setOpenAddEducationDialog(true)}></Button>
        <UiDialog
          isVisible={openAddEducationDialog}
          setVisible={setOpenAddEducationDialog}
          title="Add Education"
          dialogWidth={'xl'}
          dialogHeight={'xl'}>
          {getEducationForm()}
        </UiDialog>
      </div>
    </div>
  );
};

export default EducationComponent;
