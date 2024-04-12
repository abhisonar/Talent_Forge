export function getAutocompleteOption(option, idKey, valueKey) {
  return {
    id: option[idKey],
    value: option[valueKey],
    data: option,
  };
}
