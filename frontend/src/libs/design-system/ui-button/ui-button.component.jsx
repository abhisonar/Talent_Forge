import { Button } from 'primereact/button';
import './ui-button.component.scss';

/* eslint-disable react/prop-types */
const UiButton = ({
  type = 'button',
  children,
  onClick,
  variant = null,
  className,
  icon,
  label,
  isLoading,
  isDisable = false,
  rounded = false,
  isText,
  size = 'small',
}) => {
  return (
    <Button
      size={size}
      type={type}
      severity={variant}
      onClick={onClick}
      className={`text-sm ${className} ${!label && 'no-label'} ${type === 'icon' && 'icon-button'}`}
      icon={icon && `pi ${icon}`}
      label={label}
      rounded={rounded}
      disabled={isDisable}
      text={type === 'icon' || isText}>
      {children}
    </Button>
  );
};

export default UiButton;
