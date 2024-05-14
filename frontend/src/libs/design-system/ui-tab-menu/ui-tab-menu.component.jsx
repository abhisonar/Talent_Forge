/* eslint-disable react/prop-types */
import {TabMenu} from 'primereact/tabmenu';
import {useState} from "react";

const UiTabMenu = ({items, onTabChange, activeIndex = 0}) => {
    const [localActiveIndex, setLocalActiveIndex] = useState(activeIndex)
    return <TabMenu activeIndex={localActiveIndex} model={items} onTabChange={(e) => {
        onTabChange(e.value);
        setLocalActiveIndex(e.index);
    }}/>;
};

export default UiTabMenu;
