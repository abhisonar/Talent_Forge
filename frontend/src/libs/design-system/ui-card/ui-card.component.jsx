/* eslint-disable react/prop-types */
import { Card } from 'primereact/card';

const UiCard = ({ children, title, ctaTemplate }) => {
  const titleTemplate = () => {
    return (
      <div className="w-full flex items-center justify-between max-h-10">
        <span className="text-xl">{title}</span>
        <div className="p-2">{ctaTemplate && ctaTemplate()}</div>
      </div>
    );
  };

  return (
    <Card title={titleTemplate} className="">
      {children}
    </Card>
  );
};

export default UiCard;
