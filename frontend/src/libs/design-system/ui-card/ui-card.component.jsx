/* eslint-disable react/prop-types */
import { Card } from 'primereact/card';

const UiCard = ({ children, title, ctaTemplate }) => {
  const titleTemplate = () => {
    return (
      <div className="w-full flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <div className="p-1">{ctaTemplate && ctaTemplate()}</div>
      </div>
    );
  };

  return (
    <Card title={titleTemplate} className="p-4">
      {children}
    </Card>
  );
};

export default UiCard;
