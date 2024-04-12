import { Button } from '@shadcnui/components/ui/button';

// eslint-disable-next-line react/prop-types
const UiButton = ({ type = 'button', children, onClick, variant, className }) => {
  return (
    <Button type={type} variant={variant} onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export default UiButton;
