/* eslint-disable react/prop-types */
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@shadcnui/components/ui/dialog';
import {Dialog} from 'primereact/dialog';
import {DIALOG_WIDTH_ALIAS} from '..';

const UiDialog = ({
                      isVisible = false,
                      setVisible,
                      onHide,
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
            onHide={() => onHide ? onHide() : setVisible(false)}
            visible={isVisible}
            header={title}
            className={` bg-white ${DIALOG_WIDTH_ALIAS[dialogWidth]}`}>
            <div className="py-2">{children}</div>
        </Dialog>
    );
};

export default UiDialog;
