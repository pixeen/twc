export const createBemClass = ({ block, element = "", modifier = "" }) => {
  if (element && modifier) {
    return `.${block}__${element}--${modifier}`;
  } else if (element) {
    return `.${block}__${element}`;
  } else if (modifier) {
    return `.${block}--${modifier}`;
  }
  return `.${block}`;
};
