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
    <Dialog
      onHide={() => setVisible(false)}
      visible={isVisible}
      header={title}
      className={` bg-white ${DIALOG_WIDTH_ALIAS[dialogWidth]}`}>
      <div className="py-2">{children}</div>
    </Dialog>
  );
};

export default UiDialog;
