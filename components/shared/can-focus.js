export default (theme) => ({
    outline: "none",
    outlineOffset: theme("spacing[0.5]"),
    "&:focus": {
        outline: `${theme("spacing[0.5]")} solid ${theme("colors.primary.400")}`,
    },
});
