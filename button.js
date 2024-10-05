import { makeComponent } from "./make-component.js";

const name = "button";

const defaultsVariants = (theme) => ({
  ...variants(theme).color.primary,
  ...variants(theme).size.medium,
  ...variants(theme).surface.fill,
  ...variants(theme).space.auto,
});

const base = (theme) => ({
  cursor: "pointer",
  userSelect: "none",
  alignItems: "center",
  position: "relative",
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  gap: theme("spacing.3"),
  borderWidth: theme("borderWidth.DEFAULT"),
  borderRadius: theme("borderRadius.DEFAULT"),
  fontWeight: theme("fontWeight.medium"),
  lineHeight: theme("lineHeight.none"),
  outline: "none",
  "&:disabled": {
    opacity: theme("opacity.50"),
    cursor: "not-allowed",
  },
});

const variants = (theme) => ({
  size: {
    small: {
      fontSize: theme("fontSize.sm"),
      paddingLeft: theme("spacing.3"),
      paddingRight: theme("spacing.3"),
      paddingTop: theme("spacing[1]"),
      paddingBottom: theme("spacing[1]"),
    },
    medium: {
      fontSize: theme("fontSize.DEFAULT"),
      paddingLeft: theme("spacing.4"),
      paddingRight: theme("spacing.4"),
      paddingTop: theme("spacing.2"),
      paddingBottom: theme("spacing.2"),
    },
    large: {
      fontSize: theme("fontSize.2xl"),
      paddingLeft: theme("spacing.5"),
      paddingRight: theme("spacing.5"),
      paddingTop: theme("spacing.2"),
      paddingBottom: theme("spacing.2"),
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
        outlineOffset: theme("spacing[0.5]"),
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
      backgroundColor: theme("colors.secondary.200"),
      borderColor: theme("colors.secondary.400"),
      color: theme("colors.secondary.800"),
      "&:focus": {
        outline: `${theme("spacing[0.5]")} solid ${theme("colors.secondary.400")}`,
        outlineOffset: theme("spacing[0.5]"),
      },
      "&:hover": {
        backgroundColor: theme("colors.secondary.300"),
        borderColor: theme("colors.secondary.500"),
        color: theme("colors.secondary.900"),
      },
      "&:active": {
        backgroundColor: theme("colors.secondary.100"),
        borderColor: theme("colors.secondary.600"),
        color: theme("colors.secondary.900"),
      },
      "&:disabled:active, &:disabled:hover": {
        backgroundColor: theme("colors.secondary.200"),
        borderColor: theme("colors.secondary.500"),
        color: theme("colors.secondary.800"),
      },
    },
    positive: {
      backgroundColor: theme("colors.positive.200"),
      borderColor: theme("colors.positive.400"),
      color: theme("colors.positive.800"),
      "&:focus": {
        outline: `${theme("spacing[0.5]")} solid ${theme("colors.positive.400")}`,
        outlineOffset: theme("spacing[0.5]"),
      },
      "&:hover": {
        backgroundColor: theme("colors.positive.300"),
        borderColor: theme("colors.positive.500"),
        color: theme("colors.positive.900"),
      },
      "&:active": {
        backgroundColor: theme("colors.positive.100"),
        borderColor: theme("colors.positive.600"),
        color: theme("colors.positive.900"),
      },
      "&:disabled:active, &:disabled:hover": {
        backgroundColor: theme("colors.positive.200"),
        borderColor: theme("colors.positive.500"),
        color: theme("colors.positive.800"),
      },
    },
    negative: {
      backgroundColor: theme("colors.negative.200"),
      borderColor: theme("colors.negative.400"),
      color: theme("colors.negative.800"),
      "&:focus": {
        outline: `${theme("spacing[0.5]")} solid ${theme("colors.negative.400")}`,
        outlineOffset: theme("spacing[0.5]"),
      },
      "&:hover": {
        backgroundColor: theme("colors.negative.300"),
        borderColor: theme("colors.negative.500"),
        color: theme("colors.negative.900"),
      },
      "&:active": {
        backgroundColor: theme("colors.negative.100"),
        borderColor: theme("colors.negative.600"),
        color: theme("colors.negative.900"),
      },
      "&:disabled:active, &:disabled:hover": {
        backgroundColor: theme("colors.negative.200"),
        borderColor: theme("colors.negative.500"),
        color: theme("colors.negative.800"),
      },
    },
  },
});

export default makeComponent(name, base, variants, defaultsVariants);
