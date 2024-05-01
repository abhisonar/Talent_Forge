/* eslint-disable react/prop-types */
import { TabView, TabPanel } from 'primereact/tabview';

// tabData = {id, header: string or template, content: template, headerIcon: string }

const UiTab = ({ tabData, onTabChange }) => {
  return (
    <TabView onTabChange={(e) => onTabChange(e.index)} panelContainerClassName="no">
      {tabData &&
        tabData?.map((item, index) => (
          <TabPanel header={item?.header} leftIcon={`pi mr-2 ${item?.headerIcon}`} key={index}>
            {item?.content && item?.content()}
          </TabPanel>
        ))}
    </TabView>
  );
};

export default UiTab;
