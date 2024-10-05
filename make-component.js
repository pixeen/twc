export const makeComponent =
    (
        name,
        base,
        variants = (theme) => ({ _: {} }),
        defaultsVariants = (theme) => ({}),
    ) =>
    (theme) => {
        return Object.entries(variants(theme)).reduce(
            (acc, [variantGroup, variantGroupItems]) => {
                Object.entries(variantGroupItems).forEach(
                    ([variantKey, variantStyle]) => {
                        acc[
                            `[style-as="${name}"][with-${variantGroup}="${variantKey}"]`
                        ] = variantStyle;
                        acc[`.${name}--${variantGroup}-${variantKey}`] =
                            variantStyle;
                    },
                );
                acc[`[style-as="${name}"]`] = {
                    ...base(theme),
                    ...defaultsVariants(theme),
                };
                acc[`.${name}`] = {
                    ...base(theme),
                    ...defaultsVariants(theme),
                };
                return acc;
            },
            {},
        );
    };
