import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@shadcnui/components/ui/dialog';
import { UiButton } from '..';

const UiDialog = ({
  triggerTemplateFun,
  contentTemplatefun,
  footerTemplateFun,
  triggerLabel,
  title,
  saveBtnTitle,
  saveFun,
  description,
  children,
  dialogWidth,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerTemplateFun ? triggerTemplateFun : <UiButton>{triggerLabel}</UiButton>}
      </DialogTrigger>
      <DialogContent className={dialogWidth}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {/* <DialogFooter>
          { footerTemplateFun ? footerTemplateFun() : ( <UiButton type="submit" onClick={() => saveFun()}>
            {saveBtnTitle || "Save"}
          </UiButton>
          ) }
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default UiDialog;
