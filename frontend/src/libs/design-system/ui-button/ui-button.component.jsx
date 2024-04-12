import { Button } from "@shadcnui/components/ui/button";

// eslint-disable-next-line react/prop-types
const UiButtom = ({ type = "button", children, onClick, variant }) => {
  return (
    <Button type={type} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default UiButtom;
