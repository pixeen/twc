const createVariantSelector = (name, variantGroup, variantKey) =>
    `[style-as="${name}"][with-${variantGroup}="${variantKey}"]`;

const createVariantClass = (name, variantGroup, variantKey) =>
    `.${name}--${variantGroup}-${variantKey}`;

const applyBaseAndDefaultStyles = (acc, baseStyles, defaultStyles, componentName) => {
    const baseSelector = `[style-as="${componentName}"]`;
    const baseClass = `.${componentName}`;

    acc[baseSelector] = {...baseStyles, ...defaultStyles};
    acc[baseClass] = {...baseStyles, ...defaultStyles};

    return acc;
};

export const makeComponent = (
    componentName,
    baseStyle,
    variantStyles = (theme) => ({_: {}}),
    defaultVariantStyles = (theme) => ({})
) => (theme) => {
    const baseStyles = baseStyle(theme);
    const defaultStyles = defaultVariantStyles(theme);

    const accumulateVariantStyles = (acc, [variantGroup, variantGroupItems]) => {
        Object.entries(variantGroupItems).forEach(([variantKey, variantStyle]) => {
            acc[createVariantSelector(componentName, variantGroup, variantKey)] = variantStyle;
            acc[createVariantClass(componentName, variantGroup, variantKey)] = variantStyle;
        });

        return applyBaseAndDefaultStyles(acc, baseStyles, defaultStyles, componentName);
    };

    return Object.entries(variantStyles(theme)).reduce(accumulateVariantStyles, {});
};
