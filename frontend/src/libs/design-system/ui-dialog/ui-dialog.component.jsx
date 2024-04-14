/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shadcnui/components/ui/dialog';
import { DIALOG_HEIGHT_ALIAS, DIALOG_WIDTH_ALIAS, UiButton } from '..';

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
  dialogHeight,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerTemplateFun ? triggerTemplateFun : <UiButton>{triggerLabel}</UiButton>}
      </DialogTrigger>
      <DialogContent className={`${DIALOG_WIDTH_ALIAS[dialogWidth]}`}>
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
