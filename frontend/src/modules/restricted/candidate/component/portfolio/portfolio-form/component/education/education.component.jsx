import { Separator } from '@shadcnui/components/ui/separator';
import EducationFormComponent from './education-form.component';
import UiDialog from '@libs/design-system/ui-dialog/ui-dialog.component';
import { useState } from 'react';
import { UiButton } from '@libs/design-system';

const EducationComponent = () => {
  const [openAddEducationDialog, setOpenAddEducationDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const getEducationForm = () => {
    return (
      <EducationFormComponent
        setIsSaving={setIsSaving}
        isSaving={isSaving}
        setDialogVisible={setOpenAddEducationDialog}
      />
    );
  };

  return (
    <div className="w-full flex flex-col gap-2 py-3">
      <div className="flex items-center w-full gap-3">
        <Separator className="basis-[88%] " />
        <UiButton onClick={() => setOpenAddEducationDialog(true)} className={'text-base'}>
          Add Button
        </UiButton>
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
