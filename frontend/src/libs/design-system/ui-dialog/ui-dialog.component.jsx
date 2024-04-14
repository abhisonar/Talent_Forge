/* eslint-disable react/prop-types */
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@shadcnui/components/ui/dialog';
import { Dialog } from 'primereact/dialog';
import { DIALOG_HEIGHT_ALIAS, DIALOG_WIDTH_ALIAS, UiButton } from '..';

const UiDialog = ({
  isVisible = false,
  setVisible,
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
    // <Dialog>
    //   <DialogTrigger asChild>
    //     {triggerTemplateFun ? triggerTemplateFun : <UiButton>{triggerLabel}</UiButton>}
    //   </DialogTrigger>
    //   <DialogContent className={`${DIALOG_WIDTH_ALIAS[dialogWidth]}`}>
    //     <DialogHeader>
    //       <DialogTitle>{title}</DialogTitle>
    //       <DialogDescription>{description}</DialogDescription>
    //     </DialogHeader>
    //     {children}
    //     {/* <DialogFooter>
    //       { footerTemplateFun ? footerTemplateFun() : ( <UiButton type="submit" onClick={() => saveFun()}>
    //         {saveBtnTitle || "Save"}
    //       </UiButton>
    //       ) }
    //     </DialogFooter> */}
    //   </DialogContent>
    // </Dialog>
    <Dialog
      onHide={() => setVisible(false)}
      visible={isVisible}
      header={title}
      className={`p-4 bg-white ${DIALOG_WIDTH_ALIAS[dialogWidth]}`}>
      <div className="py-2">{children}</div>
    </Dialog>
  );
};

export default UiDialog;
