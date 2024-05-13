import {
  deleteExperienceDetailApi,
  listExperiencesApi,
} from "@libs/resources/api/candidate/experience.route";
import {
  toastApiErrorMessage,
  toastSuccessMessage,
} from "@libs/resources/function";
import { useToast } from "@shadcnui/components/ui/use-toast";
import { useState, useEffect } from "react";
import ExperienceFormComponent from "./experience-form.component";
import { Skeleton } from "primereact/skeleton";
import { ExperienceContext } from "./experience.context";
import { Divider } from "primereact/divider";
import { UiButton, UiDialog } from "@libs/design-system";
import ExperienceViewComponent from "./experience-view.component";

const ExperienceComponent = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const [experienceData, setExperienceData] = useState([]);
  const [experienceDetail, setExperienceDetail] = useState({});

  const { toast } = useToast();

  useEffect(() => {
    getexperienceDetails();
  }, []);

  const editexperienceDetail = (data, index) => {
    setExperienceDetail(data);
    setEditIndex(index);
    setOpenAddDialog(true);
  };

  const deleteexperienceDetail = (data, index) => {
    if (!data?._id) return;
    deleteExperienceDetailApi(data._id)
      .then(() => {
        experienceData.splice(index, 1);
        toastSuccessMessage(toast, "Delete Successfully");
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      });
  };

  const getexperienceDetails = async () => {
    setIsLoading(true);

    listExperiencesApi()
      .then((response) => {
        if (!response) return;
        setExperienceData(response);
      })
      .catch((err) => {
        toastApiErrorMessage(toast, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getExperienceForm = () => {
    return (
      <ExperienceFormComponent
        setIsSaving={setIsSaving}
        isSaving={isSaving}
        experienceData={experienceDetail}
        editIndex={editIndex}
        setDialogVisible={setOpenAddDialog}
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
    <ExperienceContext.Provider
      value={{
        experienceData,
        setExperienceData,
        editexperienceDetail,
        deleteexperienceDetail,
      }}
    >
      <div className="w-full flex flex-col gap-2 py-3">
        <div className="flex items-center w-full gap-3">
          <Divider align="right">
            <UiButton
              onClick={() => setOpenAddDialog(true)}
              className={"text-sm"}
              icon={"pi-plus"}
              label={"Add Experience"}
            />
          </Divider>
          <UiDialog
            isVisible={openAddDialog}
            setVisible={setOpenAddDialog}
            title="Add Experience"
            dialogWidth={"xl"}
            dialogHeight={"xl"}
          >
            {getExperienceForm()}
          </UiDialog>
        </div>
        <div className="flex flex-col w-full gap-2">
          {!isLoading ? (
            <>
              {experienceData.map((item, index) => (
                <ExperienceViewComponent key={index} />
              ))}
            </>
          ) : (
            <>{viewSkeleton()}</>
          )}
        </div>
      </div>
    </ExperienceContext.Provider>
  );
};

export default ExperienceComponent;
