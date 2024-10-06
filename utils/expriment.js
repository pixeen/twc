const twc = (config) => {
    return (variants = {}) => {
        // Initialize the base styles
        let styles = {...config};
        if (config.defaultVariants) {
            for (const [key, value] of Object.entries(config.defaultVariants)) {
                if (config.variants[key] && config.variants[key][value]) {
                    styles = {...styles, ...config.variants[key][value]};
                }
            }
        }
        for (const [key, value] of Object.entries(variants)) {
            if (config.variants[key] && config.variants[key][value]) {
                styles = {...styles, ...config.variants[key][value]};
            }
        }
        if (config.compoundVariants) {
            config.compoundVariants.forEach(compoundVariant => {
                const matches = Object.entries(compoundVariant).every(([key, value]) => {
                    return key === 'styles' || variants[key] === value || config.defaultVariants[key] === value;
                });
                if (matches) {
                    styles = {...styles, ...compoundVariant.styles};
                }
            });
        }
        delete styles.variants;
        delete styles.defaultVariants;
        delete styles.compoundVariants;

        return styles;
    };
};


const button = twc({
    color: "blue",
    backgroundColor: "red",
    variants: {
        color: {
            primary: {
                border: "red",
            },
        },
        size: {
            small: {
                fontSize: "0.75rem",
            },
            large: {
                fontSize: "1.25rem",
            },
        },
    },
    defaultVariants: {
        size: "small",
    },
    compoundVariants: [
        {
            color: "primary",
            size: "small",
            styles: {
                backgroundColor: "green",
            },
        },
    ],
});

console.log(button({color: 'primary', size: 'large'}));
