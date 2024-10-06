const DEFAULT_COMPONENT_ATTRIBUTE = "style-as";
const DEFAULT_VARIANT_ATTRIBUTE = "with-";

const createSelector = {
  componentClass: (component) => `.${component}`,
  componentAttr: (component, attr) => `[${attr}="${component}"]`,
  variantClass: (component, group, key) => `.${component}--${group}-${key}`,
  variantAttr: (component, group, key, compAttr, varAttr) =>
    `[${compAttr}="${component}"][${varAttr}${group}="${key}"]`,
};

const applyStyles = (acc, component, base, defaults, compAttr) => ({
  ...acc,
  [createSelector.componentAttr(component, compAttr)]: { ...base, ...defaults },
  [createSelector.componentClass(component)]: { ...base, ...defaults },
});

const accumulateStyles = (
  acc,
  [group, items],
  component,
  theme,
  baseFn,
  defaultFn,
  { attributes, classes },
) => {
  const base = baseFn(theme),
    defaults = defaultFn(theme);
  Object.entries(items).forEach(([key, style]) => {
    if (attributes.enabled)
      acc[
        createSelector.variantAttr(
          component,
          group,
          key,
          attributes.component ?? DEFAULT_COMPONENT_ATTRIBUTE,
          attributes.variant ?? DEFAULT_VARIANT_ATTRIBUTE,
        )
      ] = style;

    if (classes.enabled)
      acc[createSelector.variantClass(component, group, key)] = style;
  });

  return applyStyles(
    acc,
    component,
    base,
    defaults,
    attributes.component ?? DEFAULT_COMPONENT_ATTRIBUTE,
  );
};

export const makeComponent =
  (
    componentName,
    baseStylesFn = () => ({}),
    variantStylesFn = () => ({}),
    defaultStylesFn = () => ({}),
  ) =>
  (theme, options) =>
    Object.entries(variantStylesFn(theme)).reduce(
      (acc, variant) =>
        accumulateStyles(
          acc,
          variant,
          componentName,
          theme,
          baseStylesFn,
          defaultStylesFn,
          options,
        ),
      {},
    );
