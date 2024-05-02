
import EducationFormComponent from "./education-form.component";
import UiDialog from "@libs/design-system/ui-dialog/ui-dialog.component";
import { useState, useEffect } from "react";
import { UiButton } from "@libs/design-system";
import {
  deleteEducationDetailApi,
  listEducationDetail,
} from "@libs/resources/api";
import { useToast } from "@shadcnui/components/ui/use-toast";
import {
  toastApiErrorMessage,
  toastSuccessMessage,
} from "@libs/resources/function";
import EducationViewCompnent from "@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education-view.component";
import { EducationContext } from "@modules/restricted/candidate/component/portfolio/portfolio-form/component/education/education.context";
import { Divider } from "primereact/divider";
import { Skeleton } from "primereact/skeleton";

const EducationComponent = () => {
  const [openAddEducationDialog, setOpenAddEducationDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const [educationData, setEducationData] = useState([]);
  const [educationDetail, setEducationDetail] = useState({});

  const { toast } = useToast();

  useEffect(() => {
    getEducationDetails();
  }, []);

  const editEducationDetail = (data, index) => {
    setEducationDetail(data);
    setEditIndex(index);
    setOpenAddEducationDialog(true);
  };

  const deleteEducationDetail = (data, index) => {
    if (!data?._id) return;
    deleteEducationDetailApi(data._id)
      .then(() => {
        educationData.splice(index, 1);
        toastSuccessMessage(toast, "Delete Successfully");
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      });
  };

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
        educationData={educationDetail}
        editIndex={editIndex}
        setDialogVisible={setOpenAddEducationDialog}
      />
    );
  };

  const viewSkeleton = () => {
    return (
      <div className="border-round border-1 surface-border p-4 surface-card">
        <div className="flex mb-3">
          <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
          <div>
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="5rem" className="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </div>
        <Skeleton width="100%" height="150px"></Skeleton>
        <div className="flex justify-content-between mt-3">
          <Skeleton width="4rem" height="2rem"></Skeleton>
          <Skeleton width="4rem" height="2rem"></Skeleton>
        </div>
      </div>
    );
  };

  return (
    <EducationContext.Provider
      value={{
        educationData,
        setEducationData,
        editEducationDetail,
        deleteEducationDetail,
      }}
    >
      <div className="w-full flex flex-col gap-2 py-3">
        <div className="flex items-center w-full gap-3">
          <Divider align="right">
            <UiButton
              onClick={() => setOpenAddEducationDialog(true)}
              className={"text-sm"}
              icon={"pi-plus"}
              label={"Add Education"}
            />
          </Divider>
          <UiDialog
            isVisible={openAddEducationDialog}
            setVisible={setOpenAddEducationDialog}
            title="Add Education"
            dialogWidth={"xl"}
            dialogHeight={"xl"}
          >
            {getEducationForm()}
          </UiDialog>
        </div>
        <div className="flex flex-col w-full gap-2">
          {!isLoading ? (
            <>
              {educationData.map((item, index) => (
                <EducationViewCompnent
                  educationDetail={item}
                  key={index}
                  index={index}
                />
              ))}
            </>
          ) : (
            <>{viewSkeleton()}</>
          )}
        </div>
      </div>
    </EducationContext.Provider>
  );
};

export default EducationComponent;
