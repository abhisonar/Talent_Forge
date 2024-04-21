import { Separator } from '@shadcnui/components/ui/separator';
import EducationFormComponent from './education-form.component';
import UiDialog from '@libs/design-system/ui-dialog/ui-dialog.component';
import { useState, useEffect } from 'react';
import { UiButton } from '@libs/design-system';
import { listEducationDetail } from '@libs/resources/api';
import { useToast } from '@shadcnui/components/ui/use-toast';
import { toastApiErrorMessage } from '@libs/resources/function';
import EducationViewCompnent from '@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education-view.component';
import { EducationContext } from '@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education.context';

const EducationComponent = () => {
  const [openAddEducationDialog, setOpenAddEducationDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [educationData, setEducationData] = useState([]);

  const { toast } = useToast();

  useEffect(() => {
    getEducationDetails();
  }, []);

  const getEducationDetails = async () => {
    setIsLoading(true);

    listEducationDetail()
      .then((response) => {
        if (!response) return;
        setEducationData(response);
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
    <EducationContext.Provider value={{ educationData, setEducationData }}>
      <div className="w-full flex flex-col gap-2 py-3">
        <div className="flex items-center w-full gap-3">
          <Separator className="basis-[88%] " />
          <UiButton onClick={() => setOpenAddEducationDialog(true)} className={'text-base'}>
            Add Education
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
        <div className="flex flex-col w-full gap-2">
          {educationData.map((item, index) => (
            <EducationViewCompnent educationDetail={item} key={index} />
          ))}
        </div>
      </div>
    </EducationContext.Provider>
  );
};

export default EducationComponent;
