export const stripId = (item) => {
  return Object.assign({}, { text: item.text, value: item.value })
}
