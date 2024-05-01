export function getAutocompleteOption(option, idKey, valueKey) {
  return {
    value: option[idKey],
    label: option[valueKey],
    // data: option,
  };
}
