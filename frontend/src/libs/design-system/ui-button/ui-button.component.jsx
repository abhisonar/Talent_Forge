/* eslint-disable react/prop-types */
import { Button } from '@shadcnui/components/ui/button';

const UiButton = ({
  type = 'button',
  children,
  onClick,
  variant,
  className,
  icon,
  label,
  isLoading,
}) => {
  return (
    <Button type={type} variant={variant} onClick={onClick} className={`p-2 ${className}`}>
      <div className="flex items-center gap-2">
        {isLoading ? (
          <i className="pi pi-spin pi-spinner" style={{ fontSize: '15px' }}></i>
        ) : icon ? (
          icon
        ) : null}
        {children}
      </div>
    </Button>
  );
};

export default UiButton;
