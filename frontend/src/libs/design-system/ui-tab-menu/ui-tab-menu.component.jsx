/* eslint-disable react/prop-types */
import { TabMenu } from 'primereact/tabmenu';

const UiTabMenu = ({ items, onTabChange }) => {
  return <TabMenu model={items} onTabChange={(e) => onTabChange(e.value)} />;
};

export default UiTabMenu;
