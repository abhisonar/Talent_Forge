/* eslint-disable react/prop-types */
import UiInputSelectComponenet from '@libs/design-system/controls/ui-input-select/ui-input-select.component';
import { getEnumsByType } from '@libs/resources/api/other/enum.api';
import { getAutocompleteOption } from '@libs/resources/function/autocomplete.function';
import React, { useState, useEffect } from 'react';

const EnumSelectComponent = ({
  enumType,
  placeholder,
  selectedValue,
  setSelectedValue,
  error,
  onBlur,
}) => {
  const [enumData, setEnumData] = useState([]);

  useEffect(() => {
    getList();
  }, [enumType]);

  const getList = async () => {
    if (!enumType) return;
    getEnumsByType(enumType).then((response) => {
      const data = response?.map((item) => getAutocompleteOption(item, 'code', 'diplayText'));
      setEnumData([...data]);
    });
  };
  return (
    <UiInputSelectComponenet
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      isAsyncData={false}
      placeholder={placeholder}
      options={enumData}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default EnumSelectComponent;
