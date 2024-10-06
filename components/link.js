import canFocus from "./shared/can-focus.js";
import hasActionType from "./shared/has-action-type.js";

export default (theme) => ({
    base: {
        ...canFocus(theme),
        ...hasActionType(theme),
        color: theme("colors.secondary.700"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme("borderRadius.DEFAULT"),
        "&:focus": {
            outline: `${theme("spacing[0.5]")} solid ${theme("colors.secondary.500")}`,
        },
        "&:hover": {
            textDecoration: "underline",
            color: theme("colors.secondary.900"),
        },
    },
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
});
