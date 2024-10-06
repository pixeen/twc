import canDisable from "./shared/can-disable.js";
import canFocus from "./shared/can-focus.js";
import hasActionType from "./shared/has-action-type.js";

export default (theme) => ({
  base: {
    ...canFocus(theme),
    ...canDisable(theme),
    ...hasActionType(theme),
    alignItems: "center",
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    gap: theme("spacing.3"),
    borderWidth: theme("borderWidth.DEFAULT"),
    borderRadius: theme("borderRadius.DEFAULT"),
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    surface: "fill",
    space: "auto",
  },
  variants: {
    size: {
      small: {
        fontSize: theme("fontSize.sm"),
        paddingInline: theme("spacing.3"),
        paddingBlock: theme("spacing.1"),
      },
      medium: {
        fontSize: theme("fontSize.DEFAULT"),
        paddingInline: theme("spacing.4"),
        paddingBlock: theme("spacing.2"),
      },
      large: {
        fontSize: theme("fontSize.2xl"),
        paddingInline: theme("spacing.5"),
        paddingBlock: theme("spacing.2"),
      },
    },
    surface: {
      ghost: {
        borderColor: "transparent !important",
        backgroundColor: "transparent !important",
        "&:hover, &:active": {
          borderColor: "transparent !important",
          backgroundColor: "transparent !important",
          textDecoration: "underline",
        },
      },
      fill: {
        "&:hover, &:active": {
          textDecoration: "none",
        },
      },
    },
    space: {
      full: {
        flex: "1",
        width: "100%",
      },
      auto: {
        width: "auto",
      },
    },
    color: {
      primary: {
        backgroundColor: theme("colors.primary.200"),
        borderColor: theme("colors.primary.400"),
        color: theme("colors.primary.800"),
        "&:focus": {
          outline: `${theme("spacing[0.5]")} solid ${theme("colors.primary.400")}`,
        },
        "&:hover": {
          backgroundColor: theme("colors.primary.300"),
          borderColor: theme("colors.primary.500"),
          color: theme("colors.primary.900"),
        },
        "&:active": {
          backgroundColor: theme("colors.primary.100"),
          borderColor: theme("colors.primary.600"),
          color: theme("colors.primary.900"),
        },
        "&:disabled:active, &:disabled:hover": {
          color: theme("colors.primary.800"),
          borderColor: theme("colors.primary.500"),
          backgroundColor: theme("colors.primary.200"),
        },
      },
      secondary: {
        backgroundColor: theme("colors.secondary.100"),
        borderColor: theme("colors.secondary.300"),
        color: theme("colors.secondary.800"),
        "&:focus": {
          outline: `${theme("spacing[0.5]")} solid ${theme("colors.secondary.400")}`,
        },
        "&:hover": {
          backgroundColor: theme("colors.secondary.200"),
          borderColor: theme("colors.secondary.400"),
          color: theme("colors.secondary.800"),
        },
        "&:active": {
          backgroundColor: theme("colors.secondary.100"),
          borderColor: theme("colors.secondary.500"),
          color: theme("colors.secondary.800"),
        },
        "&:disabled:active, &:disabled:hover": {
          backgroundColor: theme("colors.secondary.100"),
          borderColor: theme("colors.secondary.400"),
          color: theme("colors.secondary.700"),
        },
      },
      positive: {
        backgroundColor: theme("colors.positive.100"),
        borderColor: theme("colors.positive.300"),
        color: theme("colors.positive.800"),
        "&:focus": {
          outline: `${theme("spacing[0.5]")} solid ${theme("colors.positive.400")}`,
        },
        "&:hover": {
          backgroundColor: theme("colors.positive.200"),
          borderColor: theme("colors.positive.400"),
          color: theme("colors.positive.800"),
        },
        "&:active": {
          backgroundColor: theme("colors.positive.100"),
          borderColor: theme("colors.positive.500"),
          color: theme("colors.positive.800"),
        },
        "&:disabled:active, &:disabled:hover": {
          backgroundColor: theme("colors.positive.100"),
          borderColor: theme("colors.positive.400"),
          color: theme("colors.positive.700"),
        },
      },
      negative: {
        backgroundColor: theme("colors.negative.100"),
        borderColor: theme("colors.negative.300"),
        color: theme("colors.negative.800"),
        "&:focus": {
          outline: `${theme("spacing[0.5]")} solid ${theme("colors.negative.400")}`,
        },
        "&:hover": {
          backgroundColor: theme("colors.negative.200"),
          borderColor: theme("colors.negative.400"),
          color: theme("colors.negative.800"),
        },
        "&:active": {
          backgroundColor: theme("colors.negative.100"),
          borderColor: theme("colors.negative.500"),
          color: theme("colors.negative.800"),
        },
        "&:disabled:active, &:disabled:hover": {
          backgroundColor: theme("colors.negative.100"),
          borderColor: theme("colors.negative.400"),
          color: theme("colors.negative.700"),
        },
      },
    },
  },
  compoundVariants: [
    // [{color: "primary"}, {size: "medium"}, {padding: "100px"}],
  ],
});
